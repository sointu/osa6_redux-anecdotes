import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  //const message = props.store.getState().message
  const message = props.message

  return (
    <div style={style}>
      {message}
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


export default connect(mapStateToProps)(Notification)