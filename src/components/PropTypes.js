import React from 'react'
import PropTypes from 'prop-types'
function PropTypesExample(prop) {

  return (
    <div>
     <h1>Name:{prop.name}</h1><br></br>
     <h1>Age:{prop.age}</h1>
    </div>
  )
}
PropTypesExample.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
  };
PropTypesExample.defaultProps={
    name:'NA',
    age:'NA'
}
export default PropTypesExample
