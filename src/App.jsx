import { useState } from 'react'
import './App.css'
import Header from './Header'
import Desgn from './Desgn'
import Over from './Over'
import Stuff from './Stuff'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Desgn></Desgn>
      <Over></Over>
      <Stuff></Stuff>
    </>
  )
}

export default App
