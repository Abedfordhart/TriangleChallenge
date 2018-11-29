import React from 'react'
import './DimensionsInput.css'

const DimensionsInput = (props) => {
  return (
    <form>
      <label>
        Side A:
        <input type="text" name="side1" onChange={props.handleChange}/>
      </label>
      <label>
        Side B:
        <input type="text" name="side2" onChange={props.handleChange}/>
      </label>
      <label>
        Side C:
        <input type="text" name="side3" onChange={props.handleChange}/>
      </label>
    </form>
  )
} 

export default DimensionsInput