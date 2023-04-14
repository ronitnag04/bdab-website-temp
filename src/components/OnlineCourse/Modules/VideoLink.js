import React from 'react'
import styled from "styled-components"


const VideoLinkButton = styled.button`
    background-color:transparent;
    border:none;
    cursor:pointer;
    overflow:hidden;
    outline:none;
    display:flex;

    :hover{
        opacity:0.6;
    }
`

const VideoLinkText = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 1px;
    word-spacing: 2px;
    text-align: left;
    padding: 10px 3px;
    overflow-wrap: break-word;
`



const VideoLink = (props) => {
  return (
    <VideoLinkButton 
        onClick={() => props.set_cur_video(props.video_id)} 
    >
        <img 
            src={props.video_id===props.cur_video ? 
                require("../../../images/online_course/play_button_blue.png") : 
                require("../../../images/online_course/play_button_white.png")} 
            alt='video icon' 
            height='35px'
        ></img>
        
        <VideoLinkText 
            style={props.video_id===props.cur_video ? {color:'#5A9BFD'} : {color:'white'}   
        }>
            {props.video_name}
        </VideoLinkText>
    </VideoLinkButton>
  )
}

export default VideoLink