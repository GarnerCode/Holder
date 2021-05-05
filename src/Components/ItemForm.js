import React from 'react';

const ItemForm = () => {
    return (
        <div className="item-form">
            <form action="">
                <label htmlFor="item-type">Item Type</label>
                    <select name="item-type" id="item-type">
                        <option value="armor">Armor</option>
                        <option value="food">Food</option>
                        <option value="potion">Potion</option>
                        <option value="tool">Tool</option>
                        <option value="weapon">Weapon</option>
                    </select>

                <label htmlFor="common">Common</label>
                    <input type="radio" id="common" name="rarity" value="common"/>
                <label htmlFor="uncommon">Uncommon</label>
                    <input type="radio" id="uncommon" name="rarity" value="uncommon"/>
                <label htmlFor="rare">Rare</label>
                    <input type="radio" id="rare" name="rarity" value="rare"/>
                <label htmlFor="epic">Mythic</label>
                    <input type="radio" id="epic" name="rarity" value="epic"/>
                <label htmlFor="legendary">Legendary</label>
                    <input type="radio" id="legendary" name="rarity" value="legendary"/>
                <button>Add Item</button>
            </form>
        </div>
    )
}

export default ItemForm;