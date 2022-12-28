import { Box, BoxProps, Typography, TypographyProps } from '@mui/material'

type Props = Pick<BoxProps, 'bgcolor' | 'color' | 'height' | 'width'> & {
  caption: string
  value: string
  captionProps?: TypographyProps
  valueProps?: TypographyProps
}

const NumberCard: React.FC<Props> = ({
  caption,
  value,
  captionProps,
  valueProps,
  ...props
}) => (
  <Box
    padding={3}
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    width="100%"
    textAlign="left"
    borderRadius={4}
    {...props}
  >
    <Typography variant="body1" {...captionProps}>{caption}</Typography>
    <Typography variant="h3" {...valueProps}>{value}</Typography>
  </Box>
)

export default NumberCard
