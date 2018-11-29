import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleSubmit}>
      {props.name}
    </button>
  )
}

export default Button