import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createStore } from 'redux'
import valueReducer from './features/reducers/valueReducer'
import { increment, decrement, auth } from './features/actions'
import { reducers } from './features/reducers'
import { Provider } from 'react-redux'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=> console.log(store.getState()))

store.dispatch(increment(10))
store.dispatch(decrement(5))
store.dispatch(increment(10))
store.dispatch(auth())
store.dispatch(auth())
store.dispatch(auth())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
