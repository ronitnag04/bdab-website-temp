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
            />
            <OfficerCard className="item-1"
                name="Madeleine Larson"
                photoLink={educationArr[1]}
                role="Head Instructor"
                interest1="Playing video games"
                interest2="Sustainability and thrifting"
                interest3="collecting succulents from Trader Joes"
                linkedin="https://www.linkedin.com/in/madeleinelarson/"
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
                name="Cadence Hsu"
                photoLink={educationArr[3]}
                role="OC Head of Marketing"
                interest1="Going to the beach"
                interest2="Thrifting"
                interest3="Trying new coffee/food places"
                linkedin="https://www.linkedin.com/in/cadyhsu/"
            />
            <OfficerCard className="item-4"
                name="Seah She"
                photoLink={educationArr[4]}
                role="OC Head of Web Development"
                interest1="Going out on spontaneous trips"
                interest2= "Creating notion pages"
                interest3="Croffles"
                linkedin="https://www.linkedin.com/in/sean-she/"
            />
            <OfficerCard className="item-5"
                name="Kaito Garcia"
                photoLink={educationArr[5]}
                role="OC Head of Curriculum"
                interest1="Basketball"
                interest2= "Guitar & Piano"
                interest3="Weighlifting"
                linkedin="https://www.linkedin.com/in/kaitogarcia/"
            />
            <OfficerCard className="item-5"
                name="Ashwin Gopalan"
                photoLink={educationArr[6]}
                role="Bootcamp Head of Curriculum"
                interest1="Cooking (and eating...)"
                interest2= "Playing golf or soccer"
                interest3="Finding new music"
                linkedin="https://www.linkedin.com/in/ashwin-gopalan-147a2b1b4/"
            />

        </CardContainer>
    </>
)

export default EducationCards
