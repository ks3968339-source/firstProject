import React from 'react'

const App = () => {
  function onscrolling(elem){
    if(elem>0){
      console.log("sedha scrolling ");  
    }else{
      console.log("ulta scrolling "); 
    }
  }
  
  return (
    <div onWheel={(elem)=>{
      onscrolling(elem.deltaY)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
     
    </div>
  )
}

export default App
