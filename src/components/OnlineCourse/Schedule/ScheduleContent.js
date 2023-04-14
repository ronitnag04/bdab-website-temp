import React from "react"
import styled from "styled-components"
import ScheduleCards from "./ScheduleCards"
import OCPageBanner from "../OCPageBanner"
import footer_art from "../../../images/footer_art.png"

const OuterContainer = styled.div`
    display: flex;
    position: absolute;
    top: 0%;
    left: 0%;
    background-color: #032345;
    width: 100%;  
    height: 100%;
    overflow: auto; 
`

const BackgroundImg = styled.img`
  opacity: .3;
  position: absolute;
  background-size: cover;
  background-attachment: fixed;
`

const InnerContainer = styled.div`
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  flex-flow: column wrap;
  align-items: flex-start;
  position: absolute;
  width: 80%;
  top: 20%;
  left: 5%;
  right: 10%;
  transform: translate(5%, 5%);

  .item-0 { order: 0; }
  .item-1 { order: 1; }
  .item-2 { order: 2; }

  @media (max-width: 1700px) { top: 15%; }
  @media (max-width: 1500px) { top: 16% }
  @media (max-width: 1400px) { top: 15%; right: 40%;}
  @media (max-width: 900px) { top: 12%; right: 20%; }
  @media (max-width: 570px) { top: 11%; right: 20%; }
  @media (max-height: 600px) { top: 20% }
  @media (max-height: 500px) { top: 30% }
`

const Title = styled.h1`
  font-family: 'Bebas Neue', cursive;
  font-size: 80px;
  line-height: 84px;
  font-weight: 400;
  color: #f2f2f3;
  letter-spacing: 0.4px;
  text-align: center;

  @media (max-width: 1370px) { font-size: 75px; line-height: 77px;}
  @media (max-width: 1270px) { font-size: 70px; line-height: 72px;}
  @media (max-width: 500px) { font-size: 67px; line-height: 69px;}
  @media (max-width: 410px) { font-size: 62px; line-height: 64px;}
`

const ContentContainer = styled.div`
    position: absolute;
    width: 100%;
    margin-top: 5%;
`

const ScheduleContent = () => (
  <OuterContainer>
    <BackgroundImg src={footer_art} alt="art"/>
    <InnerContainer>
        <ContentContainer>
            <OCPageBanner title="Your Schedule" description="begin your journey through our data science course!"/>
            <ScheduleCards/>
        </ContentContainer>
    </InnerContainer>
  </OuterContainer>
)

export default ScheduleContent
