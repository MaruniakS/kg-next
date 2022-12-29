import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useTranslation } from 'next-i18next'
import LinkCard from './LinkCard'

import documentIcon from '@images/rebranding/link-document-icon.svg'
import logoIcon from '@images/rebranding/link-logo-icon.svg'
import presentationIcon from '@images/rebranding/link-presentation-icon.svg'
import signatureIcon from '@images/rebranding/link-signature-icon.svg'
import smmIcon from '@images/rebranding/link-smm-icon.svg'

const LinksSection: React.FC = () => {
  const { t } = useTranslation('rebranding')
  return (
    <Box id="links" textAlign="center" pt={15} mt={{ xs: 0, md: 10}} mb={16}>
      <Typography variant="h3">
        {t('linksSection.heading')}
      </Typography>
      <Grid container spacing={2} mt={6}>
        <Grid xs={12} md={6}>
          <LinkCard label={t('linksSection.signature')} link="/" imageSrc={signatureIcon} />
        </Grid>
        <Grid xs={12} md={6}>
          <LinkCard label={t('linksSection.documents')} link="/" imageSrc={documentIcon} />
        </Grid>
        <Grid xs={12} md={6}>
          <LinkCard label={t('linksSection.presentation')} link="/" imageSrc={presentationIcon} />
        </Grid>
        <Grid xs={12} md={6}>
          <LinkCard label={t('linksSection.smm')} link="/" imageSrc={smmIcon} />
        </Grid>
        <Grid xs={12} md={6} mdOffset={3}>
          <LinkCard label={t('linksSection.logo')} link="/" imageSrc={logoIcon} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default LinksSection
