import React from "react"
import { Helmet } from "react-helmet"
import ModuleContent from "../../../components/OnlineCourse/Modules/ModuleContent"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"

const ModuleVideosLinks = {
  1:{'link':'https://www.youtube.com/embed/eN1RZ6ke9qI',
     'title':'Intro to Seaborn'},
  2:{'link':'https://www.youtube.com/embed/qqWTpwiuAvA',
     'title':'Plotting with Seaborn'},
  3:{'link':'https://www.youtube.com/embed/-P9_1PbW0HA',
     'title':'Plotting with Matplotlib'},
}

const ModuleCommonQuestions = [
  {'question':"How should you clean a dataset with null values?",
   'answer':"It depends on the situation! Sometimes, it is best to fill it with bound, such as 0 or float(‘inf’). Other times, it makes sense to fill in values with the average of other data. You can use the built-in pd.fillna() function for this!",
   'instructor-name':'Random Instructor'
  },
]

// Images must be in ../../../images/online_course/
const ModuleResources = [
  {'name': 'Deepnote Lesson',
   'icon': 'deepnote_button.png',
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-4-3f8db16c-2012-456b-8fef-dc32129ebac2/notebook/Lesson%20Notebook-7ae52aa0deab4595b565caf75a129d86'
  },
  {'name': 'Deepnote Assignment',
   'icon': 'deepnote_button.png',
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-4-3f8db16c-2012-456b-8fef-dc32129ebac2/notebook/Assignment%20Notebook-54b2de47d1904c39a778a63c69ec3fa2'
  },
  {'name': 'Q&A Form',
   'icon': 'google_forms_button.png',
   'link': 'https://www.google.com'
  },
  {'name': 'Video Playlist',
   'icon': 'youtube_button.png',
   'link': 'https://youtube.com/playlist?list=PL57-h_jqatSPrmGjh3lqvd8atyHl_6chs'
  },
  {'name': 'Presentation Slides',
   'icon': 'google_slides_button.png',
   'link': 'https://docs.google.com/presentation/d/14MKfYXxXO6hvX7hlxk495anqN9Cm4RJfMy1vigshWO4/edit?usp=sharing'
  },
]

const Module4Page = () => (
  <>
    <Helmet>
      <title>Module 4 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 4 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
    </Helmet>
    <>
        <Navbar/>
        <ModuleContent
            title="Intro to Seaborn"
            currentPage={4}
            module_videos_links={ModuleVideosLinks}
            module_common_questions={ModuleCommonQuestions}
            module_resources={ModuleResources}
        />
    </>
  </>
)

export default Module4Page
