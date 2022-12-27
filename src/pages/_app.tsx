import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import theme from '@lib/theme'
import createEmotionCache from '@lib/theme/createEmotionCache'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import Head from 'next/head'

// import '@lib/theme/global.css'

const clientSideEmotionCache = createEmotionCache()

interface ExtendedAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const App: React.FC<ExtendedAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: ExtendedAppProps) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
)

export default appWithTranslation(App)
