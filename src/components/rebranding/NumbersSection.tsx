import NumberCard from '@components/rebranding/NumberCard'
import colors from '@lib/theme/colors'
import { Box, Stack, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import { useTranslation } from 'next-i18next'

const NumbersSection: React.FC = () => {
  const { t } = useTranslation('rebranding')
  return (
    <Box textAlign="center" mt={18} mb={16}>
      <Typography variant="h3" maxWidth="lg" m="auto">
        {t('inNumbersSection.heading')}
      </Typography>
      <Grid2 container spacing={2} mt={6}>
        <Grid2 xs={6} md={4}>
          <Stack spacing={2}>
            <NumberCard
              caption={t('inNumbersSection.yearsOfExperience')}
              value="7"
              bgcolor={colors.secondary}
              color="black"
              height={{ xs: 150, md: 200, lg: 300 }}
            />
            <NumberCard
              caption={t('inNumbersSection.peopleInCompany')}
              value="200+"
              bgcolor={colors.primary10}
              color={colors.primary}
              height={{ xs: 100, md: 130, lg: 200 }}
            />
          </Stack>
        </Grid2>
        <Grid2 xs={6} md={4}>
          <Stack spacing={2}>
            <NumberCard
              caption={t('inNumbersSection.technologyPlatforms')}
              value="64"
              bgcolor={colors.secondary10}
              color={colors.secondary}
              height={{ xs: 100, md: 130, lg: 200 }}
            />
            <NumberCard
              caption={t('inNumbersSection.projectsFromReferrals')}
              value="70%"
              bgcolor={colors.cyan}
              color="black"
              height={{ xs: 150, md: 200, lg: 300 }}
            />
          </Stack>
        </Grid2>
        <Grid2 xs={12} md={4}>
          <NumberCard
            caption={t('inNumbersSection.alreadyDoneProjects')}
            value="100+"
            bgcolor={colors.secondary}
            color="black"
            height={{ xs: 200, md: 346, lg: 516 }}
            valueProps={{ variant: 'h1' }}
          />
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default NumbersSection