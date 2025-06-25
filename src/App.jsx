import { useState } from 'react'
import reviews from './data'
import Testimonial from './components/Testimonial'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-gray-200 w-[100vw]">
      <div className="text-center">

      <h1 className="text-4xl font-bold">Our Testimonials</h1>
      <div className="bg-violet-400 h-[4px] w-1/5 mx-auto mt-1"></div>
      <Testimonial reviews={reviews}/>


      </div>
      
      
    </div>
  )
}

export default App
