import { EmotionCache } from '@emotion/cache'
import { NextPage } from 'next'
import { AppProps } from 'next/app'

export type ExtendedNextPage<P, IP = P> = NextPage<P, IP> & {
  getLayout?: (_page: ReactElement) => ReactNode
}

type ExtendedAppProps = AppProps & {
  emotionCache?: EmotionCache
  Component: ExtendedNextPage
}
