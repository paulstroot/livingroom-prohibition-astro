import { getCollection } from "astro:content";
import { readdirSync, readFileSync } from "fs";
import yaml from "js-yaml";
import { join } from "path";

type ChildComponentInfo = {
  name: string;
  props?: string[];
};

export type ComponentMetadata = {
  childComponent?: ChildComponentInfo;
  fallbackFor?: string;
  supportsSlots?: boolean;
};

let metadataCache: Map<string, ComponentMetadata> | null = null;
let nestedBlockPropertiesCache: Set<string> | null = null;

/**
 * Loads and caches component metadata from the docs-components collection
 */
export async function getComponentMetadataMap(): Promise<Map<string, ComponentMetadata>> {
  if (metadataCache) {
    return metadataCache;
  }

  metadataCache = new Map();

  try {
    const components = await getCollection("docs-components");

    for (const component of components) {
      // Skip example files or components without proper data
      if (!component || !component.id || component.id.includes("/examples/")) {
        continue;
      }

      // Extract component key from id (e.g., "components/building-blocks/core-elements/list/index" -> "building-blocks/core-elements/list")
      const slug = component.id.replace(/^components\//, "").replace(/\/index$/, "");

      const slots = component.data?.slots || [];
      const supportsSlots = slots.length > 0;

      let childComponent: ChildComponentInfo | undefined;
      let fallbackFor: string | undefined;

      for (const slot of slots) {
        if (slot?.child_component && slot?.fallback_for) {
          childComponent = slot.child_component;
          fallbackFor = slot.fallback_for;
          break;
        } else if (slot?.fallback_for && !fallbackFor) {
          fallbackFor = slot.fallback_for;
        }
      }

      metadataCache.set(slug, {
        childComponent,
        fallbackFor,
        supportsSlots,
      });
    }
  } catch (error) {
    console.error("Error loading component metadata:", error);
  }

  return metadataCache;
}

/**
 * Scans all structure-value files to find properties that can contain nested blocks
 */
export async function getNestedBlockProperties(): Promise<Set<string>> {
  if (nestedBlockPropertiesCache) {
    return nestedBlockPropertiesCache;
  }

  nestedBlockPropertiesCache = new Set<string>();

  try {
    const componentsDir = "src/components";

    function findStructureValueFiles(dir: string): string[] {
      const files: string[] = [];

      try {
        const entries = readdirSync(dir, { withFileTypes: true });

        for (const entry of entries) {
          const fullPath = join(dir, entry.name);

          if (entry.isDirectory()) {
            files.push(...findStructureValueFiles(fullPath));
          } else if (entry.name.endsWith(".cloudcannon.structure-value.yml")) {
            files.push(fullPath);
          }
        }
      } catch {}

      return files;
    }

    const structureValueFiles = findStructureValueFiles(componentsDir);

    for (const filePath of structureValueFiles) {
      try {
        const content = readFileSync(filePath, "utf8");
        const configData = yaml.load(content) as any;

        // Structure-value files don't have _structures, but we can check _inputs for structure references
        // The actual structure definitions are now in .cloudcannon/structures/*.cloudcannon.structures.yml
        // But we can still extract nested block property names from _inputs that reference structures
        if (configData._inputs && typeof configData._inputs === "object") {
          for (const [inputKey, inputConfig] of Object.entries(configData._inputs)) {
            const input = inputConfig as any;
            if (input?.type === "array" && input?.options?.structures) {
              const structures = input.options.structures;
              if (typeof structures === "string" && structures.startsWith("_structures.")) {
                const structureName = structures.replace("_structures.", "");
                nestedBlockPropertiesCache.add(structureName);
              }
            }
          }
        }
      } catch (error) {
        console.error(`Error parsing structure-value file ${filePath}:`, error);
      }
    }

    const metadataMap = await getComponentMetadataMap();
    for (const metadata of metadataMap.values()) {
      if (metadata.fallbackFor) {
        nestedBlockPropertiesCache.add(metadata.fallbackFor);
      }
    }

    nestedBlockPropertiesCache.add("formBlocks");
  } catch (error) {
    console.error("Error loading structure-value files for block properties:", error);
  }

  return nestedBlockPropertiesCache;
}
