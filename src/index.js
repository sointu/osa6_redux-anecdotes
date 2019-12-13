import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

/*
import { createStore, combineReducers } from 'redux'
import anecdoteReducer, { initializeAnecdotes } from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import anecdoteService from './services/anecdotes'


const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  message: notificationReducer,
  filter: filterReducer
})

const store = createStore(reducer)

anecdoteService.getAll().then(anecdotes =>
  store.dispatch(initializeAnecdotes(anecdotes))
)
*/
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)