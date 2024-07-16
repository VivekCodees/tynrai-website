import { useState } from 'react'
import './App.css'
import Home1 from './components/Home1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home1/>
    </>
  )
}

export default App
