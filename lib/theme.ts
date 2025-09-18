export type GlobalTheme = 'blue' | 'emerald' | 'violet'

// Set this once to choose the global theme for the whole site
// Example: export const GLOBAL_THEME: GlobalTheme = 'emerald'
export const GLOBAL_THEME: GlobalTheme = 'blue'

export function themeGradient(theme: GlobalTheme) {
  switch (theme) {
    case 'emerald':
      return 'bg-gradient-to-r from-emerald-600 to-teal-500'
    case 'violet':
      return 'bg-gradient-to-r from-violet-600 to-fuchsia-500'
    default:
      return 'bg-gradient-to-r from-blue-600 to-cyan-500'
  }
}

