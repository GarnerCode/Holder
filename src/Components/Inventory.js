import React from 'react';
import Item from './Item';

const Inventory = ({inventoryArray, setInventoryArray}) => {
    return (
        <div className="inventory">
            {inventoryArray.map(item => (
                <Item
                item={item}
                itemName={item.name}
                itemImage={item.image}
                key={item.id}
                inventoryArray={inventoryArray}
                setInventoryArray={setInventoryArray}
                />
            ))}
        </div>
    )
}

export default Inventory;