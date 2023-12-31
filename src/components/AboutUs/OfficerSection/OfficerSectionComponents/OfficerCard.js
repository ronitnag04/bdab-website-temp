import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import linkedin from "../../../../images/about_us/linkedin.png"
import calendly from "../../../../images/about_us/calendar.png"

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    width: 260px;
    height: 520px;
    background-color: #f1f1f2;
    border: 30px solid #f1f1f2;
    border-bottom: 500px solid #f1f1f2;
    border-radius: 25px;
    margin: 20px 20px 20px 20px;
`

const Photo = styled.img`
    border-radius: 5px;
    min-height: 200px;
`

const LinkedIn = styled.img`
    border-radius: 5px;
    height: 25px;
    margin-right: 6px;

    :hover { opacity: 0.9; }
`

const Calendly = styled.img`
    border-radius: 5px;
    height: 25px;
    margin-right: 6px;

    :hover { opacity: 0.9; }
`

const Name = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 20px;
    color: #4f96c7;
    letter-spacing: 0.4px;
    text-decoration: underline; 
    text-decoration-color: #f1f1f2;
`

const InnerContainer = styled.div`
    margin: 10px 0px 0px 0px;
`

const Label = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    color: #818385;
    letter-spacing: 0.8px;
    margin: 0px 10px 10px 0px;
    text-decoration: underline; 
    text-decoration-color: #f1f1f2;
`

const Details = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 12px;
    line-height: 13px;
    color: #231f20;
    letter-spacing: 0.4px;
    margin: 0px 10px 5px 0px;
    text-decoration: underline; 
    text-decoration-color: #f1f1f2;
`


const OfficerCard = (props) => {
    return (
        <Container>
            <Photo src={props.photoLink}/>
            <Name>{props.name}</Name>
            <InnerContainer>
                <Label>Position</Label>
                <Details>{props.role}</Details>
            </InnerContainer>
            <InnerContainer>
                <Label>Interests</Label>
                <Details>{props.interest1}</Details>
                <Details>{props.interest2}</Details>
                <Details>{props.interest3}</Details>
            </InnerContainer>
            <InnerContainer>
                <Label>Contact</Label>
                <a href={props.linkedin} rel="noreferrer" target="_blank">
                    <LinkedIn src={linkedin} alt="logo"/>
                </a>

                {props.calendly === "" || props.calendly === null ? <></> :
                    <a href={props.calendly} rel="noreferrer" target="_blank">
                        <Calendly src={calendly} alt="logo"/>
                    </a>
                }
            </InnerContainer>
        </Container>
    )
}

export default OfficerCard