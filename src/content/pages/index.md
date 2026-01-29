---
_schema: default
title: Home Page
pageSections:
  - _component: page-sections/builders/custom-section
    label: Custom Hero Section
    contentSections:
      - _component: building-blocks/core-elements/spacer
        size: 3xl
      - _component: building-blocks/wrappers/split
        label: Inner Logos
        firstColumnContentSections:
          - _component: building-blocks/core-elements/heading
            text: The Living Room
            level: h2
            size: default
            alignX: end
            iconName:
            iconPosition: before
        secondColumnContentSections:
          - _component: building-blocks/core-elements/heading
            text: Prohibition
            level: h2
            size: default
            alignX: start
            iconName:
            iconPosition: before
        distributionMode: half
        fixedWidth: 0
        minSplitWidth: 760
        verticalAlignment: center
        reverse: false
        reverseOrderOnMobile: false
        gap: 3xl
      - _component: building-blocks/core-elements/spacer
        size: 3xl
    maxContentWidth: 2xl
    paddingHorizontal: 3xl
    paddingVertical: 3xl
    colorScheme: contrast
    backgroundColor: base
    backgroundImage:
      source: https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg
      alt: ''
      positionVertical: top
      positionHorizontal: center
    rounded: false
  - _component: page-sections/builders/custom-section
    label: Blue Gradient
    contentSections:
      - _component: building-blocks/core-elements/text
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        alignX: center
      - _component: building-blocks/core-elements/heading
        text: Second Point that Speaks to Both
        level: h3
        size: default
        alignX: center
        iconName:
        iconPosition: before
      - _component: building-blocks/core-elements/text
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        alignX: center
      - _component: building-blocks/wrappers/split
        label: Split content
        firstColumnContentSections:
          - _component: building-blocks/core-elements/heading
            text: The Living Room
            level: h2
            size: default
            alignX: start
            iconName:
            iconPosition: before
          - _component: building-blocks/core-elements/heading
            text: Where Minneapolis Comes to Play
            level: h3
            size: default
            alignX: start
            iconName:
            iconPosition: before
          - _component: building-blocks/core-elements/text
            text: >-
              Mingle, flirt, sip and savor in a modern playground that
              epitimizes minneapolis cool. Lorem ipsum dolor sit amet,
              consectetuer adiplicing elit, sed dom.
            alignX: start
        secondColumnContentSections:
          - _component: building-blocks/core-elements/heading
            text: Prohibition
            level: h2
            size: default
            alignX: start
            iconName:
            iconPosition: before
          - _component: building-blocks/core-elements/heading
            text: A Speakeasy in the Skyk
            level: h3
            size: default
            alignX: start
            iconName:
            iconPosition: before
          - _component: building-blocks/core-elements/text
            text: >-
              Mingle, flirt, sip and savor in a modern playground that
              epitimizes minneapolis cool. Lorem ipsum dolor sit amet,
              consectetuer adiplicing elit, sed dom.
            alignX: start
        distributionMode: half
        fixedWidth:
        minSplitWidth: 500
        verticalAlignment: top
        reverse: false
        reverseOrderOnMobile: false
        gap: lg
      - _component: building-blocks/core-elements/testimonial
        text: >-
          Here's a quote from somonemet, consectetuer adispilid elit, sed iam
          dononmojmy ning exuismo ditneic utl .ser
        authorName:
        authorDescription:
        authorImage: ''
        alignX: center
      - _component: building-blocks/core-elements/heading
        text: Gallery Headline here
        level: h2
        size: default
        alignX: center
        iconName:
        iconPosition: before
    maxContentWidth: lg
    paddingHorizontal: lg
    paddingVertical: 3xl
    colorScheme: contrast
    backgroundColor: accent
    backgroundImage:
      source: ''
      alt: ''
      positionVertical: top
      positionHorizontal: center
    rounded: false
  - _component: page-sections/features/feature-slider
    slides:
      - _component: page-sections/features/feature-slider/feature-slider-item
        eyebrow: Slide 1
        title: This is the caption for slide 1
        description: Short description for this slide.
        imageSource: /src/assets/images/component-library/sunset.jpg
        imageAlt: Slide image alt text
        minSplitWidth: 0
      - _component: page-sections/features/feature-slider/feature-slider-item
        eyebrow: Slide 2
        title: And here is another slide
        description: Short description for this slide.
        imageSource: https://images.pexels.com/photos/1516418/pexels-photo-1516418.jpeg
        imageAlt: Slide image alt text
        minSplitWidth: 0
    colorScheme: contrast
    backgroundColor: surface
---
