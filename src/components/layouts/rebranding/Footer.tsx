import colors from '@lib/theme/colors'
import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

const Footer = () => {
  const { t } = useTranslation('navigation')
  return (
    <Typography textAlign="center" mb={8} color={colors.grey}>
      {t('rebranding.footer.powered', { year: 2023 })}
    </Typography>
  )
}
export default Footer
