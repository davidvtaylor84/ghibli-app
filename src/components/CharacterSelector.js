import React from 'react'

const CharacterSelector = ({characters, onCharacterSelect}) => {
    
    const handleSelectCharacter = event =>
        onCharacterSelect(event.target.value)

    return (
        <div className='selector'><br/>
        <select defaultValue="" onChange={handleSelectCharacter}>
            <option value="" disabled>Choose a Ghibli Character</option>{
                characters.map( character => {
                    return (
                        <option key={character.id} value={character.id}>{character.name}</option>
                    )
                })
            }
        </select>
        </div>
  )
}

export default CharacterSelector