import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, hideNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'


const AnecdoteForm = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    props.createAnecdote(newAnecdote) 
    
    props.createNotification(content)  
    
    setTimeout(() => {
      props.hideNotification()
    }, 5000)
  }


 
  return (
    <div>
      <h2>Create new</h2>
      <form  onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit" >add</button>
      </form>
    </div>
  )
}

/*
const mapDispatchToProps = {
  createAnecdote, createNotification, hideNotification 
}
*/


export default connect(null, { createAnecdote, createNotification, hideNotification })(AnecdoteForm)