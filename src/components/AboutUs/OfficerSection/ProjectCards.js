import React from "react"
import styled from "styled-components"
import OfficerCard from "./OfficerSectionComponents/OfficerCard"
import {projectArr} from './OfficerSectionComponents/OfficerHeadshots';

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const ProjectCards = () => (
    <>
        <CardContainer>
            <OfficerCard className="item-0"
                committee="project"
                name="Irene Nguyen"
                photoLink={projectArr[0]}
                role="Project Manager"
                interest1="Learning & making new things"
                interest2="Reading"
                interest3="Playing music"
                linkedin="https://www.linkedin.com/in/irenehng/"
                calendly = "https://calendly.com/irene-ng-2/bdabcoffeechat"
            />
            <OfficerCard className="item-1"
                committee="project"
                name="Tanvi Khot"
                photoLink={projectArr[1]}
                role="Project Manager"
                interest1="Basketball"
                interest2="Baking chocolate chip cookies"
                interest3="Painting"
                linkedin="https://www.linkedin.com/in/tanvi-khot/"
                calendly = "https://calendly.com/tanvikhot"
            />
            <OfficerCard className="item-2"
                committee="project"
                name="Michael Chigaev"
                photoLink={projectArr[2]}
                role="Project Manager"
                interest1="Playing guitar"
                interest2="Baking"
                interest3="Listening to music"
                linkedin="https://www.linkedin.com/in/michael-chigaev-615b5b234"
                calendly = "https://calendly.com/mchigaev"
            />
            <OfficerCard className="item-3"
                committee="project"
                name="Rayan Taghizadeh"
                photoLink={projectArr[3]}
                role="Project Manager"
                interest1="Chess"
                interest2=""
                interest3=""
                linkedin="https://www.linkedin.com/in/rayan-taghizadeh/"
                calendly = ""
            />

             <OfficerCard className="item-6"
                committee="project"
                name="Yash Bhargava"
                photoLink={projectArr[4]}
                role="Project Manager"
                interest1="Chilling"
                interest2="Hiking"
                interest3="Eating"
                linkedin="https://www.linkedin.com/in/yashb30/"
                calendly = "https://calendly.com/yashb30/coffee-chats-1"
            /> 
            <OfficerCard className="item-5"
                committee="project"
                name="Matthew Song"
                photoLink={projectArr[5]}
                role="Project Manager"
                interest1="Traveling"
                interest2="Listening to Music"
                interest3="Reading"
                linkedin=""
                calendly = "https://calendly.com/matzsong/bdab-coffee-chat"
            />
        </CardContainer>
    </>
)

export default ProjectCards
