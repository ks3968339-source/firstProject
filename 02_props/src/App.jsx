import React from 'react'
import Card from './components/Card'


const App = () => {
  return (
    <div className="parent">
      <Card user="Shyam" age={20} img="https://images.unsplash.com/photo-1747229521023-5f89d2749fa3?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="GhanShyam" age={25} img="https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Hari" age={45} img="https://images.unsplash.com/photo-1724064710352-3cbcee4bc3a8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9uYWxkb3xlbnwwfHwwfHx8MA%3D%3D"/>
      <Card user="Rajesh" age={52} img="https://plus.unsplash.com/premium_photo-1684888759266-ce3768052c80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9uYWxkb3xlbnwwfHwwfHx8MA%3D%3D"/>



    </div>
  )
}

export default App
