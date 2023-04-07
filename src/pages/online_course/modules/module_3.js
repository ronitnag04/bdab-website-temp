import React from "react"
import { Helmet } from "react-helmet"
import Content from "../../../components/OnlineCourse/Modules/Content"
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
  {'question':"Can you select multiple columns as a series using square brackets?",
   'answer':"Unfortunately, you cannot select multiple columns using a single bracket. The possible arguments for square brackets are a slice of row numbers, a list of column labels, or a single column label. The first two arguments output a dataframe, whereas the last argument outputs a series for the column that you inputted.",
   'instructor-name':'Curriculum Instructor'
  },
  {'question':"What do you do if you want to select columns using the ‘iloc’ function?",
  'answer':"The ‘iloc’ function selects rows and columns by 0-indexed numbers. If you want to select all rows, but only the 0th and 4th columns, you could write ‘df.iloc[:, [0,4]]’. The ‘:’ means that we are selecting all rows! The arguments for both rows and columns can be a list, a slice where the number on the right hand side is exclusive, or a single value.",
  'instructor-name':'Curriculum Instructor'
  },
  {'question':"Why is the column that you called the ‘groupby’ function bolded in the dataframe?",
  'answer':"According to the ‘groupby’ documentation, one of the possible parameters is ‘as_index’, which is defaulted to the boolean value True. This means that the column(s) that you passed into ‘groupby’ becomes the new index, hence the bolded column(s)! You can manually set the ‘as-index = False’ when calling the function if you do not want this to happen.",
  'instructor-name':'Curriculum Instructor'
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
        <Content
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
