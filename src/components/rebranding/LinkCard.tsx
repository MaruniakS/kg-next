import { Stack, StackProps, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import Link from '@core/components/Link'

type Props = StackProps & {
  label: string
  link: string
  imageSrc: string
}

const LinkCard: React.FC<Props> = ({ label, link, imageSrc, ...props }) => {
  const { t } = useTranslation('rebranding')
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      borderRadius={2}
      style={{ background: "linear-gradient(141.15deg, #1D1D1D 2.65%, #272727 65.18%, #212121 101.87%)"}}
      p={5}
      {...props}
    >
      <Stack direction="row" alignItems="center">
        <Image src={imageSrc} alt={label} />
        <Typography variant="body1" fontWeight={700} textAlign="left" ml={4}>
          {label}
        </Typography>
      </Stack>
      <Link href={link} fontWeight={700}>{t('linksSection.view')}</Link>
    </Stack>
  )
}

export default LinkCard
