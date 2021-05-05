import React from 'react';
import Character from './Character';

const CharList = ({charArray, setCharArray}) => {
    return (
        <ul>
            {charArray.map(character => (
                <Character 
                    charArray = {charArray}
                    setCharArray = {setCharArray}
                    key={character.id}
                    character={character}
                    text={character.text}
                />
            ))}
        </ul>
    )
}

export default CharList;