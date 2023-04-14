import React, { Fragment } from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
import HomeContent from "../components/Home/HomeContent"
import "./index.css"

const IndexPage = () => (
  <>
    <Layout>
      <HomeBanner/>
      <HomeContent/>
    </Layout>
  </>
)

export default IndexPage

export const Head = () => {
  <>
    <title>Big Data at Berkeley</title>
    <meta name="google-site-verification" content="BCbWTYv9HP611OCBSvQGeTT_PfIrvBnOTMjzHBNd_4c" /> 
    <meta charSet="utf-8" />
    <meta name="author" content="Melissa Wong"/>
    <meta name="description" content="Big Data at Berkeley is a UC Berkeley student organization dedicated to promoting data science in our community through educational bootcamps and industry-level data consulting projects."/>
    <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC"/>
  </>
}
