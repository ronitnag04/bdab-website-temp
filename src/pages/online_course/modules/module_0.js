import React from "react"
import Content from "../../../components/OnlineCourse/Modules/Content"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"
import deepnote_button from "../../../images/online_course/deepnote_button.png"
import google_forms_button from "../../../images/online_course/google_forms_button.png"
import google_slides_button from "../../../images/online_course/google_slides_button.png"
import youtube_button from "../../../images/online_course/youtube_button.png"

const ModuleVideosLinks = {
  1:{'link':'https://www.youtube.com/embed/BgJ-e4EfhTA',
     'title':'Setup'},
}

const ModuleCommonQuestions = [
  {'question':"Why are Deepnote notebooks useful?",
   'answer':"Deepnote has a real-time collaborative feature where your team can work together simultaneously. Sharing your project is as easy as sending a link or email invite. It has a built-in SQL feature that does not require additional imports, which allows us to facilitate data processing. Lastly, Deepnote is beginner-friendly as it is easier to use for users who do not have much technical experience!",
   'instructor-name':'Curriculum Instructor'
  },
  {'question':"What is the difference between the “Lesson Notebook” and “Assignment Notebook”?",
   'answer':"The “Lesson Notebook” contains lecture materials so that you can follow along while you watch the module videos! The “Assignment Notebook” has extra comprehensive questions that will help you better understand the core concepts and will allow you to apply the knowledge that you learned through lectures.",
   'instructor-name':'Curriculum Instructor'
  },
]

// Images must be in ../../../images/online_course/
const ModuleResources = [
  {'name': 'Welcome Form',
   'icon': google_forms_button,
   'link': 'https://docs.google.com/forms/d/e/1FAIpQLSfpsuDv3fZmTlfO2CwIKVoZRpfUANPRX0t5vP-TgluT-mtXDA/viewform'
  },
  {'name': 'Q&A Form',
   'icon': google_forms_button,
   'link': 'https://www.google.com'
  },
  {'name': 'Video Playlist',
   'icon': youtube_button,
   'link': 'https://youtube.com/playlist?list=PL57-h_jqatSOfvZqjAGfh12FRmqaIGetE'
  },
  {'name': 'Presentation Slides',
   'icon': google_slides_button,
   'link': 'https://docs.google.com/presentation/d/1K34fJFoMJLrezNfc1YklKkT7I7durx8CkRPpjVrWZqk/edit?usp=sharing'
  },
]

const Module0Page = () => (
  <>
      <Navbar/>
      <Content
          title="Setting Up"
          currentPage={0}
          module_videos_links={ModuleVideosLinks}
          module_common_questions={ModuleCommonQuestions}
          module_resources={ModuleResources}
      />
  </>
)

export default Module0Page

export const Head = () => {
  <>
    <title>Module 0 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 0 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
  </>
}