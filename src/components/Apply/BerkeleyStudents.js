import React from "react"
import styled from "styled-components"
import SectionTitle from "../BigSectionTitle"
import Description from "../Description"
import apply_button from "../../images/apply/apply_button.png"
import fa23_timeline from "../../images/apply/fa23timeline.png"

const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 30px;
`

const DetailsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    background-color: #f1f1f2;
    border: 30px solid #f1f1f2;
    border-radius: 25px;
    margin: 0px 40px 20px 40px;

    @media (max-width: 700px) { width: 70%; }
    @media (max-width: 570px) { border-bottom: 0px solid #f1f1f2; }
    @media (max-width: 300px) { width: 85%; }
`

const ImageContainer = styled.div`
    display: flex;
    align-items: flex-start;

    @media (max-width: 1700px) {
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
    }
`

const TimelineImage = styled.img`
    height: 250px;
    margin: 20px 0px 20px 0px;

    @media (max-width: 1100px) { height: 210px; }
    @media (max-width: 900px) { height: 190px; }
    @media (max-width: 800px) { height: 160px; margin: 20px 0px 10px 0px;}
    @media (max-width: 650px) { height: 135px; }
    @media (max-width: 570px) { height: 0px; }
`

const TimelineImage2 = styled.img`
    height: 271px;
    margin: 20px 0px 20px 0px;

    @media (max-width: 1100px) { height: 231px; }
    @media (max-width: 900px) { height: 211px; }
    @media (max-width: 800px) { height: 181px; }
    @media (max-width: 650px) { height: 141px; margin: 10px 0px 20px 0px;}
    @media (max-width: 570px) { height: 0px; }
`

const Button = styled.img`
    height: 45px;

    :hover {
        opacity: 0.9;
    }
`

const BerkeleyStudents = () => (
    <>
        <SectionTitle title="For UC Berkeley Students"></SectionTitle>
        <DescriptionContainer>
            <Description
                description={<>Thank you for applying to Big Data at Berkeley (BDAB)! 
                We are looking for individuals who want to be a part of one of our three departments: Bootcamp, Online Course or Projects. 
                Each department has its own interview process which is independent of the other departments. 
                You may apply to all three departments, but you will only be placed into one department.</>}
            />
        </DescriptionContainer>
        <DetailsContainer>
            <Description
                description={<>The application is due on Wednesday, September 6th at 11:59 pm PST.
                </>}
            />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdtn6yYPr20V0zaHU1hyGQGIMMabjSrGznwl06JOtM3I1ujHw/viewform" rel="noreferrer" target="_blank">
                <Button src={apply_button}/>
            </a>
            <ImageContainer>
                <TimelineImage src={fa23_timeline}/>

            </ImageContainer>
        </DetailsContainer>
    </>
)

export default BerkeleyStudents
