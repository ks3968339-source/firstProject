import React, { useState } from 'react'

const App = () => {
  const[title,setTitle]=useState('');
  const submitHandler=(e)=>{
      e.preventDefault();
      console.log("form submitted succesfully by",title)
      setTitle('')
    }
  return (
    
    <div>
      <form onSubmit={(e)=>{submitHandler(e)}} onChange={(e)=>{
        setTitle(e.target.value)
      }}>
        <input  type="text"placeholder='Enter your name' value={title} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
