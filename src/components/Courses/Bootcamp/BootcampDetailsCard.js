import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const DetailsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: space-evenly;
    width: 400px;
    height: 420px;
    background-color: #f1f1f2;
    border: 50px solid #f1f1f2;
    border-radius: 25px;
    margin: 40px;

    @media (max-width: 500px) {
        width: 360px;
        height: 440px;
    }
`

const Name = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 25px;
    color: #4f96c7;
    letter-spacing: 0.4px;
`

const OuterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    margin: 10px 0px 0px 0px;
`

const InnerContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    margin: 10px 0px 0px 0px;
`

const Label = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    color: #4f96c7;
    letter-spacing: 1px;
    margin: 0px 10px 10px 0px;
`

const Details = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-style: semi-bold;
    font-weight: 600;
    font-size: 13px;
    color: #231f20;
    letter-spacing: 0.4px;
    margin: 0px 10px 10px 0px;
`

const A = styled.a`
    height: 23px;
`


const BootcampDetailsCard = () => {
    return (
        <DetailsContainer>
            <Name>Bootcamp Details</Name>
            <OuterContainer>
                <InnerContainer>
                    <Label>Price</Label>
                    <Label style={{marginBottom: "16px"}}>Dates</Label>
                    <Label style={{marginBottom: "22px"}}>Time</Label>
                    <Label style={{marginBottom: "24px"}}>Grade</Label>
                    <Label style={{marginBottom: "11px"}}>Size</Label>
                    <Label style={{marginBottom: "10px"}}>Mode</Label>
                    <Label>Earn</Label>
                    <Label>App</Label>
                    <Label>Links</Label>
                </InnerContainer>
                <InnerContainer>
                    <Details style={{letterSpacing: "0.5px"}}>FREE</Details>
                    <Details style={{marginBottom: "14px"}}>Every Saturday (7 weeks)</Details>
                    <Details>10:30-12pm or 12pm-1:30pm or 1:30-3pm (Pacific)</Details>
                    <Details>Must be concurrently enrolled in high school</Details>
                    <Details>60 students (20 per class)</Details>
                    <Details>Online (Zoom)</Details>
                    <Details>Certificate of Completion</Details>
                    <A href="/apply" rel="noreferrer" target="_blank">
                        <Details>Required</Details>
                    </A>
                    <A href="https://bit.ly/sp23_bootcamp_syllabus" rel="noreferrer" target="_blank">
                        <Details style={{textDecorationColor: "#231f20"}}>Syllabus</Details>
                    </A>
                </InnerContainer>
            </OuterContainer>
        </DetailsContainer>
    )
}

export default BootcampDetailsCard