import React from 'react'
import { connect } from 'react-redux'
import { filterAnecdotes } from '../reducers/filterReducer'

const Filter = (props) => {
    //const content = props.store.getState().content
  const handleChange = (event) => {
      let search = event.target.value
       /*
      console.log(search)
      console.log(props.store.getState())
      props.store.dispatch(
        filterAnecdotes(search)
      )
      */
     props.filterAnecdotes(search)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      <h2>Filter</h2> 
     
      <input  onChange={handleChange} name="search"/> 
      
    </div>
  )
}


export default connect(null, { filterAnecdotes })(Filter)