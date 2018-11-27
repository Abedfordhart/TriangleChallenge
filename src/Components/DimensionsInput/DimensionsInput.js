import React from 'react'

const DimensionsInput = (props) => {
  return (
    <form>
      <label>
        Side 1:
        <input type="text" name="side1" />
      </label>
      <input type="submit" value="Submit" />
      <label>
        Side 2:
        <input type="text" name="side2" />
      </label>
      <input type="submit" value="Submit" />
      <label>
        Side 3:
        <input type="text" name="side3" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
} 

export default DimensionsInput