import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import theme from '@lib/theme'
import createEmotionCache from '@lib/theme/createEmotionCache'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const clientSideEmotionCache = createEmotionCache()

interface ExtendedAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: ExtendedAppProps) {
  return (
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
}
