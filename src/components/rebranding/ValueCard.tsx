import CenteredBox from '@core/components/CenteredBox'
import Grid from '@mui/material/Unstable_Grid2'
import Image from 'next/image'

import { Typography } from '@mui/material'

type Props = {
  label: string
  imageSrc: string
}

const ValueCard: React.FC<Props> = ({ label, imageSrc }) => (
  <Grid xs={6} md={3}>
    <CenteredBox
      style={{
        background:
          'linear-gradient(141.15deg, #1D1D1D 2.65%, #272727 65.18%, #212121 101.87%)',
      }}
      borderRadius={2}
      p={6}
    >
      <Image src={imageSrc} alt={label} />
      <Typography variant="subtitle2" mt={3}>
        {label}
      </Typography>
    </CenteredBox>
  </Grid>
)

export default ValueCard
