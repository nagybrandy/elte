import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,auth } from './features/actions'

function App() {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.valueReducer)
  const isLogged = useSelector((state) => state.loginReducer)

  return (
    <>
      <p>{counter}</p>
      <button onClick={()=>dispatch(increment(5))}>Increment</button>
      <button onClick={()=>dispatch(decrement(5))}>Decrement</button>
      {isLogged ? <p>BEJELENTKEZVE!!</p> : ""}
    </>
  )
}

export default App
