import React from 'react';

const AddChar = ({charArray, setCharArray, addCharText, setAddCharText}) => {
    /*Update state based on text input*/
  const handleAddCharText = (event) => {
    setAddCharText(event.target.value);
  }
  /*Add char to array upon submit*/
  const handleAddCharSubmit = (event) => {
    event.preventDefault();
    setCharArray([
      ...charArray,
      {text: addCharText, id: Math.random() * 1000},
    ]);
    setAddCharText("");
  }
    return (
        <div>
            <form action="#">
                <label htmlFor="addChar">Add Character</label>
                <input 
                id="addChar" 
                name="addChar" 
                type="text"
                value={addCharText}
                onChange={handleAddCharText}
                />
                <button onClick={handleAddCharSubmit}>Add</button>
            </form>
        </div>
    )
}

export default AddChar;