import colors from '@lib/theme/colors'
import { Box, Container, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false })
const ReactPlayer2 = dynamic(() => import('react-player'), { ssr: false })

const MainSection: React.FC = () => {
  const { t } = useTranslation('rebranding')
  return (
    <Box textAlign="center" mt={{ xs: 10, md: 20 }}>
      <Typography variant="h1">{t('title')}</Typography>
      <Container maxWidth="md" sx={{ mb: 8, mt: 4 }}>
        <Typography variant="body1" color={colors.grey}>
          {t('subtitle1')}
        </Typography>
        <Typography variant="body1" color={colors.grey} mt={4}>
          {t('subtitle2')}
        </Typography>
      </Container>
      <Box height={{ xs: "350px", md: "650px"}}>
        <ReactPlayer2
          url="https://res.cloudinary.com/dm1euuxsf/video/upload/v1672331366/branding/kindgeek-history_SlvL4RgM_em6ydx.mp4"
          width="100%"
          height="100%"
          pip
        />
      </Box>
      <Box height={{ xs: "350px", md: "650px"}}>
        <ReactPlayer
          url="https://youtu.be/hl3sYarrSx4"
          width="100%"
          height="100%"
          pip
        />
      </Box>
    </Box>
  )
}

export default MainSection
