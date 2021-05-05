import './App.css';
import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import AddChar from './Components/AddChar';
import CharList from './Components/CharList';
import ItemForm from './Components/ItemForm';
import Inventory from './Components/Inventory';

function App() {
  /*Character States*/
  const [charArray, setCharArray] = useState([]);
  const [activeChar, setActiveChar] = useState("");
  const [addCharText, setAddCharText] = useState("");

  /*Display States*/
  const [displayItemForm, setDisplayItemForm] = useState(false);

  /*Functions*/
  const handleDisplayItemForm = () => {
    setDisplayItemForm(displayItemForm => !displayItemForm);
  }

  return (
    <div className="App">
      <Navbar />
      <AddChar 
        charArray = {charArray}
        setCharArray = {setCharArray}
        addCharText = {addCharText}
        setAddCharText = {setAddCharText}
      />
      <CharList 
        charArray = {charArray}
        setCharArray = {setCharArray}
        addCharText = {addCharText}
      />
      <button onClick={handleDisplayItemForm}>
        {displayItemForm ? 'Cancel' : 'Add Item'}
      </button>
      {displayItemForm && <ItemForm />}
      <h1>Inventory</h1>
      <hr/>
      <Inventory />
      <p><i className="far fa-copyright"></i> Copyright 2021</p>
    </div>
  );
}

export default App;
