/**
 * SURGE+ Design System Theme
 * Comprehensive design tokens for consistent styling across the application
 */

export const theme = {
  // Color Palette
  colors: {
    // Primary Brand Colors
    primary: '#ADFF2F', // Surge Lime
    primaryLight: '#9BFF00', // Bright Lime
    primaryDark: '#98E62D',
    
    // Grayscale
    black: '#0A0A0A',
    darkGray: '#1A1A1A',
    mediumGray: '#3A3A3A',
    gray: '#6B7280',
    lightGray: '#9CA3AF',
    veryLightGray: '#E5E7EB',
    offWhite: '#F5F5F5',
    white: '#FFFFFF',
    
    // Semantic Colors
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
    
    // Background Colors
    background: {
      primary: '#FFFFFF',
      secondary: '#FAFAFA',
      tertiary: '#F5F5F5',
      dark: '#0A0A0A',
      darkSecondary: '#1A1A1A',
    },
    
    // Text Colors
    text: {
      primary: '#0A0A0A',
      secondary: '#6B7280',
      tertiary: '#9CA3AF',
      inverse: '#FFFFFF',
      onPrimary: '#0A0A0A',
    },
  },

  // Typography
  typography: {
    // Font Families
    fonts: {
      primary: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'SF Mono', 'Monaco', 'Inconsolata', 'Courier New', monospace",
    },
    
    // Font Sizes
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '32px',
      '4xl': '40px',
      '5xl': '48px',
      '6xl': '56px',
      '7xl': '64px',
      '8xl': '72px',
    },
    
    // Font Weights
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    
    // Line Heights
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.6,
      loose: 1.8,
    },
    
    // Letter Spacing
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.02em',
      wider: '0.05em',
    },
  },

  // Spacing (4px base grid)
  spacing: {
    0: '0',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',
    40: '160px',
    48: '192px',
  },

  // Breakpoints
  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },

  // Media Queries
  media: {
    mobile: '@media (min-width: 375px)',
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1024px)',
    wide: '@media (min-width: 1440px)',
    hover: '@media (hover: hover) and (pointer: fine)',
    reducedMotion: '@media (prefers-reduced-motion: reduce)',
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '20px',
    '3xl': '24px',
    full: '9999px',
  },

  // Shadows (Elevation System)
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    glow: '0 0 20px rgba(173, 255, 47, 0.5), 0 0 40px rgba(173, 255, 47, 0.3)',
    glowStrong: '0 0 30px rgba(173, 255, 47, 0.7), 0 0 60px rgba(173, 255, 47, 0.4)',
  },

  // Z-Index Scale
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },

  // Transitions
  transitions: {
    duration: {
      instant: '50ms',
      fast: '150ms',
      normal: '200ms',
      slow: '300ms',
      slower: '500ms',
    },
    
    easing: {
      linear: 'linear',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },

  // Layout
  layout: {
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      full: '100%',
    },
    
    containerPadding: {
      mobile: '16px',
      tablet: '24px',
      desktop: '32px',
    },
  },

  // Component-specific tokens
  components: {
    button: {
      height: {
        small: '36px',
        medium: '48px',
        large: '56px',
        xl: '64px',
      },
      padding: {
        small: '12px 20px',
        medium: '16px 32px',
        large: '20px 40px',
        xl: '24px 48px',
      },
    },
    
    input: {
      height: {
        small: '36px',
        medium: '44px',
        large: '52px',
      },
    },
    
    card: {
      padding: {
        small: '16px',
        medium: '24px',
        large: '32px',
      },
    },
  },
} as const;

// Type exports for TypeScript
export type Theme = typeof theme;
export type ThemeColors = typeof theme.colors;
export type ThemeSpacing = typeof theme.spacing;
export type ThemeBreakpoints = typeof theme.breakpoints;

export default theme;
