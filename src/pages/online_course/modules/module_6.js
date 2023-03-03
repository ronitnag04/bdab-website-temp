import React from "react"
import { Helmet } from "react-helmet"
import ModuleContent from "../../../components/OnlineCourse/Modules/ModuleContent"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"

const ModuleVideosLinks = {
  1:{'link':'https://www.youtube.com/embed/Xc15p_XCZLs',
     'title':'What is Machine Learning'},
  2:{'link':'https://www.youtube.com/embed/7Y5AAQiaLQ0',
     'title':'Training to Prediction'},
  3:{'link':'https://www.youtube.com/embed/d3fGS36Iukc',
     'title':'Linear Regression'},
  4:{'link':'https://www.youtube.com/embed/jL_1dr4e9OM',
     'title':'K-Nearest Neighbors'},
}

const ModuleCommonQuestions = [
  {'question':"How should you clean a dataset with null values?",
   'answer':"It depends on the situation! Sometimes, it is best to fill it with bound, such as 0 or float(‘inf’). Other times, it makes sense to fill in values with the average of other data. You can use the built-in pd.fillna() function for this!",
   'instructor-name':'Random Instructor'
  },
]

// Images must be in ../../../images/online_course/
const ModuleResources = [
  /*
  {'name': 'Deepnote Lesson',
   'icon': 'deepnote_button.png',
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-2-9e173e50-6ab0-48b5-99a8-70e6bd3491e7/notebook/M2%20Lesson%20Notebook-4bad20ec8db44534b7c25638921fc8ff'
  },
  */
  {'name': 'Deepnote Lesson/Assignment',
   'icon': 'deepnote_button.png',
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-6-dbe3d75d-e076-4d82-9668-2cacd19d46c5/notebook/Assignment%20Notebook-97edef24f6b54bc2ae40a7bebf3df628'
  },
  {'name': 'Q&A Form',
   'icon': 'google_forms_button.png',
   'link': 'https://www.google.com'
  },
  {'name': 'Video Playlist',
   'icon': 'youtube_button.png',
   'link': 'https://www.youtube.com/watch?v=Xc15p_XCZLs&list=PL57-h_jqatSN40kqrRgkeJD4YxkBiow-s&index=1&ab_channel=BigDataatBerkeley'
  },
  {'name': 'Presentation Slides',
   'icon': 'google_slides_button.png',
   'link': 'https://docs.google.com/presentation/d/1zwpMr25nJZUFyF7sDha7HD8X2rXdNce7KRVZxUfggT8/edit?usp=sharing'
  },
]

const Module6Page = () => (
  <>
    <Helmet>
      <title>Module 6 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 6 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
    </Helmet>
    <>
        <Navbar/>
        <ModuleContent
            title="Intro to Machine Learning"
            currentPage={6}
            module_videos_links={ModuleVideosLinks}
            module_common_questions={ModuleCommonQuestions}
            module_resources={ModuleResources}
        />
    </>
  </>
)

export default Module6Page
