import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {  createStore } from 'redux'
import { auth, decrement, increment } from './features/actions'
import reducers from './features/reducers'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/reducers/counterReducer'
import loginReducer from './features/reducers/loginReducer'

// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.subscribe(()=> console.log(store.getState()))

// store.dispatch(increment(2))
// store.dispatch(decrement(5))
// store.dispatch(auth())
// store.dispatch(auth())
// store.dispatch(increment(3))
// store.dispatch(decrement(2))
// store.dispatch(auth())
// store.dispatch(auth())
// store.dispatch(decrement(10))

const store = configureStore({
  reducer : {
    counter: counterReducer,
    login: loginReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
