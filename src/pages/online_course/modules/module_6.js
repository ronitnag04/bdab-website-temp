import React from "react"
import Content from "../../../components/OnlineCourse/Modules/Content"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"
import deepnote_button from "../../../images/online_course/deepnote_button.png"
import google_forms_button from "../../../images/online_course/google_forms_button.png"
import google_slides_button from "../../../images/online_course/google_slides_button.png"
import youtube_button from "../../../images/online_course/youtube_button.png"

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
  {'question':"How do we choose the threshold when splitting the training and test set data?",
   'answer':"First, you can consider the threshold prediction as one of the parameters to be chosen during the cross validation (meaning that you can test out different ratios between train and test data and see which yields the best model). But generally anything like 80-20, 70-30, 75-25, 90-10, etc, can be good. (usually there are more training data than testing data!)",
   'instructor-name':'Curriculum Instructor'
  },
  {'question':"For linear regression, is there a good way to identify the outliers? Do we get rid of the outliers?",
  'answer':"Using training data find best hyperplane or line that best fit. Find points which are far away from the line or hyperplane. pointer which is very far away from hyperplane remove them considering those point as an outlier. Or ther are linear regression algorithms that helps minimize the effect of outliers (eg. Huber, RANSAC, Theil-Sen, etc).",
  'instructor-name':'Curriculum Instructor'
  },
  {'question':"Can KNN be used for more than 2 classes?",
  'answer':"In general 'knn' methods are able to find more than 2 classes (this is called “multi-class classification”)",
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
  {'name': 'Deepnote Lesson/Assignment',
   'icon': deepnote_button,
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-6-dbe3d75d-e076-4d82-9668-2cacd19d46c5/notebook/Assignment%20Notebook-97edef24f6b54bc2ae40a7bebf3df628'
  },
  {'name': 'Q&A Form',
   'icon': google_forms_button,
   'link': 'https://www.google.com'
  },
  {'name': 'Video Playlist',
   'icon': youtube_button,
   'link': 'https://youtube.com/playlist?list=PL57-h_jqatSN40kqrRgkeJD4YxkBiow-s'
  },
  {'name': 'Presentation Slides',
   'icon': google_slides_button,
   'link': 'https://docs.google.com/presentation/d/1zwpMr25nJZUFyF7sDha7HD8X2rXdNce7KRVZxUfggT8/edit?usp=sharing'
  },
]

const Module6Page = () => (
  <>
      <Navbar/>
      <Content
          title="Intro to Machine Learning"
          currentPage={6}
          module_videos_links={ModuleVideosLinks}
          module_common_questions={ModuleCommonQuestions}
          module_resources={ModuleResources}
      />
  </>
)

export default Module6Page

export const Head = () => {
  <>
    <title>Module 6 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 6 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
  </>
}