import React from "react"
import Content from "../../../components/OnlineCourse/Modules/Content"
import Navbar from "../../../components/OnlineCourse/OCNavbar/OCNavbar"
import deepnote_button from "../../../images/online_course/deepnote_button.png"
import google_forms_button from "../../../images/online_course/google_forms_button.png"
import google_slides_button from "../../../images/online_course/google_slides_button.png"
import youtube_button from "../../../images/online_course/youtube_button.png"

const ModuleVideosLinks = {
  1:{'link':'https://www.youtube.com/embed/4EaZQM4_Dhw',
     'title':'Introduction to Python'},
  2:{'link':'https://www.youtube.com/embed/HBdtnuDWkKE',
     'title':'Data Types'},
  3:{'link':'https://www.youtube.com/embed/mlQzjHS8Q7E',
     'title':'Variables'},
  4:{'link':'https://www.youtube.com/embed/n3oTMSQmMN8',
     'title':'Lists & Arrays'},
  5:{'link':'https://www.youtube.com/embed/KI7O5cHr7zc',
     'title':'Functions'},
  6:{'link':'https://www.youtube.com/embed/9SJSYmXRhL0',
    'title':'For & While Loops'},
}

const ModuleCommonQuestions = [
  {'question':"When defining variables in Python, do we need to specify the data type?",
   'answer':"No. Since Python is a dynamically-typed language, you don’t have to specify data types when defining variables. However, statically typed languages such as Java or C will require you to indicate data types.",
   'instructor-name':'Curriculum Instructor'
  },
  {'question':"What’s the difference between int and float type?",
  'answer':"Integer variables denote whole numbers, while float types are decimal numbers. For example, 3, 100, -79875, and 0 are examples of int type variables. 3.0, 10.875, -6.66667 and 0.0 are float type variables.",
  'instructor-name':'Curriculum Instructor'
  },
  {'question':"Can we have two variables with the same name and different values?",
  'answer':"No. When you assign a different value to the same variable name, the old value will be changed. For example, if you assign a = 0, then a = ‘Hello’, the variable a will now have a string value, ‘Hello’. There will be only one a variable.",
  'instructor-name':'Curriculum Instructor'
  },
  {'question':"What is the difference between modulo and floor difference math expressions?",
  'answer':"The modulo operator (%) returns the remainder of dividing one number by another. For example, 5 % 2 would return 1, because 5 divided by 2 is 2 with a remainder of 1. On the other hand, the floor division operator (//) returns the quotient of dividing one number by another, rounded down to the nearest integer. For example, 5 // 2 would return 2, because 5 divided by 2 is 2.5, which is rounded down to 2.",
  'instructor-name':'Curriculum Instructor'
  },
  {'question':"What would '3' == 3 return? What about 3 == 3.0?",
  'answer':"In Python, the expression '3' == 3 would return False, because the two operands are of different types. '3' is a string, while 3 is an integer. The == operator is used to compare the values of two operands, and it also checks whether they are of the same type. Since the two operands have different types, the expression evaluates to False.\n\nOn the other hand, the expression 3 == 3.0 would return True. In this case, both operands are numbers, and they have the same numerical value. Although 3 is an integer and 3.0 is a floating-point number, Python considers them equivalent in this context because they represent the same value numerically. When comparing numbers with ==, Python does not consider the types of the operands, only their values.",
  'instructor-name':'Curriculum Instructor'
  },
  {'question':"What is the difference between return and print?",
  'answer':"print is a function that displays a message to the user on the console or terminal. It outputs the specified values or strings to the standard output stream, which is usually the console screen. It does not affect the actual value of the variable or data that is printed, and it does not store the output anywhere.\n\nOn the other hand, return is a statement that terminates the function and returns a value to the caller. It can be used to pass back the result of a function call to the caller of the function. When a function encounters a return statement, it immediately exits the function and passes the specified value back to the caller.",
  'instructor-name':'Curriculum Instructor'
  },
  {'question':"What is the difference between libraries and packages?",
  'answer':"While both libraries and packages provide prewritten code that can be used to solve programming problems, a library typically provides a single set of functionalities, while a package provides a more structured way of organizing related modules and resources. A package can contain one or more libraries, and a library can be part of one or more packages.",
  'instructor-name':'Curriculum Instructor'
  },
]

// Images must be in ../../../images/online_course/
const ModuleResources = [
  {'name': 'Deepnote Lesson',
   'icon': deepnote_button,
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-2-9e173e50-6ab0-48b5-99a8-70e6bd3491e7/notebook/M2%20Lesson%20Notebook-4bad20ec8db44534b7c25638921fc8ff'
  },
  {'name': 'Deepnote Assignment',
   'icon': deepnote_button,
   'link': 'https://deepnote.com/workspace/big-data-at-berkeley-447a-f968b37c-a5f2-41e2-bcd6-76e997077bdf/project/Module-2-9e173e50-6ab0-48b5-99a8-70e6bd3491e7/notebook/M2%20Assignment%20Notebook-b4cc8830c1ca473a84b731e12b7d4ee0'
  },
  {'name': 'Module Feedback Form',
   'icon': google_forms_button,
   'link': 'https://docs.google.com/forms/d/e/1FAIpQLSeLsjTm6F88suyBfsr3hT5Pd6M10Yy1KrnEkMDIW_fgl88USQ/viewform'
  },
  {'name': 'Video Playlist',
   'icon': youtube_button,
   'link': 'https://youtube.com/playlist?list=PL57-h_jqatSPTYHD3WxdgrQdwLLLLT3me'
  },
  {'name': 'Presentation Slides',
   'icon': google_slides_button,
   'link': 'https://docs.google.com/presentation/d/1yW2RcJewoqPzFAsNyDyXKxUY3kiaP4m64z5uPxcLjFI/edit?usp=sharing'
  },
]

const Module2Page = () => (
  <>
      <Navbar/>
      <Content
          title="Python & NumPy"
          currentPage={2}
          module_videos_links={ModuleVideosLinks}
          module_common_questions={ModuleCommonQuestions}
          module_resources={ModuleResources}
      />
  </>
)

export default Module2Page

export const Head = () => (
  <>
    <title>Module 2 | Data Science Demystified</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Module 2 of Data Science Demystified online course."/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC,Data Science Demystified,Online Course"/>
      <meta name="keywords" content="Big Data,Data Science,UC Berkeley,Berkeley,Consulting,Big Data at Berkeley,Big Data Bootcamp,Education,Organization,RSO,Berkeley Club,ASUC"/>
  </>
)