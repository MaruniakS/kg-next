import { Container } from '@mui/material'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import RebrandingLayout from '@components/layouts/rebranding'
import BrandSection from '@components/rebranding/BrandSection'
import ColorsSection from '@components/rebranding/ColorsSection'
import LinksSection from '@components/rebranding/LinksSection'
import LogotypeSection from '@components/rebranding/LogotypeSection'
import MainSection from '@components/rebranding/MainSection'
import NumbersSection from '@components/rebranding/NumbersSection'
import ValuesSection from '@components/rebranding/ValuesSection'
import { ReactElement } from 'react'

const Rebranding = () => {
  const { t } = useTranslation('rebranding')
  return (
    <>
      <Head>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <MainSection />
        <NumbersSection />
        <ValuesSection />
        <LogotypeSection />
        <ColorsSection />
        <LinksSection />
        <BrandSection />
      </Container>
    </>
  )
}

Rebranding.getLayout = (page: ReactElement) => (
  <RebrandingLayout>{page}</RebrandingLayout>
)

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'rebranding',
        'navigation',
      ])),
    },
  }
}

export default Rebranding
