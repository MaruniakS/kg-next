import colors from '@lib/theme/colors'
import { Box, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import { useTranslation } from 'next-i18next'

import ValueCard from '@components/rebranding/ValueCard'
import responsibilitySrc from '@images/rebranding/responsibility.svg'
import transparencySrc from '@images/rebranding/transparency.svg'
import trustSrc from '@images/rebranding/trust.svg'

const ValuesSection: React.FC = () => {
  const { t } = useTranslation('rebranding')
  return (
    <Box textAlign="center">
      <Typography variant="h5" color={colors.grey} maxWidth="lg" m="auto">
        {t('valuesSection.heading')}
      </Typography>
      <Grid2 container spacing={4} mt={8}>
        <ValueCard label={t('valuesSection.trust')} imageSrc={trustSrc} />
        <ValueCard
          label={t('valuesSection.transparency')}
          imageSrc={transparencySrc}
        />
        <ValueCard
          label={t('valuesSection.responsibility')}
          imageSrc={responsibilitySrc}
        />
        <ValueCard
          label={t('valuesSection.beauty')}
          imageSrc={responsibilitySrc}
        />
      </Grid2>
    </Box>
  )
}

export default ValuesSection
