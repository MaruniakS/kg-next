import colors from '@lib/theme/colors'
import { Box, Container, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

const MainSection: React.FC = () => {
  const { t } = useTranslation('rebranding')
  return (
    <Box textAlign="center" mt={20}>
      <Typography variant="h1">{t('title')}</Typography>
      <Container maxWidth="md" sx={{ my: 8 }}>
        <Typography variant="subtitle1" color={colors.grey}>
          {t('subtitle1')}
        </Typography>
        <Typography variant="subtitle1" color={colors.grey} mt={4}>
          {t('subtitle2')}
        </Typography>
      </Container>
      <Box height="650px" borderRadius={5} bgcolor={colors.neutralBlack} />
    </Box>
  )
}

export default MainSection
