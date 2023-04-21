import React from "react"
import Content from "../../../components/OnlineCourse/Modules/Content"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"
import deepnote_button from "../../../images/online_course/deepnote_button.png"
import google_forms_button from "../../../images/online_course/google_forms_button.png"
import google_slides_button from "../../../images/online_course/google_slides_button.png"
import youtube_button from "../../../images/online_course/youtube_button.png"

const ModuleVideosLinks = {
  1:{'link':'https://www.youtube.com/embed/eN1RZ6ke9qI',
     'title':'Intro to Seaborn'},
  2:{'link':'https://www.youtube.com/embed/qqWTpwiuAvA',
     'title':'Plotting with Seaborn'},
  3:{'link':'https://www.youtube.com/embed/-P9_1PbW0HA',
     'title':'Plotting with Matplotlib'},
}

const ModuleCommonQuestions = [
  {'question':"Why is it so important to visualize both our initial data, and our findings?",
   'answer':"Visualizing our initial data can be a good way to initiate our data analysis process by will helping us recognize trends and identify outliers in our data. By knowing what our data looks like, we can select which type of regression or classification algorithm we want to use, or clean out any errors in our data accordingly.\n\nOn the other hand, visualization of the findings can be very beneficial in producing a presentable and easily understandable report to our audience.",
   'instructor-name':'Curriculum Instructor'
  },
  {'question':"What is the difference between bar plots and histograms?",
  'answer':"A bar plot, also known as a bar chart, is a plot that displays categorical data with rectangular bars. The height of each bar represents the value of a particular category, and the width of the bar is usually fixed.\n\nA histogram, on the other hand, is a plot that displays the distribution of continuous data. It represents the frequency of data within certain intervals, or bins. The height of each bar represents the number of data points that fall within a particular bin, and the width of each bin is usually fixed.",
  'instructor-name':'Curriculum Instructor'
  },
  {'question':"What are examples of qualitative and quantitative data?",
  'answer':"Qualitative data refers to non-numerical data that describes qualities or characteristics. It is subjective and typically based on observations, opinions, or interpretations. Examples of qualitative data include: Gender (male or female), Color (red, blue, green, etc.), Taste (sweet, salty, bitter, etc.)\n\n Quantitative data, on the other hand, refers to numerical data that can be measured and expressed in numbers or quantities. It is objective and can be analyzed using mathematical or statistical methods. Examples of quantitative data include: Age (25 years old), Height (175 centimeters), Weight (75 kilograms).",
  'instructor-name':'Curriculum Instructor'
  },
]

// Images must be in ../../../images/online_course/
const ModuleResources = [
  {'name': 'Deepnote Lesson',
   'icon': deepnote_button,
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-4-3f8db16c-2012-456b-8fef-dc32129ebac2/notebook/Lesson%20Notebook-7ae52aa0deab4595b565caf75a129d86'
  },
  {'name': 'Deepnote Assignment',
   'icon': deepnote_button,
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-4-3f8db16c-2012-456b-8fef-dc32129ebac2/notebook/Assignment%20Notebook-54b2de47d1904c39a778a63c69ec3fa2'
  },
  {'name': 'Module Feedback Form',
   'icon': google_forms_button,
   'link': 'https://docs.google.com/forms/d/e/1FAIpQLSeLsjTm6F88suyBfsr3hT5Pd6M10Yy1KrnEkMDIW_fgl88USQ/viewform'
  },
  {'name': 'Video Playlist',
   'icon': youtube_button,
   'link': 'https://youtube.com/playlist?list=PL57-h_jqatSPrmGjh3lqvd8atyHl_6chs'
  },
  {'name': 'Presentation Slides',
   'icon': google_slides_button,
   'link': 'https://docs.google.com/presentation/d/14MKfYXxXO6hvX7hlxk495anqN9Cm4RJfMy1vigshWO4/edit?usp=sharing'
  },
]

const Module4Page = () => (
  <>
      <Navbar/>
      <Content
          title="Intro to Seaborn"
          currentPage={4}
          module_videos_links={ModuleVideosLinks}
          module_common_questions={ModuleCommonQuestions}
          module_resources={ModuleResources}
      />
  </>
)

export default Module4Page

export const Head = () => {
  <>
      <title>Module 4 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 4 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
  </>
}
