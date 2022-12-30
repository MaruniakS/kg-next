import { Box, Stack, useTheme } from '@mui/material'
import { Container } from '@mui/system'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import Link, { LinkProps } from '@core/components/Link'
import brandLogo from '@images/common/brand-logo.svg'

const NavLink: React.FC<LinkProps> = (props) => (
  <Link color="#fff" data-offset={100} style={{ textDecoration: 'none' }} {...props} />
)

const Header: React.FC = () => {
  const { t } = useTranslation('navigation')
  const { palette } = useTheme()
  return (
    <Box
      position="sticky"
      top={0}
      width="100%"
      bgcolor={palette.background.default}
      zIndex={99}
    >
      <Container>
        <Stack
          direction={{ md: "row"}}
          justifyContent="space-between"
          alignItems="center"
          height={{ md: 60}}
          p={{ xs: 2, md: 0}}
        >
          <Link href="/">
            <Image src={brandLogo} alt="brand logo" height={25} />
          </Link>
          <Stack direction="row" display={{ xs: 'none', md: 'flex'}} spacing={4}>
            <NavLink href="#numbers">{t('rebranding.header.numbers')}</NavLink>
            <NavLink href="#logotype">{t('rebranding.header.logotype')}</NavLink>
            <NavLink href="#colors">{t('rebranding.header.colors')}</NavLink>
            <NavLink href="#links">{t('rebranding.header.links')}</NavLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Header
