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
                name="Garima Gupta"
                photoLink={educationArr[0]}
                role="Head Instructor"
                interest1="Playing basketball"
                interest2="Watching Marvel movies"
                interest3="Photography"
                linkedin="https://www.linkedin.com/in/garima-gupta-a78a66183/"
            />
            <OfficerCard className="item-1"
                name="Sabi Can Ruso"
                photoLink={educationArr[1]}
                role="Head Instructor"
                interest1="Football (both actually)"
                interest2="Traveling"
                interest3="Duolingo"
                linkedin="https://www.linkedin.com/in/sabi-can-ruso-83648721b/"
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
                name="Austin Ho"
                photoLink={educationArr[4]}
                role="OC Head of Web Development"
                interest1="Making Spotify playlists"
                interest2= "Trying new restaurants"
                interest3="Playing spikeball on the glade"
                linkedin="https://www.linkedin.com/in/aho1628/"
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

        </CardContainer>
    </>
)

export default EducationCards
