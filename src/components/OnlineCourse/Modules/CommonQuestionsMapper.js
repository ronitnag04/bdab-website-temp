import React from 'react'
import CommonQuestion from './CommonQuestion'

const CommonQuestionsMapper = (props) => {
  return (
    props.module_common_questions.map((question) => 
                <CommonQuestion
                            question={question}
                        />
            
            )
  )
}

export default CommonQuestionsMapper