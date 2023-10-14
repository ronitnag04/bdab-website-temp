import React from "react"
import Content from "../../../components/OnlineCourse/Modules/Content"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"
import deepnote_button from "../../../images/online_course/deepnote_button.png"
import google_forms_button from "../../../images/online_course/google_forms_button.png"
import google_slides_button from "../../../images/online_course/google_slides_button.png"
import youtube_button from "../../../images/online_course/youtube_button.png"

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
  {'question':"What kind of data is web scraping used for?",
   'answer':"Common use cases for web scrapping include but not limited to price monitoring, price intelligence (eg. collecting pricing information from competing sites), market research, and even some academic research in history and literature.",
   'instructor-name':'Curriculum Instructor'
  },
  {'question':"What does “csv” and “json” mean? Why do we need those data file types?",
  'answer':"“CSV” stands for “Comma Separated Values”, and “JSON” stands for “JavaScript Object Notation”. Csv file holds plain text as a series of values (cells) separated by commas (,) in a series of lines (rows), and this is a very common format of large dataset, which can be read and written easily with built-in functions. JSON file is a language-independent, human-readable language used for its simplicity and is most commonly used in web-based applications. We have different data file formats because different data requires different way of processing, partitioning, compressing, etc, and it also depends on the data type.",
  'instructor-name':'Curriculum Instructor'
  },
  {'question':"Are there any conventions when doing EDA?",
  'answer':"Each method is either non-graphical (calculation of summary statistics) or graphical (summarize the data in a diagrammatic or pictorial way). Each method is either univariate (looking at one variable only) or multivariate (looking at multiple variables, but mostly bivariate, meaning only looking at 2 variables). The generally process of doing EDA can be 1) distinguish attributes, 2) univariate analysis, bivariate or multivariate analysis, 3) detect interactions/relationships among attributes, 4) detect missing values, 5) detect outliers, 6) feature engineering",
  'instructor-name':'Curriculum Instructor'
  },
]

// Images must be in ../../../images/online_course/
const ModuleResources = [
  /*
  {'name': 'Deepnote Lesson',
   'icon': deepnote_button,
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-2-9e173e50-6ab0-48b5-99a8-70e6bd3491e7/notebook/M2%20Lesson%20Notebook-4bad20ec8db44534b7c25638921fc8ff'
  },
  */
  {'name': 'Lesson & Assignment Notebook',
   'icon': deepnote_button,
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-5-6b4771dd-79ac-403b-bea2-1191b59dd0af/notebook/Module%205%20Notebook-3aa749bc92104fe68e0065d30e2d40c2'
  },
  {'name': 'Module Feedback Form',
   'icon': google_forms_button,
   'link': 'https://docs.google.com/forms/d/e/1FAIpQLSeLsjTm6F88suyBfsr3hT5Pd6M10Yy1KrnEkMDIW_fgl88USQ/viewform'
  },
  {'name': 'Video Playlist',
   'icon': youtube_button,
   'link': 'https://youtube.com/playlist?list=PL57-h_jqatSPlxW6aKvSAvoFLvC7GR7E_'
  },
  {'name': 'Presentation Slides',
   'icon': google_slides_button,
   'link': 'https://docs.google.com/presentation/d/1TZTQJNym_QUKgDa3043cX_E5WKou-FsWw_qsjA48TfM/edit?usp=sharing'
  },
]

const Module5Page = () => (
  <>
      <Navbar/>
      <Content
          title="The Data Science Life Cycle"
          currentPage={5}
          module_videos_links={ModuleVideosLinks}
          module_common_questions={ModuleCommonQuestions}
          module_resources={ModuleResources}
      />
  </>
)

export default Module5Page

export const Head = () => (
  <>
    <title>Module 5 | Data Science Demystified</title>
    <meta charSet="utf-8" />
    <meta name="description" content="Module 5 of Data Science Demystified online course."/>
    <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
  </>
)
