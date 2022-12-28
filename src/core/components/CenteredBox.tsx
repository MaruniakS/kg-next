import { Box, BoxProps } from '@mui/material'

const CenteredBox: React.FC<BoxProps> = (props) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    {...props}
  />
)

export default CenteredBox
