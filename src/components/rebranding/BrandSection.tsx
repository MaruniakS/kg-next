import CenteredBox from '@core/components/CenteredBox'
import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Image from 'next/image'

import branding1Src from '@images/rebranding/branding1.svg'
import branding2Src from '@images/rebranding/branding2.svg'
import branding3Src from '@images/rebranding/branding3.svg'
import branding4Src from '@images/rebranding/branding4.svg'
import colors from '@lib/theme/colors'

const BrandSection: React.FC = () => (
  <Box mt={10} mb={30}>
    <Grid container>
      <Grid
        xs={12}
        height="30px"
        sx={{
          background:
            'linear-gradient(263.3deg, #00BFBF 0%, #9EDC57 41.83%, #00BFBF 79.28%)',
        }}
      />
      <Grid xs={6} md={3}>
        <CenteredBox bgcolor={colors.neutralBlack} py={8}>
          <Image src={branding1Src} alt="branding example 1" />
        </CenteredBox>
      </Grid>
      <Grid xs={6} md={3}>
        <CenteredBox bgcolor="white" py={8}>
          <Image src={branding2Src} alt="branding example 2" />
        </CenteredBox>
      </Grid>
      <Grid xs={6} md={3}>
        <CenteredBox bgcolor={colors.neutralBlack} py={8}>
          <Image src={branding3Src} alt="branding example 3" />
        </CenteredBox>
      </Grid>
      <Grid xs={6} md={3}>
        <CenteredBox bgcolor={colors.primary} py={8}>
          <Image src={branding4Src} alt="branding example 4" />
        </CenteredBox>
      </Grid>
    </Grid>
  </Box>
)

export default BrandSection
