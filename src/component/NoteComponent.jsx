import React from 'react'

function NoteComponent({ title, body }) {
  return (
    <>
        <h3>{title} </h3>
        <h4>{body}</h4>
    </>
  )
}

export default NoteComponent