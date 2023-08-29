import React from "react"
import styled from "styled-components"
import Card from "../CardWithLink"
import SectionTitle from "../BigSectionTitle"
import icon1 from "../../images/projects.png"
import icon2 from "../../images/education.png"

const CardContainer = styled.div`
    margin: 50px 50px 50px 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .item-0 { order: 0; }
    .item-1 { order: 1; }
`

const DepartmentSection = () => (
    <>
        <SectionTitle title="Our Departments"></SectionTitle>
        <CardContainer>
            <Card className="item-0"
                title="Projects"
                icon={icon1}
                link="/workwithus"
                description={<>The Projects Department is dedicated to providing leaders with advanced analytics and 
                machine learning models to <b>guide critical decisions and accelerate growth.</b> We use data to find trends 
                that help businesses make better decisions.</>}
            />
            <Card className="item-1"
                title="Bootcamp"
                icon={icon2}
                link="/courses"
                description={<>The Bootcamp Department aims to provide a <b>data science education</b> to high school students through our Big Data Bootcamp hosted in the Fall and Spring.</>}
            />
            <Card className="item-2"
                title="Online Couse"
                icon={icon2}
                link="/courses"
                description={<>The Online Course Department's goal is to make data science education accessible to those 
                of <b>all ages and locations.</b> We've launched a completely new, 
                original Data Science Demystified online course.</>}
            />
        </CardContainer>
    </>
)

export default DepartmentSection