import React from "react"
import IntroContent from "../../components/OnlineCourse/Intro/IntroContent"
import OCNavbar from "../../components/OnlineCourse/OCNavbar/OCNavbar"

const OnlineCourseIntroPage = () => (
  <>
    <>
      <OCNavbar/>
      <IntroContent/>
    </>
  </>
)

export default OnlineCourseIntroPage

export const Head = () => (
  <>
    <title>Online Course | Data Science Demystified</title>
    <meta charSet="utf-8" />
    <meta name="description" content="Data Science Demystified's home page."/>
    <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC"/>
  </>
)