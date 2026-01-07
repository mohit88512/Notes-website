import React, { useState } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const Notesform = ({setNoteArr}) => {
  let [noteobj, setNoteObj] = useState(()=>{return{
    title:"",
    text:"",
    color:""
  }})
  
async function handleSubmit(e){
    e.preventDefault();

    let res = await axios.post(`${API_URL}/add-note`,{title:noteobj.title,text:noteobj.text,color:noteobj.color})
    let note = res.data.data
    // console.log(notes)
    setNoteArr(note)

    setNoteObj({...noteobj,title:"",text:""})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setNoteObj({...noteobj,title:e.target.value})} type="text" placeholder='Enter title' value={noteobj.title}/>
        <textarea onChange={e => setNoteObj({...noteobj,text:e.target.value})} placeholder='Enter Note...' value={noteobj.text}></textarea>
        <input onChange={e => setNoteObj({...noteobj,color:e.target.value})} type="color"/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Notesform