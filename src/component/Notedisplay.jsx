import axios from 'axios'
import React, { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL

const Notedisplay = ({noteArr,setNoteArr}) => {
  

  useEffect(()=>{
    console.log("hllooee")
    axios.get(`${API_URL}/show-note`)
    .then(res => setNoteArr(res.data.data))
  },[])
  return (
    <div>
      {
        noteArr &&
        noteArr.map((item)=>(
          <div key={item.id} style={{background:item.color || "white"}}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Notedisplay