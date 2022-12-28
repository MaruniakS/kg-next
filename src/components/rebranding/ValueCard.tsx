import CenteredBox from '@core/components/CenteredBox'
import Grid2 from '@mui/material/Unstable_Grid2'
import Image from 'next/image'

import colors from '@lib/theme/colors'
import { Typography } from '@mui/material'

type Props = {
  label: string
  imageSrc: string
}

const ValueCard: React.FC<Props> = ({ label, imageSrc }) => (
  <Grid2 xs={6} md={3}>
    <CenteredBox bgcolor={colors.neutralBlack} borderRadius={2} p={6}>
      <Image src={imageSrc} alt={label} />
      <Typography variant="subtitle2" mt={3}>
        {label}
      </Typography>
    </CenteredBox>
  </Grid2>
)

export default ValueCard
