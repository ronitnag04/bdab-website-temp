import React from "react"
import { Helmet } from "react-helmet"
import ModuleContent from "../../../components/OnlineCourse/Modules/ModuleContent"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"

const ModuleVideosLinks = {
  1:{'link':'https://www.youtube.com/embed/IVVSV6WoWCU',
     'title':'Introduction to the Data Science Lifecycle'},
  2:{'link':'https://www.youtube.com/embed/Hfx3Z8V_7zk',
     'title':'Data Cleaning'},
  3:{'link':'https://www.youtube.com/embed/M5bd4amhM8s',
     'title':'Data Collection'},
  4:{'link':'https://www.youtube.com/embed/r8MGHGQXsEQ',
     'title':'Defining the Question'},
  5:{'link':'https://www.youtube.com/embed/ggoayg4_16I',
     'title':'Exploratory Data Analysis'},
  6:{'link':'https://www.youtube.com/embed/g9tmbEB9D10',
    'title':'Modeling and Making Predictions'},
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
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-5-6b4771dd-79ac-403b-bea2-1191b59dd0af/notebook/Module%205%20Notebook-3aa749bc92104fe68e0065d30e2d40c2'
  },
  {'name': 'Q&A Form',
   'icon': 'google_forms_button.png',
   'link': 'https://www.google.com'
  },
  {'name': 'Video Playlist',
   'icon': 'youtube_button.png',
   'link': 'https://www.youtube.com/watch?v=IVVSV6WoWCU&list=PL57-h_jqatSPlxW6aKvSAvoFLvC7GR7E_'
  },
  {'name': 'Presentation Slides',
   'icon': 'google_slides_button.png',
   'link': 'https://docs.google.com/presentation/d/1TZTQJNym_QUKgDa3043cX_E5WKou-FsWw_qsjA48TfM/edit?usp=sharing'
  },
]

const Module5Page = () => (
  <>
    <Helmet>
      <title>Module 5 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 5 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
    </Helmet>
    <>
        <Navbar/>
        <ModuleContent
            title="The Data Science Life Cycle"
            currentPage={5}
            module_videos_links={ModuleVideosLinks}
            module_common_questions={ModuleCommonQuestions}
            module_resources={ModuleResources}
        />
    </>
  </>
)

export default Module5Page
