import React from 'react'

export default function Error(props) {
  return (
      <>
        <h1>Da ist etwas schief gelaufen.</h1>
        <p>{props.message}, bitte versuche es später erneut.</p>
      </>
  )
}