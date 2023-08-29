import React from "react"
import styled from "styled-components"
import OfficerCard from "./OfficerSectionComponents/OfficerCard"
import {advisorArr} from './OfficerSectionComponents/OfficerHeadshots';

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const RNDCards = () => (
    <>
        <CardContainer>
            <OfficerCard className="item-0"
                name="Emily Holmes"
                photoLink={advisorArr[0]}
                role="R&D Lead"
                interest1="Trying new coffee shops"
                interest2="Watching Reality TV"
                interest3="Baking apple pies"
                linkedin="https://www.linkedin.com/in/emily--holmes/"
                calendly = ""
            />
            <OfficerCard className="item-1"
                name="Vinay Kanigicherla"
                photoLink={advisorArr[1]}
                role="R&D Lead"
                interest1="Playing Badminton and Tennis"
                interest2="Listening to rap"
                interest3="Watching F1, MMA, and NFL"
                linkedin="https://www.linkedin.com/in/vinaykanigicherla/"
                calendly = ""
            />
            {/*
            <OfficerCard className="item-2"
                name="Sophia Kwee"
                photoLink={advisorArr[2]}
                role="Senior Advisor"
                interest1="Vibing"
                interest2="Munching"
                interest3="Sleeping"
                linkedin="https://www.linkedin.com/in/sofia-kwee/"
                calendly = ""
            /> */}
        </CardContainer>
    </>
)

export default RNDCards
