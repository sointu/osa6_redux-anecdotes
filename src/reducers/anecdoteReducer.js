import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

// create id
const getId = () => (100000 * Math.random()).toFixed(0)

// anecdotes at start -helper
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
const initialState = anecdotesAtStart.map(asObject)

// action creator: initialize

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

// action creator: create new 
export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}


// action creator: vote
export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}


const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
    const id = action.data.id
    
    //console.log(state)
    console.log('reducer id: ',id)
    const anecdoteToChange = state.find(a => id === a.id)
    
    const changedAnecdote = {
      ...anecdoteToChange,
      votes: anecdoteToChange.votes + 1
    }
    console.log('state now: ', state)
    console.log('action', action)
   
    return state.map(anecdote =>
      anecdote.id !== id ? anecdote : changedAnecdote
    )
    case 'NEW_ANECDOTE':
        return [...state, action.data]

    default:
      return state
  }

}

export default anecdoteReducer