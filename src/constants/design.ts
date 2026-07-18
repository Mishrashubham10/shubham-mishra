export const DESIGN = {
  layout: {
    container: 'mx-auto w-full max-w-7xl px-6 lg:px-8',
    section: 'scroll-mt-24 py-28',
    hero: "min-h-[calc(100vh-4rem)] flex items-center py-24"
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