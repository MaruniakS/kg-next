import VideoPlayer from '@core/components/VideoPlayer'
import colors from '@lib/theme/colors'
import { Box, Container, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'


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
      <Box height={{ xs: "250px", md: "650px"}}>
        <VideoPlayer />
      </Box>
    </Box>
  )
}

export default MainSection
