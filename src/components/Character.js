import React from 'react'

const Character = ({selectedCharacter}) => {


    if (!selectedCharacter){
        return null
    }

    
  return (
    <div className='film'>
        <h4>{selectedCharacter.name}</h4>
        <p>Gender: {selectedCharacter.gender}</p>
        <p>Age: {selectedCharacter.age}</p>
        <p>Eye Colour:{selectedCharacter.eye_color}</p>
    </div>
  )
}

export default Character