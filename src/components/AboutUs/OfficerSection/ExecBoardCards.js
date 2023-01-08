import React from "react"
import styled from "styled-components"
import OfficerCard from "./OfficerSectionComponents/OfficerCard"
import {execArr} from './OfficerSectionComponents/OfficerHeadshots';

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const ExecBoardCards = () => (
    <>
        <CardContainer>
            <OfficerCard className="item-0"
                committee="exec"
                name="Emily Holmes"
                photoLink={execArr[0]}
                role="Co-President"
                interest1="Trying new coffee shops and restaurants"
                interest2="Watching reality tv with friends"
                interest3="Baking apple pies"
                linkedin="https://www.linkedin.com/in/emily--holmes/"
            />
            <OfficerCard className="item-1"
                committee="exec"
                name="Vinay Kanigicherla"
                photoLink={execArr[1]}
                role="Co-President"
                interest1="Playing badminton and tennis"
                interest2="Listening to rap"
                interest3="Watching F1, MMA, and NFL"
                linkedin="https://www.linkedin.com/in/vinaykanigicherla/"
            />
            <OfficerCard className="item-2"
                committee="exec"
                name="April Zhang"
                photoLink={execArr[2]}
                role="VP of Development"
                interest1="Playing tennis"
                interest2="Binging Netflix"
                interest3="Reading"
                linkedin="https://www.linkedin.com/in/aprilczhang/"
            />
            <OfficerCard className="item-3"
                committee="exec"
                name="Lara Panigrahi"
                photoLink={execArr[3]}
                role="Internal Vice President"
                interest1="Weightlifting"
                interest2="Trying new cafes in Berkeley/SF"
                interest3="Dancing"
                linkedin="https://www.linkedin.com/in/lara-panigrahi-9570581b9/"
            />
            <OfficerCard className="item-4"
                committee="exec"
                name="Surya Mamidyala"
                photoLink={execArr[4]}
                role="VP of Consulting"
                interest1="Playing basketball"
                interest2="Listening to rap"
                interest3="Exploring new places"
                linkedin="https://www.linkedin.com/in/surya-mamidyala/"
            />
            <OfficerCard className="item-5"
                committee="exec"
                name="Sanjana Kotha"
                photoLink={execArr[5]}
                role="VP of Education: Bootcamp"
                interest1="Hand lettering"
                interest2="Baking cookies"
                interest3="Hiking"
                linkedin="https://www.linkedin.com/in/sanjana-kotha/"
            />
            <OfficerCard className="item-6"
                committee="exec"
                name="Joshua Chandiramani"
                photoLink={execArr[6]}
                role="VP of Education: Online Course"
                interest1="Competitive tennis"
                interest2="Hip hop dance"
                interest3="YouTube Content Creation"
                linkedin="https://www.linkedin.com/in/joshua-chandiramani/"
            />
        </CardContainer>
    </>
)

export default ExecBoardCards
