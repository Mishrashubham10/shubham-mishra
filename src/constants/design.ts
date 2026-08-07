export const DESIGN = {
  layout: {
    container: 'mx-auto w-full max-w-7xl px-6 lg:px-8',
    section: 'scroll-mt-24 py-28',
    hero: 'min-h-[calc(100vh-4rem)] flex items-center py-24',
  },

  typography: {
    hero: 'text-5xl md:text-7xl font-bold tracking-tight',
    h1: 'text-4xl md:text-6xl font-bold',
    h2: 'text-3xl md:text-5xl font-bold',
    h3: 'text-2xl font-semibold',
    body: 'text-muted-foreground leading-7',
    small: 'text-sm text-muted-foreground',
  },

  components: {
    badge: {
      default:
        'inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium',
    },

    sectionHeading: {
      wrapper: 'max-w-3xl space-y-4',
      title: 'text-3xl md:text-5xl font-bold tracking-tight',
      description: 'text-muted-foreground text-lg leading-8',
    },

    metadataGrid: {
      wrapper: `
    grid
    gap-4
  `,

      card: `
    rounded-2xl
    border
    border-border/60
    bg-card/40
    backdrop-blur-sm
    px-5
    py-5
    transition-all
    duration-300
    hover:border-primary/20
    hover:bg-card/60
  `,

      label: `
    text-[11px]
    font-medium
    uppercase
    tracking-[0.24em]
    text-muted-foreground
  `,

      value: `
    mt-2
    text-base
    font-semibold
    text-foreground
    leading-none
  `,
    },

    techStack: {
      wrapper: `
    flex
    flex-wrap
    items-center
    gap-2
  `,

      pill: `
    inline-flex
    items-center
    gap-2
    rounded-full
    border
    border-border/60
    bg-card/50
    px-3
    py-1.5
    text-sm
    font-medium
    text-muted-foreground
    transition-all
    duration-300
    hover:border-primary/20
    hover:bg-card
    hover:text-foreground
  `,

      small: `
    gap-1.5
    px-2.5
    py-1
    text-xs
  `,

      medium: `
    gap-2
    px-3.5
    py-1.5
    text-sm
  `,

      icon: `
    shrink-0
  `,
    },

    projectOverview: {
      wrapper: `
        mt-12
        max-w-3xl
        space-y-6
    `,

      paragraph: `
        text-lg
        leading-8
        text-muted-foreground
    `,
    },

    richText: {
      wrapper: `
    mt-12
    max-w-3xl
    space-y-6
  `,

      paragraph: `
    text-lg
    leading-8
    text-muted-foreground
  `,
    },

    projectOutcomes: {
      wrapper: `
    mt-12
    divide-y
    divide-border
  `,

      item: `
    grid
    gap-6
    py-10
    md:grid-cols-[80px_1fr]
  `,

      number: `
    text-4xl
    font-semibold
    tracking-tight
    text-muted-foreground/40
  `,

      content: `
    space-y-3
  `,

      title: `
    text-2xl
    font-semibold
    tracking-tight
    text-foreground
  `,

      description: `
    max-w-2xl
    text-muted-foreground
    leading-7
  `,
    },

    projectProblemSolution: {
      wrapper: `
    mt-12
    grid
    gap-12
    lg:grid-cols-2
  `,

      column: `
    space-y-6
  `,

      label: `
    text-xs
    font-semibold
    uppercase
    tracking-[0.25em]
    text-primary
  `,

      title: `
    text-2xl
    font-semibold
    tracking-tight
  `,
    },

    projectArchitecture: {
      wrapper: `
    mt-12
    max-w-4xl
  `,

      item: `
    relative
    pl-16
    pb-12
  `,

      indicator: `
    absolute
    left-0
    top-2
    flex
    h-8
    w-8
    items-center
    justify-center
    rounded-full
    border
    border-border
    bg-background
  `,

      line: `
    absolute
    left-4
    top-10
    h-full
    w-px
    bg-border
  `,

      title: `
    text-xl
    font-semibold
    tracking-tight
  `,

      description: `
    mt-3
    max-w-2xl
    leading-7
    text-muted-foreground
  `,
    },

    projectFeatures: {
      wrapper: `
    mt-12
    divide-y
    divide-border
  `,

      item: `
    flex
    gap-5
    py-8
  `,

      icon: `
    mt-1
    size-5
    shrink-0
    text-primary
  `,

      content: `
    space-y-2
  `,

      title: `
    text-xl
    font-semibold
    tracking-tight
  `,

      description: `
    leading-7
    text-muted-foreground
  `,
    },

    projectChallenges: {
      wrapper: `
    mt-12
    space-y-12
  `,

      item: `
    border-l-2
    border-border
    pl-8
  `,

      number: `
    text-xs
    uppercase
    tracking-[0.25em]
    text-primary
  `,

      label: `
    text-sm
    font-semibold
    uppercase
    tracking-wide
    text-muted-foreground
  `,

      title: `
    mt-4
    text-lg
    font-semibold
  `,

      arrow: `
    my-5
    text-primary
  `,
    },

    projectLearnings: {
      wrapper: `
    mt-12
    divide-y
    divide-border
  `,

      item: `
    grid
    gap-6
    py-10
    md:grid-cols-[80px_1fr]
  `,

      number: `
    text-4xl
    font-semibold
    tracking-tight
    text-primary/30
  `,

      content: `
    space-y-4
  `,

      title: `
    text-2xl
    font-semibold
    tracking-tight
  `,
    },

    projectRoadmap: {
      wrapper: `
    mt-12
    divide-y
    divide-border
  `,

      item: `
    flex
    gap-5
    py-8
  `,

      indicator: `
    mt-2
    size-3
    shrink-0
    rounded-full
    bg-primary
  `,

      content: `
    space-y-2
  `,

      version: `
    text-xs
    font-semibold
    uppercase
    tracking-[0.25em]
    text-primary
  `,

      title: `
    text-xl
    font-semibold
    tracking-tight
  `,

      description: `
    leading-7
    text-muted-foreground
  `,

      indicatorCompleted: `
bg-primary
`,

      indicatorPlanned: `
border
border-primary
bg-transparent
`,
    },
  },

  radius: {
    card: 'rounded-2xl',
    button: 'rounded-xl',
    full: 'rounded-full',
  },

  transition: {
    default: 'transition-all duration-300 ease-in-out',
  },
} as const;
