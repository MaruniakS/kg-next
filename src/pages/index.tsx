import { Container } from '@mui/material'
import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import ColorsSection from '@components/rebranding/ColorsSection'
import LogotypeSection from '@components/rebranding/LogotypeSection'
import MainSection from '@components/rebranding/MainSection'
import NumbersSection from '@components/rebranding/NumbersSection'
import ValuesSection from '@components/rebranding/ValuesSection'

const Rebranding: NextPage = () => {
  const { t } = useTranslation('rebranding')
  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="lg">
        <MainSection />
        <NumbersSection />
        <ValuesSection />
        <LogotypeSection />
        <ColorsSection />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['rebranding'])),
    },
  }
}

export default Rebranding
