import CenteredBox from '@core/components/CenteredBox'
import colors from '@lib/theme/colors'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import Image from 'next/image'
import { ReactNode } from 'react'

type Props = {
  label: string
  description: ReactNode
  imageSrc: string
}

const LogoCard: React.FC<Props> = ({ label, description, imageSrc }) => (
  <Grid xs={12} md={4}>
    <CenteredBox>
      <Image src={imageSrc} alt={`${label} in logotype`} />
      <Typography variant="h5" my={4}>
        {label}
      </Typography>
      <Typography
        variant="body1"
        color={colors.grey}
        textAlign="center"
        width="60%"
        mx="auto"
        mb={4}
      >
        {description}
      </Typography>
    </CenteredBox>
  </Grid>
)

export default LogoCard
