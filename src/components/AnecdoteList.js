import React from 'react'

import { voteAnecdote } from '../reducers/anecdoteReducer'
import { createVoteNotification, hideNotification } from '../reducers/notificationReducer'
import  { filterAnecdotes } from '../reducers/filterReducer'


const AnecdoteList = ({ store }) => {
    const anecdotes = store.getState().anecdotes
    
    const filter = store.getState().filter
   
    if(filterAnecdotes){
        return ( 
        
            <div>
                {filter
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
                                store.dispatch(voteAnecdote(anecdote.id)); 
                                store.dispatch(createVoteNotification(anecdote.content));
                                setTimeout(() => {
                                    store.dispatch(hideNotification())
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
            {anecdotes
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
                            store.dispatch(voteAnecdote(anecdote.id)); 
                            store.dispatch(createVoteNotification(anecdote.content));
                            setTimeout(() => {
                                store.dispatch(hideNotification())
                              }, 5000)
                            }} >vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList