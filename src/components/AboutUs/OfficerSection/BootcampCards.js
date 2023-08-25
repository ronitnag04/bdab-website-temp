import React from "react"
import styled from "styled-components"
import OfficerCard from "./OfficerSectionComponents/OfficerCard"
import {bootcampArr} from './OfficerSectionComponents/OfficerHeadshots';

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const BootcampCards = () => (
    <>
        <CardContainer>
            <OfficerCard className="item-0"
                name="Saaketh Gunukula"
                photoLink={bootcampArr[0]}
                role="Head Instructor"
                interest1="Nature"
                interest2="Listening to rap"
                interest3="Watching basketball"
                linkedin="https://www.linkedin.com/in/saaketh-gunukula-192a52178/"
                calendly=""
            />
            <OfficerCard className="item-1"
                name="Aadhiti Ghankota"
                photoLink={bootcampArr[1]}
                role="Head Instructor "
                interest1="Trying new cuisines"
                interest2="Exploring new place"
                interest3="Hiking"
                linkedin="https://www.linkedin.com/in/aghankota/"
                calendly = ""
            />
            <OfficerCard className="item-2"
                name="Garima Gupta"
                photoLink={bootcampArr[2]}
                role="Head Instructor"
                interest1="Basketball"
                interest2="Listening to Music"
                interest3=" Exploring new places"
                linkedin="https://www.linkedin.com/in/garima-gupta-a78a66183"
                calendly = "https://calendly.com/01garimagupta"
                
            />
            <OfficerCard className="item-3"
                name="Ashwin Gopalan"
                photoLink={bootcampArr[3]}
                role="Bootcamp Head of Curriculum"
                interest1="Cooking (and eating...)"
                interest2= "Playing golf or soccer"
                interest3="Finding new music"
                linkedin="https://www.linkedin.com/in/ashwin-gopalan-147a2b1b4/"
                calendly = "https://calendly.com/d/4d4-4hc-wzx/one-off-meeting"
            />
            
        </CardContainer>
    </>
)

export default BootcampCards
