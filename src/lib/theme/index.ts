import colors from '@lib/theme/colors'
import { createTheme } from '@mui/material'
import { Montserrat } from '@next/font/google'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true
  }
}

export const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary,
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    subtitle1: {
      color: colors.grey,
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

export default theme
