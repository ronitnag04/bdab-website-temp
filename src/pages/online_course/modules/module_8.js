import React from "react"
import Content from "../../../components/OnlineCourse/Modules/Content"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"
import deepnote_button from "../../../images/online_course/deepnote_button.png"
import google_forms_button from "../../../images/online_course/google_forms_button.png"
import google_slides_button from "../../../images/online_course/google_slides_button.png"
import youtube_button from "../../../images/online_course/youtube_button.png"

const ModuleVideosLinks = {
  1:{'link':'https://www.youtube.com/embed/fliUinipGE4',
     'title':'SQL Part 1'},
  2:{'link':'https://www.youtube.com/embed/uG739MKVCJM',
     'title':'SQL Part 2'},
}

const ModuleCommonQuestions = [
  {'question':"Does the order of SQL commands matter while querying tables? Do we have to start with the SELECT command?",
   'answer':"No, the order of commands in SQL doesn’t matter. However, the most common way to write your SQL queries is in this order: SELECT, FROM, JOIN, WHERE, GROUP BY, GROUP BY, ORDER BY, and LIMIT.\n\nRegardless of what order the commands are written, SQL will be reading your commands in the following order: FROM, JOIN, WHERE, GROUP BY, HAVING, SELECT, ORDER, LIMIT.",
   'instructor-name':'Curriculum Instructor'
  },
  {'question':"Do we have to define primary keys?",
  'answer':"SQL tables need primary keys to be joinable, and to be easily referenced afterwards. Hence, every SQL table needs to have a primary key defined.",
  'instructor-name':'Curriculum Instructor'
  },
  {'question':"Can we have two columns of the same name in a table?",
  'answer':"Columns in the same table cannot have the same name.",
  'instructor-name':'Curriculum Instructor'
  },
]

// Images must be in ../../../images/online_course/
const ModuleResources = [
  {'name': 'Full Course Evaluation Form',
  'icon': google_forms_button,
  'link': 'https://docs.google.com/forms/d/e/1FAIpQLSeti_KdT4tP4xgQkUgWb6b_ydAMRVh3ZlbB0PJqNDFH-W_ubw/viewform'
  },
  {'name': 'Deepnote Lesson',
   'icon': deepnote_button,
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-8-d9f39b76-5781-4af5-b332-419e04cd80b2/notebook/M8%20Lesson%20Notebook-f6e5f8c0f1e64f34a657f5b9045606f3'
  },
  {'name': 'Deepnote Assignment',
   'icon': deepnote_button,
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-8-d9f39b76-5781-4af5-b332-419e04cd80b2/notebook/M8%20Assignment%20Notebook-ade4261360fe40d3a0a49a4c30d1bbe2'
  },
  {'name': 'Module Feedback Form',
  'icon': google_forms_button,
  'link': 'https://docs.google.com/forms/d/e/1FAIpQLSeLsjTm6F88suyBfsr3hT5Pd6M10Yy1KrnEkMDIW_fgl88USQ/viewform'
  },
  {'name': 'Video Playlist',
   'icon': youtube_button,
   'link': 'https://youtube.com/playlist?list=PL57-h_jqatSMR6vV5POezAku6_CjkWPoo'
  },
  {'name': 'Presentation Slides',
   'icon': google_slides_button,
   'link': 'https://docs.google.com/presentation/d/1GUqJw0tLv_vdmNALugF3iO23OaJfg9DrF_z7ugO0XB0/edit?usp=sharing'
  },
]

const Module8Page = () => (
  <>
      <Navbar/>
      <Content
          title="SQL"
          currentPage={8}
          module_videos_links={ModuleVideosLinks}
          module_common_questions={ModuleCommonQuestions}
          module_resources={ModuleResources}
      />
  </>
)

export default Module8Page

export const Head = () => (
  <>
    <title>Module 8 | Data Science Demystified</title>
    <meta charSet="utf-8" />
    <meta name="description" content="Module 8 of Data Science Demystified online course."/>
    <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
  </>
)