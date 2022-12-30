import { mont } from '@lib/fonts'
import colors from '@lib/theme/colors'
import { createTheme, responsiveFontSizes } from '@mui/material'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true
  }
}

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary,
    },
  },
  typography: {
    fontFamily: mont.style.fontFamily,
    h1: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1720,
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
