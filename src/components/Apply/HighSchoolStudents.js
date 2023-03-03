import React from "react"
import styled from "styled-components"
import SectionTitle from "../BigSectionTitle"
import Description from "../Description"

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

const Button = styled.img`
    height: 45px;

    :hover {
        opacity: 0.9;
    }
`

const HighSchoolStudents = () => (
    <>
        <SectionTitle title="For High School Students"></SectionTitle>
        <DescriptionContainer>
            <Description
                description={<>For high school students interested in learning about data science: apply to be a part of
                our <b>6-week Big Data Bootcamp</b> for the Spring 2023 semester. You will learn what data science is, how you
                can apply it to any industry you’re interested in, and see it in action!</>}
            />
        </DescriptionContainer>
        <DetailsContainer>
            <Description
                description={<>The application is due on Sunday, 2/19 at 11:59 pm PST. Email us with any questions at
                bigdata.berkeley@gmail.com!</>}
            />
            <a href="https://forms.gle/yMZzyKgg4YK2NB9LA" rel="noreferrer" target="_blank">
                <Button src={require("../../images/apply/apply_to_learn_button.png")}/>
            </a>
            <ImageContainer>
                <TimelineImage src={require("../../images/apply/bootcamp_timeline.png")}/>
            </ImageContainer>
        </DetailsContainer>
    </>
)

export default HighSchoolStudents
