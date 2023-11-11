import { useState } from 'react'
import './App.css'
import SignIn from './signin-up/SignIn'
import SignUp from './signin-up/SignUp'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Outlet/>

    </>
  )
}

export default App
