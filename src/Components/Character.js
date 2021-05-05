import React from 'react';

const Character = ({charArray, setCharArray, text, character}) => {
    const deleteChar = () => {
        setCharArray(charArray.filter((el) => el.id !== character.id));
    }
    return (
        <div>
            <li>{text}</li>
            <button onClick={deleteChar}><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Character;