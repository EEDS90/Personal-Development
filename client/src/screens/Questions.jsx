import React from 'react'

export default function Questions(props) {
  return (
    <div>
      <h3>Questions</h3>
      {
        props.questions.map(question => (
        <p key={question.id}>{question.text}</p>
        ))
      }
    </div>
  )
}
