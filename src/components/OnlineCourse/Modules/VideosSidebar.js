import React from 'react'
import styled from 'styled-components'
import { render } from 'react-dom'
import VideoLink from './VideoLink'
import VidoesLinksMapper from './VidoesLinksMapper'


const VideosSidebarContainer = styled.div`
    margin-top:5px;
    flex-grow:25;
    height:100%;
`

const WhiteBar = styled.hr`
    background-color: white;
    height: 3px;

`


const VideosSidebar = (props) => {
  return (
    <VideosSidebarContainer>
        <WhiteBar/>
            <VidoesLinksMapper
                module_videos_links = {props.module_videos_links}
                cur_video = {props.cur_video}
                set_cur_video = {props.set_cur_video}
            />

        <WhiteBar/>
    </VideosSidebarContainer>
  )
}

export default VideosSidebar