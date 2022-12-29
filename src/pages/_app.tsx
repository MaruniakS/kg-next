import { ExtendedAppProps } from '@core/types/next'
import { CacheProvider } from '@emotion/react'
import theme from '@lib/theme'
import createEmotionCache from '@lib/theme/createEmotionCache'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'
import { ReactElement } from 'react'

const clientSideEmotionCache = createEmotionCache()

const App: React.FC<ExtendedAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: ExtendedAppProps) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  )
} 

export default appWithTranslation(App)
