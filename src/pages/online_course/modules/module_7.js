import React from "react"
import { Helmet } from "react-helmet"
import ModuleContent from "../../../components/OnlineCourse/Modules/ModuleContent"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"

const ModuleVideosLinks = {
  1:{'link':'https://www.youtube.com/embed/ql3LqRxynqU',
     'title':'Statistics in Data Science'},
  2:{'link':'https://www.youtube.com/embed/MdTtrFozj6Q',
     'title':'Probability Examples'},
  3:{'link':'https://www.youtube.com/embed/0S2tU3X7xvE',
     'title':'Hypothesis Testing'},
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
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-7-9e80cc96-c4f4-45be-af58-54fa17cac36e/notebook/M7%20Lesson%20Notebook-db524a19a13c418184a7ff2ef274be87'
  },
  {'name': 'Deepnote Assignment',
   'icon': 'deepnote_button.png',
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-7-9e80cc96-c4f4-45be-af58-54fa17cac36e/notebook/M7%20Assignment%20Notebook-125f25abafe54b69b4dc67b540556ce1'
  },
  {'name': 'Q&A Form',
   'icon': 'google_forms_button.png',
   'link': 'https://www.google.com'
  },
  {'name': 'Video Playlist',
   'icon': 'youtube_button.png',
   'link': 'https://www.youtube.com/watch?v=ql3LqRxynqU&list=PL57-h_jqatSNE6WFtgQ9ZuOd9gu7p6y4U&ab_channel=BigDataatBerkeley'
  },
  {'name': 'Presentation Slides',
   'icon': 'google_slides_button.png',
   'link': 'https://docs.google.com/presentation/d/18Ivy7JVAa05gRXTS8tAaobN4_n8_44T0Og_SpRMqUZs/edit?usp=sharing'
  },
]

const Module7Page = () => (
  <>
    <Helmet>
      <title>Module 7 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 7 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
    </Helmet>
    <>
        <Navbar/>
        <ModuleContent
            title="Statistics in Data Science"
            currentPage={7}
            module_videos_links={ModuleVideosLinks}
            module_common_questions={ModuleCommonQuestions}
            module_resources={ModuleResources}
        />
    </>
  </>
)

export default Module7Page
