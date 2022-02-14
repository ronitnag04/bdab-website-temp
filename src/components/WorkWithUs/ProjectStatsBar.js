import React from "react"
import styled from "styled-components"
import StatValue from "../StatValue";

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 75%;
    flex-wrap: wrap;
    background-color: #f1f1f2;
    border: 30px solid #f1f1f2;
    border-top: 55px solid #f1f1f2;
    border-bottom: 55px solid #f1f1f2;
    border-radius: 25px;
    margin: 50px 10px 50px 10px;
    text-align: center;
`

const ProjectStatsBar = () => {
    return (
        <Container>
            <StatValue maxValue="11" suffix="" label="clients worked with" />
            <StatValue maxValue="80" suffix="+" label="weekly hours spent on project" />
            <StatValue maxValue="18" suffix="" label="active consultants" />
            <StatValue maxValue="80" suffix="+" label="hours trained" />
        </Container>
    )
}

export default ProjectStatsBar
