import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { createVoteNotification, hideNotification } from '../reducers/notificationReducer'
import  { filterAnecdotes } from '../reducers/filterReducer'


const AnecdoteList = (props) => {
    //const anecdotes = store.getState().anecdotes
    
    //const filter = store.getState().filter
   
    if(filterAnecdotes){
        return ( 
        
            <div>
                {props.filter
                .sort((a, b)=> {
                    return b.votes - a.votes
                })
                .map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            
                            <button onClick={() => {
                                console.log(anecdote.id)
                                props.voteAnecdote(anecdote.id); 
                                props.createVoteNotification(anecdote.content);
                                setTimeout(() => {
                                    props.hideNotification()
                                  }, 5000)
                                }} >vote</button>
                                
                        </div>
                    </div>
                )}
            </div>
        )
    }
    return ( 
        
        <div>
            {props.anecdotes
             
            .sort((a, b)=> {
                return b.votes - a.votes
            })
            
            .map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        
                        <button onClick={() => {
                            props.voteAnecdote(anecdote.id); 
                            props.createVoteNotification(anecdote.content);
                            setTimeout(() => {
                                props.hideNotification()
                              }, 5000)
                            }} >vote</button>
                            
                    </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    // joskus on hyödyllistä tulostaa mapStateToProps:ista...
    console.log(state)
    return {
      anecdotes: state.anecdotes,
      filter: state.filter,
      message: state.message
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        voteAnecdote: value => {
        dispatch(voteAnecdote(value))
      },
      createVoteNotification: value => {
        dispatch(createVoteNotification(value))
      },
      hideNotification: value => {
        dispatch(hideNotification(value))
      },
    }
  }
  /*
  const mapDispatchToProps = {
    voteAnecdote, createVoteNotification, hideNotification
  }
*/
export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)