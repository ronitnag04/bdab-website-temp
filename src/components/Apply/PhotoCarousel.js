import React from "react";
import styled from "styled-components"
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SectionTitle from "../BigSectionTitle";
import left_arrow from "../../images/left_arrow.png"
import right_arrow from "../../images/right_arrow.png"
import gallery_14 from "../../images/apply/group_photos/gallery_14.jpeg"
import gallery_15 from "../../images/apply/group_photos/gallery_15.jpg"
import gallery_1 from "../../images/apply/group_photos/gallery_1.jpg"
import gallery_2 from "../../images/apply/group_photos/gallery_2.jpg"
import gallery_18 from "../../images/apply/group_photos/gallery_18.jpeg"
import gallery_19 from "../../images/apply/group_photos/gallery_19.jpg"
import gallery_3 from "../../images/apply/group_photos/gallery_3.jpg"
import gallery_20 from "../../images/apply/group_photos/gallery_20.jpeg"
import gallery_21 from "../../images/apply/group_photos/gallery_21.jpeg"
import gallery_10 from "../../images/apply/group_photos/gallery_10.jpg"
import gallery_22 from "../../images/apply/group_photos/gallery_22.jpg"
import gallery_23 from "../../images/apply/group_photos/gallery_23.jpg"
import gallery_24 from "../../images/apply/group_photos/gallery_24.jpg"


const properties = {
  duration: 100000000,
  scale: 3,
  prevArrow: <div style={{width: "40px", paddingRight: "10px"}}><img src={left_arrow}/></div>,
  nextArrow: <div style={{width: "40px", paddingLeft: "10px"}}><img src={right_arrow}/></div>
};

const photoLinks = [
  gallery_14,
  gallery_15,
  gallery_1,
  gallery_2,
  gallery_18,
  gallery_19,
  gallery_3,
  gallery_20,
  gallery_21,
  gallery_10,
  gallery_22,
  gallery_23,
  gallery_24
];

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`

const Container = styled.div`
  width: 60%;
  margin-bottom: 60px;

  @media (max-width: 570px) {
    width: 80%;
  }
`

const Photo = styled.img`
  width: 100%;
`

const PhotoCarousel = () => {
  return (
    <>
      <SectionTitle title="#BigDataEnergy"></SectionTitle>
      <Container className="slide-container">
        <Slide {...properties}>
          {photoLinks.map((photoLink) =>
              <PhotoContainer>
                <Photo src={photoLink}/>
              </PhotoContainer>
          )}
        </Slide>
      </Container>
    </>
  );
}

export default PhotoCarousel;
