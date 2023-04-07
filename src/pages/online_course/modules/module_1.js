import React from "react"
import { Helmet } from "react-helmet"
import Content from "../../../components/OnlineCourse/Modules/Content"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"

const ModuleVideosLinks = {
  1:{'link':'https://www.youtube.com/embed/Du3tyAAWWQs',
     'title':'Introduction'},
  2:{'link':'https://www.youtube.com/embed/-SwcZ5E28nE',
     'title':'What is Data Science?'},
  3:{'link':'https://www.youtube.com/embed/neni7qzwBs0',
     'title':'Applications'},
  4:{'link':'https://www.youtube.com/embed/2-0BmhzhLfo',
     'title':'Ethics and Privacy'},
}

const ModuleCommonQuestions = [
  {'question':"What are some essential skills or background knowledge to learn/know if I want to study data science?",
   'answer':"Knowing at least one coding language like python, SQL, or R is essential when doing data cleaning and analysis type of work, including the libraries such as Pandas or Sklearn, etc. Additionally, it’s also good to have some statistics knowledge such as hypothesis testing and inference, and linear algebra (SVM, PCA, etc).",
   'instructor-name':'Curriculum Instructor'
  },
  {'question':"What is the difference between data science and data analytics?",
   'answer':"The skillset for data scientists and data analysts can be different: data scientists may spend most of their time scrubbing data, doing data cleaning and statistical analysis (using machine learning), and developing big data infrastructures; data analysts will be focusing on data querying, data analysis and prediction, as well as creating dashboards, performing descriptive, diagnostic, predictive or prescriptive analytics.",
   'instructor-name':'Curriculum Instructor'
  },
  {'question':"What is a a model?",
   'answer':"A model is a file that is trained to recognize certain types of patterns of data. In data science and machine learning, we train a model over a set of data, and the model can help us find patterns or make decisions based from previously unseen data.",
   'instructor-name':'Curriculum Instructor'
  },
]

// Images must be in ../../../images/online_course/
const ModuleResources = [
  {'name': 'Q&A Form',
   'icon': 'google_forms_button.png',
   'link': 'https://www.google.com'
  },
  {'name': 'Video Playlist',
   'icon': 'youtube_button.png',
   'link': 'https://youtube.com/playlist?list=PL57-h_jqatSNjqU8J8JL_YBVssAS5P191'
  },
  {'name': 'Presentation Slides',
   'icon': 'google_slides_button.png',
   'link': 'https://docs.google.com/presentation/d/1vM2gEvTyhtBegERHgs97D_pD5wRfPW2TpLMExOKaloY/edit#slide=id.g53d7d090b0_0_33'
  },
]

const Module1Page = () => (
  <>
    <Helmet>
      <title>Module 1 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 1 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
    </Helmet>
    <>
        <Navbar/>
        <Content
            title="What is Data Science?"
            currentPage={1}
            module_videos_links={ModuleVideosLinks}
            module_common_questions={ModuleCommonQuestions}
            module_resources={ModuleResources}
        />
    </>
  </>
)

export default Module1Page
