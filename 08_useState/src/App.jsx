import React from 'react'
import { useState } from 'react';

const App = () => {
  let a=20;
 const [num,setNum]=useState(20);

function increase(){
  setNum(num+1);
}
function decrease(){
  setNum(num-1);
}
  return (
    <div className=" flex flex-col justify-center items-center h-screen w-full bg-gradient-to-br
    from-[#B5BAFF]
    via-[#AEE2FF] 
    to-amber-[#D9F9DF]">
      <h1 className=" h-50 w-100 bg-gray-400 flex justify-center items-center rounded-2xl text-4xl font-bold ">the value of a is {num}</h1>
      <button className=" p-5 border border-black  m-5 rounded-2xl bg-[#9FA1FF] font-bold" onClick={increase}>increase </button>
      <button className=" p-5 border border-black  rounded-2xl bg-[#9FA1FF] font-bold" onClick={decrease}>decrease </button>
    </div>
  )
}


export default App
