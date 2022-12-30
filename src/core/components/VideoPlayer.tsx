import { Box, styled } from '@mui/material'

import { AdvancedVideo, lazyload } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

const StyledBox = styled(Box)({
    width: "100%",
    height: "100%",
    "& video": {
        width: "100%",
        height: "100%"
    }
})

const VideoPlayer = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dm1euuxsf',
    },
  })
  const myVideo = cld.video('branding/kg1')

  return (
    <StyledBox height="100%" width="100%">
      <AdvancedVideo
        cldVid={myVideo}
        autoPlay
        muted
        controls
        plugins={[lazyload()]}
      />
    </StyledBox>
  )
}

export default VideoPlayer
