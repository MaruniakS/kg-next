import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true
  }
}

const theme = createTheme({
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
