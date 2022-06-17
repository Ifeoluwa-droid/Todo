import React, {useState} from "react";
import Item from './Item';

function App() {

    const [newItem, setNewItem] = useState('');

    const [itemList, setItemList] = useState([]);

    function handleChange(event) {
         const {value} = event.target;

         setNewItem(value);
    }
    
    function handleSubmit(event) {

        setItemList(prevValue => [...prevValue, newItem]);

        setNewItem('');

        event.preventDefault();
    }

    return (
        <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" value={newItem} onChange={handleChange}/>
                <button type="submit">
                <span>Add</span>
                </button>
            </form>
        </div>
        <div>
            <ul>
                {itemList.map(item => <Item
                    key={itemList.indexOf(item)}
                    item={item}
                 />
                )}
            </ul>
        </div>
        </div>
    );
}

export default App;
