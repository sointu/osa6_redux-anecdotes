import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

import anecdoteService from './services/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = (props) => {
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => props.initializeAnecdotes(anecdotes))
  },[])
/*
return (
    <div>
      <div>
        <Notification
          store={props.store}
        />
      </div>


      <h2>Anecdotes</h2>
      <AnecdoteList
        store={props.store}
      />
      <Filter 
        store= {props.store}
      />
      <AnecdoteForm
        store={props.store}
      />
    </div>
  )
*/
 

  return (
    <div>
      <div> 
        <Notification />        
      </div>

      <h2>Anecdotes</h2>
        <AnecdoteList />
        <Filter />
        <AnecdoteForm />
    </div>
  )
}

export default connect(null, { initializeAnecdotes })(App)