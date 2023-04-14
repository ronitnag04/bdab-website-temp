import React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/PageBanner"
import ApplyContent from "../components/Apply/ApplyContent"


const ApplyPage = () => (
  <>
    <Layout>
      <PageBanner title="Apply" description="join our family"/>
      <ApplyContent/>
    </Layout>
  </>
)

export default ApplyPage

export const Head = () => {
  <>
    <title>Apply | Big Data at Berkeley</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Apply to help educate high school students on data science or complete a data consulting project."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC"/>
  </>
}
