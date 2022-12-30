import colors from '@lib/theme/colors'
import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useTranslation } from 'next-i18next'

import ValueCard from '@components/rebranding/ValueCard'
import responsibilityIcon from '@images/rebranding/responsibility.svg'
import senseIcon from '@images/rebranding/sense.svg'
import transparencyIcon from '@images/rebranding/transparency.svg'
import trustIcon from '@images/rebranding/trust.svg'

const ValuesSection: React.FC = () => {
  const { t } = useTranslation('rebranding')
  return (
    <Box textAlign="center">
      <Typography variant="h5" color={colors.grey} maxWidth="md" m="auto">
        {t('valuesSection.heading')}
      </Typography>
      <Grid container spacing={4} mt={8}>
        <ValueCard label={t('valuesSection.trust')} imageSrc={trustIcon} />
        <ValueCard
          label={t('valuesSection.transparency')}
          imageSrc={transparencyIcon}
        />
        <ValueCard
          label={t('valuesSection.responsibility')}
          imageSrc={responsibilityIcon}
        />
        <ValueCard
          label={t('valuesSection.beauty')}
          imageSrc={senseIcon}
        />
      </Grid>
    </Box>
  )
}

export default ValuesSection
