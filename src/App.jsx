import { useState } from 'react'
import './App.css'
import Home1 from './components/Home1'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home1/>
    </>
  )
}

export default App
