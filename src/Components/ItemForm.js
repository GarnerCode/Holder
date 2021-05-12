import React, {useState} from 'react';

const ItemForm = ({inventoryArray, setInventoryArray}) => {

    const [itemType, setItemType] = useState("default");
    const [typeSelected, setTypeSelected] = useState(false);
    const [itemArray, setItemArray] = useState([]);
    const [itemSelected, setItemSelected] = useState("default");

    //Disables item select menu if item type is not selected
    const changeItemType = (event) => {
        setItemType(event.target.value);
        // Set available items based on item type selected
        switch(event.target.value) {
            default:
                setItemType("default");
                break;
            case "armor":
                setItemArray([
                    "Breastplate",
                    "Chain Mail",
                    "Chain Shirt",
                    "Half Plate",
                    "Hide",
                    "Leather",
                    "Padded",
                    "Plate",
                    "Ring Mail",
                    "Scale Mail",
                    "Splint",
                    "Studded Leather"
                ]);
                break;
            case "food":
                setItemArray([
                    "Ale",
                    "Apple",
                    "Bread",
                    "Cheese",
                    "Feed",
                    "Meat",
                    "Ration",
                    "Turkey Leg",
                    "Water",
                    "Wine"
                ]);
                break;
            case "potion":
                setItemArray([
                    "Acid Vial",
                    "Antitoxin",
                    "Poison Vial",
                    "Potion of Healing",
                    "Potion of Greater Healing",
                    "Potion of Superior Healing",
                    "Potion of Supreme Healing"
                ]);
                break;
            case "tool":
                setItemArray([
                    "Alchemist Supplies",
                    "Carpenter's Tools",
                    "Cartographer's Tools",
                    "Climber's Kit",
                    "Cobbler's Tools",
                    "Disguise Kit",
                    "Fishing Tackle",
                    "Forgery Kit",
                    "Glassblower's Tools",
                    "Healer's Kit",
                    "Herbalism Kit",
                    "Leatherworker's Tools",
                    "Mason's Tools",
                    "Navigator's Tools",
                    "Poisoner's Kit",
                    "Potter's Tools",
                    "Smith's Tools",
                    "Thieve's Tools",
                    "Weaver's Tools",
                    "Woodcarver's Tools"
                ]);
                break;
            case "weapon":
                setItemArray([
                    "Dagger",
                    "Battleaxe",
                    "Blowgun",
                    "Club",
                    "Flail",
                    "Greatclub",
                    "Greataxe",
                    "Glaive",
                    "Halberd",
                    "Greatsword",
                    "Javelin",
                    "Handaxe",
                    "Longbow",
                    "Light Hammer",
                    "Lance",
                    "Light Crossbow",
                    "Hand Crossbow",
                    "Heavy Crossbow",
                    "Longsword",
                    "Mace",
                    "Maul",
                    "Morningstar",
                    "Pike",
                    "Quarterstaff",
                    "Rapier",
                    "Rod",
                    "Scimitar",
                    "Shortbow",
                    "Shortsword",
                    "Sickle",
                    "Sling",
                    "Spear",
                    "Staff",
                    "Trident",
                    "Wand",
                    "War Pick",
                    "Warhammer",
                    "Whip"
                ]);
                break;
        }
        if (event.target.value !== "default") {
            setTypeSelected(true);
        } else {
            setTypeSelected(false);
        }
    }

    const SelectItem = (event) => {
        setItemSelected(event.target.value);
    }

    const handleItemSubmit = (event) => {
        event.preventDefault();
        setInventoryArray([
            ...inventoryArray,
            {name: itemSelected, image: itemSelected, id: Math.random() * 1000}
        ]);
    }

    return (
        <div className="item-form">
            <form action="">
                    <select onChange={changeItemType} name="item-type" id="item-type" required>
                        <option value="default">Item Type</option>
                        <option value="armor">Armor</option>
                        <option value="food">Food</option>
                        <option value="potion">Potion</option>
                        <option value="tool">Tool</option>
                        <option value="weapon">Weapon</option>
                    </select>
                    <select disabled={typeSelected ? false : true} value={itemSelected} onChange={SelectItem} name="item-type" id="item-type" required>
                        <option value="default">Item Name</option>
                        {itemArray.map(item => (
                            <option key={Math.random() * 1000} value={item}>{item}</option>
                        ))}
                    </select>

                    <div className="itemSubType">

                    </div>

                <button onClick={handleItemSubmit}>Add Item</button>
            </form>
        </div>
    )
}

export default ItemForm;