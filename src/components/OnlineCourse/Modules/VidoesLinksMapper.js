import React from 'react'
import VideoLink from './VideoLink'

const VidoesLinksMapper = (props) => {
  return (
    Object.entries(props.module_videos_links).map(([key, vid]) => 
                {return (<VideoLink
                    video_id={key}
                    video_name={vid['title']}
                    cur_video = {props.cur_video}
                    set_cur_video = {props.set_cur_video}
                    />)
                }
            
            )
  )
}

export default VidoesLinksMapper