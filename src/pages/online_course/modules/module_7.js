import React from "react"
import { Helmet } from "react-helmet"
import Content from "../../../components/OnlineCourse/Modules/Content"
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
  {'question':"What does independent trials mean in probability?",
   'answer':"Independence means knowing the outcome of one trial does not affect the outcome of another trial. For instance, individual coin tosses are independent trials since flipping a head or tail does not change the probability of getting heads or tails in the next trial. However, choosing two cards from a deck is not an independent event. You have a 1/52 chance of picking the first card. Since you already picked one card, now you only have 51 cards to choose from. Therefore, the chance of picking the second card is now 1/51.",
   'instructor-name':'Curriculum Instructor'
  },
  {'question':"What are some examples of null and alternative hypotheses and why do we need them?",
  'answer':"An example of a null hypothesis would be ‘Water does not affect the growth of plants.’ On the other hand, an alternative hypothesis would be ‘Water does affect the growth of plants.’ We need these two hypotheses since we want to portray the relationship between two measured phenomena.",
  'instructor-name':'Curriculum Instructor'
  },
  {'question':"When can you say study results are statistically significant?",
  'answer':"If a result is statistically significant, the outcome is unlikely to be solely due to random chance. In other words, this means that there is likely a relationship between the two variables we measured. Quantitatively, we say a study result is statistically significant if the p-value is less than our set significance level.",
  'instructor-name':'Curriculum Instructor'
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
   'link': 'https://youtube.com/playlist?list=PL57-h_jqatSNE6WFtgQ9ZuOd9gu7p6y4U'
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
        <Content
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
