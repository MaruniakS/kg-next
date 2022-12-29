import colors from '@lib/theme/colors'
import { Box, BoxProps, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import northenLightSrc from '@images/rebranding/northern-light.png'

const ColorBox: React.FC<BoxProps> = (props) => (
  <Box
    p={2}
    display="flex"
    height="100%"
    flexDirection="column"
    justifyContent="flex-end"
    {...props}
  />
)

const ColorsSection: React.FC = () => {
  const { t } = useTranslation('rebranding')
  return (
    <Box id="colors" pt={{ xs: 8, md: 15}}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Typography variant="h3" width={{ xs: '100%', sm: '80%', xl: '60%' }}>
            {t('colorsSection.heading')}
          </Typography>
          <Typography variant="h5" color={colors.grey} mt={6}>
            {t('colorsSection.description1')}
          </Typography>
          <Typography variant="h5" color={colors.grey} mb={6}>
            {t('colorsSection.description2')}
          </Typography>
        </Grid>
        <Grid xs={12} md={3} position="relative" height={{xs: "600px", md: "550px"}}>
          <Image src={northenLightSrc} alt="northen light template" fill />
        </Grid>
        <Grid xs={12} md={3} bgcolor={colors.primary}>
          <ColorBox color="black">
            <Typography variant="subtitle2">Pantone 3252 C</Typography>
            <Typography variant="body2">RGB 0, 205, 199</Typography>
            <Typography variant="body2">CMYK 71, 0, 32, 0</Typography>
            <Typography variant="body2">HEX #00BFBF</Typography>
          </ColorBox>
        </Grid>
        <Grid xs={12} md={3} bgcolor={colors.secondary}>
          <ColorBox color="black">
            <Typography variant="subtitle2">Pantone 387 C</Typography>
            <Typography variant="body2">RGB 240, 255, 73</Typography>
            <Typography variant="body2">CMYK 16, 0, 87, 0</Typography>
            <Typography variant="body2">HEX #F0FF3F</Typography>
          </ColorBox>
        </Grid>
        <Grid
          xs={12}
          md={3}
          bgcolor={colors.neutralBlack}
        >
          <ColorBox>
            <Typography variant="subtitle2">Pantone Neutral Black C</Typography>
            <Typography variant="body2">RGB 25, 25, 25</Typography>
            <Typography variant="body2">CMYK 0, 0, 0, 90</Typography>
            <Typography variant="body2">HEX #191919</Typography>
          </ColorBox>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ColorsSection
