import React from "react"
import styled from "styled-components"
import OfficerCard from "./OfficerSectionComponents/OfficerCard"
import {onlineCourseArr} from './OfficerSectionComponents/OfficerHeadshots';

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const OnlineCourseCards = () => (
    <>
        <CardContainer>
            
            <OfficerCard className="item-4"
                name="Ronit Nagarapu"
                photoLink={onlineCourseArr[0]}
                role="Head of Web Development"
                interest1="Taekwondo"
                interest2= "Tennis"
                interest3="DIY Electronics"
                linkedin="https://www.linkedin.com/in/ronit-nagarapu"
                calendly = "https://calendly.com/ronitnag04"
            />
            <OfficerCard className="item-5"
                name="Gokce Gozek"
                photoLink={onlineCourseArr[1]}
                role="Head of Curriculum"
                interest1="Reading"
                interest2= "Listening to music"
                interest3="Traveling"
                linkedin="https://www.linkedin.com/in/gokce-gozek-754818225/"
                calendly = ""
            />
            <OfficerCard className="item-6"
                name="Karina Parikh"
                photoLink={onlineCourseArr[2]}
                role="Head of Marketing"
                interest1="Running"
                interest2="Traveling"
                interest3="Exploring new cafes / restaurants"
                linkedin="https://www.linkedin.com/in/karina-parikh/"
                calendly = ""
            />
        

        </CardContainer>
    </>
)

export default OnlineCourseCards
