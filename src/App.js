import './App.css';
import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import ItemForm from './Components/ItemForm';
import Inventory from './Components/Inventory';

function App() {

  const [displayItemForm, setDisplayItemForm] = useState(false);
  const [inventoryArray, setInventoryArray] = useState([]);

  /*Functions*/
  const handleDisplayItemForm = () => {
    setDisplayItemForm(displayItemForm => !displayItemForm);
  }

  return (
    <div className="App">
      <Navbar />
      <button onClick={handleDisplayItemForm}>
        {displayItemForm ? 'CANCEL' : 'ADD ITEM'}
      </button>
      {displayItemForm && <ItemForm 
        inventoryArray={inventoryArray}
        setInventoryArray={setInventoryArray}
        displayItemForm={displayItemForm}
        setDisplayItemForm={setDisplayItemForm}
      />}
      <h1>Inventory</h1>
      <Inventory 
        inventoryArray={inventoryArray}
        setInventoryArray={setInventoryArray}
      />
    </div>
  );
}

export default App;
