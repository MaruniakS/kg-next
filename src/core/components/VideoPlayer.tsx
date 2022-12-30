import { Box, styled } from '@mui/material'

import { AdvancedVideo, lazyload } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { memo } from 'react'

const StyledBox = styled(Box)({
    width: "100%",
    height: "100%",
    "& video": {
        width: "100%",
        height: "100%"
    }
})

const VideoPlayer: React.FC<{ videoName: string }> = ({ videoName }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dm1euuxsf',
    },
  })
  const myVideo = cld.video(videoName)

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

export default memo(VideoPlayer)
