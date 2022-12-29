import colors from '@lib/theme/colors'
import { Box, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import { useTranslation } from 'next-i18next'

import logotypeSrc from '@images/rebranding/logotype.svg'
import Image from 'next/image'
import LogoCard from './LogoCard'

import logoSturctureSrc from '@images/rebranding/logo-structure.png'
import logo1Src from '@images/rebranding/logo1.svg'
import logo2Src from '@images/rebranding/logo2.svg'
import logo3Src from '@images/rebranding/logo3.svg'

const LogotypeSection: React.FC = () => {
  const { t } = useTranslation('rebranding')
  return (
    <Box mt={30}>
      <Grid2 container spacing={2}>
        <Grid2 xs={12} md={3}>
          <Typography variant="h3">{t('logoSection.type.heading')}</Typography>
        </Grid2>
        <Grid2 xs={12} mdOffset={1} md={8}>
          <Typography variant="h5" color={colors.grey}>
            {t('logoSection.type.description1')}
          </Typography>
          <Typography variant="h5" color={colors.grey} my={4}>
            {t('logoSection.type.description2')}
          </Typography>
          <Image
            src={logotypeSrc}
            alt="logotype"
            style={{ maxWidth: '100%' }}
          />
        </Grid2>
      </Grid2>
      <Grid2 container spacing={2} mt={16}>
        <Grid2 xs={12}>
        <Typography variant="h3" mb={8}>
          {t('logoSection.meaning.heading')}
        </Typography>
        </Grid2>
        <LogoCard
          label={t('logoSection.meaning.subheading1')}
          description={t('logoSection.meaning.description1')}
          imageSrc={logo1Src}
        />
        <LogoCard
          label={t('logoSection.meaning.subheading2')}
          description={t('logoSection.meaning.description2')}
          imageSrc={logo2Src}
        />
        <LogoCard
          label={t('logoSection.meaning.subheading3')}
          description={t('logoSection.meaning.description3')}
          imageSrc={logo3Src}
        />
      </Grid2>
      <Grid2 container spacing={2} alignItems="center">
        <Grid2 xs={12} md={5}>
          <Typography variant="h3">{t('logoSection.structure.heading')}</Typography>
          <Typography variant="h5" color={colors.grey} mt={4}>{t('logoSection.structure.description1')}</Typography>
          <Typography variant="h5" color={colors.grey}>{t('logoSection.structure.description2')}</Typography>
        </Grid2>
        <Grid2 xs={12} md={6} mdOffset={1} textAlign="center">
          <Image src={logoSturctureSrc} alt="logo structure"  height="500"/>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default LogotypeSection
