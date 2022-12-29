import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useTranslation } from 'next-i18next'
import LinkCard from './LinkCard'

import trustSrc from '@images/rebranding/trust.svg'

const LinksSection: React.FC = () => {
  const { t } = useTranslation('rebranding')
  return (
    <Box textAlign="center" mt={18} mb={16}>
      <Typography variant="h3">
        {t('linksSection.heading')}
      </Typography>
      <Grid container spacing={2} mt={6}>
        <Grid xs={12} md={6}>
          <LinkCard label={t('linksSection.signature')} link="/" imageSrc={trustSrc} />
        </Grid>
        <Grid xs={12} md={6}>
          <LinkCard label={t('linksSection.documents')} link="/" imageSrc={trustSrc} />
        </Grid>
        <Grid xs={12} md={6}>
          <LinkCard label={t('linksSection.presentation')} link="/" imageSrc={trustSrc} />
        </Grid>
        <Grid xs={12} md={6}>
          <LinkCard label={t('linksSection.smm')} link="/" imageSrc={trustSrc} />
        </Grid>
        <Grid xs={12} md={6} mdOffset={3}>
          <LinkCard label={t('linksSection.logo')} link="/" imageSrc={trustSrc} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default LinksSection
