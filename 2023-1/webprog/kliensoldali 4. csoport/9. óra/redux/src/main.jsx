import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {  createStore } from 'redux'
import counterReducer from './features/reducers/counterReducer'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/reducers/loginReducer'

const store = configureStore({
  reducer : {
    counter : counterReducer,
    login : loginReducer
  }
})
// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.subscribe(() => console.log(store.getState()))

// store.dispatch(increment(5))
// store.dispatch(decrement(10))
// store.dispatch(increment(10))
// store.dispatch(increment())
// store.dispatch(auth())
// store.dispatch(decrement())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
