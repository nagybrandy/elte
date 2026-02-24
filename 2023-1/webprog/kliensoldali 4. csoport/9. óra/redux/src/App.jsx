import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/reducers/counterReducer'

function App() {
  const dispatch = useDispatch()
  const {value : counter} = useSelector(state => state.counter)
  const {value : isLoggedin} = useSelector(state => state.login)

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=> dispatch(increment())}>INCREMENT</button>
      <button onClick={()=> dispatch(decrement())}>DECREMENT</button>
      {isLoggedin ? <h1>Bejelentkezve</h1> : <h1>Nem vagy bejelentkezve</h1>}
    </div>
  )
}

export default App
