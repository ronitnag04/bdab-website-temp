import React from "react"
import { Helmet } from "react-helmet"
import ModuleContent from "../../../components/OnlineCourse/Modules/ModuleContent"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"

const ModuleVideosLinks = {
  1:{'link':'https://www.youtube.com/embed/fW9JcHf62d4',
     'title':'Pandas Fundamentals'},
  2:{'link':'https://www.youtube.com/embed/hx7t8pRoXVY',
     'title':'Reading Files with Pandas'},
  3:{'link':'https://www.youtube.com/embed/4XCa_ZI75sU',
     'title':'Table Functions'},
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
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-3-e301d0ea-b5a7-47b0-9029-0d8d16be135b/notebook/M3%20Lesson%20Notebook-61d76424637c478fbe8c453c79850633'
  },
  {'name': 'Deepnote Assignment',
   'icon': 'deepnote_button.png',
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-3-e301d0ea-b5a7-47b0-9029-0d8d16be135b/notebook/M3%20Assignment%20Notebook-d778beb661884a7f9c5057d3a60a9ce8'
  },
  {'name': 'Q&A Form',
   'icon': 'google_forms_button.png',
   'link': 'https://www.google.com'
  },
  {'name': 'Video Playlist',
   'icon': 'youtube_button.png',
   'link': 'https://youtube.com/playlist?list=PL57-h_jqatSOI01k8oFko6sfRocvjkeph'
  },
  {'name': 'Presentation Slides',
   'icon': 'google_slides_button.png',
   'link': 'https://docs.google.com/presentation/d/13jXMHlaS83nVwREXHbFRp7UJYMEKF3xySpFOiHiSH7I/edit?usp=sharing'
  },
]

const Module3Page = () => (
  <>
    <Helmet>
      <title>Module 3 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 3 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
    </Helmet>
    <>
        <Navbar/>
        <ModuleContent
            title="Pandas Fundamentals"
            currentPage={3}
            module_videos_links={ModuleVideosLinks}
            module_common_questions={ModuleCommonQuestions}
            module_resources={ModuleResources}
        />
    </>
  </>
)

export default Module3Page
