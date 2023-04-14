import React from "react"
import ScheduleContent from "../../components/OnlineCourse/Schedule/ScheduleContent"
import OCNavbar from "../../components/OnlineCourse/OCNavbar/OCNavbar"

const OnlineCourseSchedulePage = () => (
  <>
    <OCNavbar/>
    <ScheduleContent/>
  </>
)

export default OnlineCourseSchedulePage

export const Head = () => {
  <>
    <title>Schedule | Data Science Demystified</title>
    <meta charSet="utf-8" />
    <meta name="description" content="Data Science Demystified's full schedule."/>
    <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
  </>
}
