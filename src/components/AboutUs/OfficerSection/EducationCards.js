import React from "react"
import styled from "styled-components"
import OfficerCard from "./OfficerSectionComponents/OfficerCard"
import {educationArr} from './OfficerSectionComponents/OfficerHeadshots';
import {founderArr} from './OfficerSectionComponents/OfficerHeadshots';

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const EducationCards = () => (
    <>
        <CardContainer>
            <OfficerCard className="item-0"
                name="Saaketh Gunukula"
                photoLink={educationArr[0]}
                role="Head Instructor"
                interest1="Nature"
                interest2="Listening to rap"
                interest3="Watching basketball"
                linkedin="https://www.linkedin.com/in/saaketh-gunukula-192a52178/"
                calendly="https://www.calendy.com"
            />
            <OfficerCard className="item-1"
                name="Aadhiti Ghankota"
                photoLink={educationArr[1]}
                role="Head Instructor "
                interest1="Trying new cuisines"
                interest2="Exploring new place"
                interest3="Hiking"
                linkedin="https://www.linkedin.com/in/aghankota/"
            />
            <OfficerCard className="item-2"
                name="Hrishikesh Ingale"
                photoLink={educationArr[2]}
                role="Head Instructor"
                interest1="Spending time with friends"
                interest2="Dancing #UCBAZAAD"
                interest3="Love ranch dressing"
                linkedin="https://www.linkedin.com/in/hrishikesh-ingale/"
                
            />
            <OfficerCard className="item-3"
                name="Ashwin Gopalan"
                photoLink={educationArr[3]}
                role="Bootcamp Head of Curriculum"
                interest1="Cooking (and eating...)"
                interest2= "Playing golf or soccer"
                interest3="Finding new music"
                linkedin="https://www.linkedin.com/in/ashwin-gopalan-147a2b1b4/"
            />
            <OfficerCard className="item-4"
                name="Ronit Nagarapu"
                photoLink={educationArr[4]}
                role="OC Head of Web Development"
                interest1="Taekwondo"
                interest2= "Tennis"
                interest3="DIY Electronics"
                linkedin="https://www.linkedin.com/in/ronit-nagarapu"
            />
            <OfficerCard className="item-5"
                name="Gokce Gozek"
                photoLink={educationArr[5]}
                role="OC Head of Curriculum"
                interest1="Reading"
                interest2= "Listening to music"
                interest3="Traveling"
                linkedin="https://www.linkedin.com/in/gokce-gozek-754818225/"
            />
            <OfficerCard className="item-6"
                name="Karina Parikh"
                photoLink={educationArr[6]}
                role="OC Head of Marketing"
                interest1="Running"
                interest2="Traveling"
                interest3="Exploring new cafes / restaurants"
                linkedin="https://www.linkedin.com/in/karina-parikh/"
            />
        

        </CardContainer>
    </>
)

export default EducationCards
