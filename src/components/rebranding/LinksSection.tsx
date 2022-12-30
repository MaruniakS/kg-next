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
          <LinkCard label={t('linksSection.signature')} link="https://drive.google.com/drive/u/0/folders/1OFfj74vpnTHdzYQu2glDVy7Uktsx4oUF" imageSrc={signatureIcon} />
        </Grid>
        <Grid xs={12} md={6}>
          <LinkCard label={t('linksSection.documents')} link="https://drive.google.com/drive/folders/1-Mz9DDVuMsomHQcz4hBpK0AUcz59iI2a?usp=share_link" imageSrc={documentIcon} />
        </Grid>
        <Grid xs={12} md={6}>
          <LinkCard label={t('linksSection.presentation')} link="https://drive.google.com/drive/folders/1uqXcNzszyXzZl373ZXcBsGfiwE76RWXH?usp=share_link" imageSrc={presentationIcon} />
        </Grid>
        <Grid xs={12} md={6}>
          <LinkCard label={t('linksSection.smm')} link="https://drive.google.com/drive/u/0/folders/15WBUwv63Zts7PzY45vT-1Lno6t1lYRSH" imageSrc={smmIcon} />
        </Grid>
        <Grid xs={12} md={6} mdOffset={3}>
          <LinkCard label={t('linksSection.logo')} link="https://drive.google.com/drive/u/0/folders/12-O7_Dx61Om0XYvQFRosoVq0N39WXgsH" imageSrc={logoIcon} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default LinksSection
