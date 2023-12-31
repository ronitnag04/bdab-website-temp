import React from "react"
import styled from "styled-components"
import IntroDetailsCard from "./IntroDetailsCard"
import footer_art from "../../../images/footer_art.png"
import bert from "../../../images/bert.png"


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
  font-size: 70px;
  font-weight: 400;
  color: #f2f2f3;
  letter-spacing: 0.4px;
  margin-top: 10px;

  @media (max-width: 1370px) { font-size: 65px; }
  @media (max-width: 1270px) { font-size: 60px; }
  @media (max-width: 500px) { font-size: 50px; }
`

const Description = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  font-size: 20px;
  line-height: 20px;
  color: #f2f2f3;
  letter-spacing: 0.4px;

  @media (max-width: 1370px) {
    font-size: 16px;
    line-height: 16px;
  }

  @media (max-width: 1070px) {
    font-size: 14px;
    line-height: 15px;
  }

  @media (max-width: 800px) {
    font-size: 12px;
    line-height: 13px;
  }
`

const BertImg = styled.img`
  height: 480px;
  position: absolute;
  right: 0%;
  top: 25%;

  @media (max-width: 600px) { height: 300px; }
`

const IntroContent = () => (
  <OuterContainer>
    <BackgroundImg src={footer_art} alt="art"/>
    <InnerContainer>
        <div>
            <Title className="item-0">Data Science Demystified</Title>
            <Description className="item-1">a self-paced, online course</Description>
        </div>
        <IntroDetailsCard/>
    </InnerContainer>
    <BertImg src={bert} alt="bert"/>
  </OuterContainer>
)

export default IntroContent
