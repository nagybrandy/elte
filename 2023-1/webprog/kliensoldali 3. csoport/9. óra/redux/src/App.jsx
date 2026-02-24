import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './features/reducers/counterReducer'

function App() {
  const dispatch = useDispatch()
  const {value: count} = useSelector(state => state.counter)
  const {value : isLogged} = useSelector(state => state.login)
  return (
   <>
   <h1>{count}</h1>
   <button onClick={() => dispatch(increment(5))}>INCREMENT</button>
   <button onClick={() => dispatch(decrement(5))}>DECREMENT</button>
   {isLogged ? <h1>Bejelentkezve</h1> : <h1>Nem vagy bejelentkezve</h1>}
   </>
  )
}

export default App
