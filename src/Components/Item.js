import React from 'react';

const Item = ({item, itemImage, inventoryArray, setInventoryArray}) => {

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