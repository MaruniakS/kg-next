import CenteredBox from '@core/components/CenteredBox'
import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Image from 'next/image'

import brandLogo1 from '@images/rebranding/branding1.svg'
import brandLogo2 from '@images/rebranding/branding2.svg'
import brandLogo3 from '@images/rebranding/branding3.svg'
import brandLogo4 from '@images/rebranding/branding4.svg'

import logoIcon1 from '@images/rebranding/branding-logo1.svg'
import logoIcon2 from '@images/rebranding/branding-logo2.svg'
import logoIcon3 from '@images/rebranding/branding-logo3.svg'
import logoIcon4 from '@images/rebranding/branding-logo4.svg'

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
      <Grid xs={12} sm={6} md={3}>
        <CenteredBox bgcolor={colors.neutralBlack} py={8}>
          <Image src={brandLogo1} alt="branding example 1" />
        </CenteredBox>
        <CenteredBox my={4}>
          <Image src={logoIcon1} alt="brand icon 1" />
        </CenteredBox>
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <CenteredBox bgcolor="white" py={8}>
          <Image src={brandLogo2} alt="branding example 2" />
        </CenteredBox>
        <CenteredBox my={4}>
          <Image src={logoIcon2} alt="brand icon 2" />
        </CenteredBox>
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <CenteredBox bgcolor={colors.neutralBlack} py={8}>
          <Image src={brandLogo3} alt="branding example 3" />
        </CenteredBox>
        <CenteredBox my={4}>
          <Image src={logoIcon3} alt="brand icon 3" />
        </CenteredBox>
      </Grid>
      <Grid xs={12} sm={6} md={3}>
        <CenteredBox bgcolor={colors.primary} py={8}>
          <Image src={brandLogo4} alt="branding example 4" />
        </CenteredBox>
        <CenteredBox my={4}>
          <Image src={logoIcon4} alt="brand icon 4" />
        </CenteredBox>
      </Grid>
    </Grid>
  </Box>
)

export default BrandSection
