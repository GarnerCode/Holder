import React, {useState} from 'react';

const Item = ({item, itemName, itemImage, inventoryArray, setInventoryArray}) => {
    const [itemCount, setItemCount] = useState(1);

    const deleteHandler = () => {
        setInventoryArray(inventoryArray.filter((el) => el.id !== item.id));
    };

    return (
        <div className="itemBlock">
            <img className="itemImage" src={`media/${itemImage}.jpg`} alt="" />
            <button onClick={deleteHandler}><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Item;