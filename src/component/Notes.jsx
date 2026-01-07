import React from 'react'
import Notesform from './Notesform'
import Notedisplay from './Notedisplay'
import { useState } from 'react'

const Notes = () => {
  let [noteArr,setNoteArr] = useState(null)
  return (
    <div>
      <Notesform setNoteArr={setNoteArr}/>
      <hr />
      <Notedisplay noteArr={noteArr} setNoteArr={setNoteArr}/>
    </div>
  )
}

export default Notes