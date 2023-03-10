import colors from '@lib/theme/colors'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
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
    <Box id="logotype" mt={{ xs: 0, md: 10}} pt={15}>
      <Grid container spacing={2}>
        <Grid xs={12} md={3}>
          <Typography variant="h3">{t('logoSection.type.heading')}</Typography>
        </Grid>
        <Grid xs={12} mdOffset={1} md={8}>
          <Typography variant="body1" color={colors.grey}>
            {t('logoSection.type.description1')}
          </Typography>
          <Typography variant="body1" color={colors.grey} my={4}>
            {t('logoSection.type.description2')}
          </Typography>
          <Image
            src={logotypeSrc}
            alt="logotype"
            style={{ maxWidth: '100%' }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={{ xs: 8, md: 16}}>
        <Grid xs={12}>
          <Typography variant="h3" mb={8}>
            {t('logoSection.meaning.heading')}
          </Typography>
        </Grid>
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
      </Grid>
      <Grid container spacing={2} alignItems="center" mt={{xs: 8, md: 0}}>
        <Grid xs={12} md={5}>
          <Typography variant="h3">
            {t('logoSection.structure.heading')}
          </Typography>
          <Typography variant="body1" color={colors.grey} mt={4}>
            {t('logoSection.structure.description1')}
          </Typography>
          <Typography variant="body1" color={colors.grey}>
            {t('logoSection.structure.description2')}
          </Typography>
        </Grid>
        <Grid xs={12} md={6} mdOffset={1} textAlign="center">
          <Box
            position="relative"
            height={{ xs: '250px', md: '500px' }}
            width={{ xs: '250px', md: '500px' }}
            m="auto"
          >
            <Image src={logoSturctureSrc} alt="logo structure" fill />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default LogotypeSection
