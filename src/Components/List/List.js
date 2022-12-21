import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const List = () => {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    useEffect(() => {
        // fires when app component mounts to the DOM
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos) {
            setItems(storageTodos);
        }
    }, []);

    useEffect(() => {
        // fires when todos array gets updated
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    function addItem() {

        if (!newItem) {
            alert("Press enter an item.");
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem,
        };

        setItems((oldList) => [...oldList, item]);

        setNewItem("");
    }

    // deletes the stored list 
    // localStorage.removeItem("react-todo-list-todos");

    return (
        <div>
            <h1>List</h1>

            <form onSubmit={(e) => { addItem(); e.preventDefault(); }}>
                <input
                    type="text"
                    placeholder="Add an item..."
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
            </form>

            <button onClick={() => addItem()}>Add</button>

            <ul>
                {items.map((item) => {
                    return (
                        <div key={item.id} >
                            <li>
                                {item.value}
                            </li>
                        </div>
                    );
                })}
            </ul>
            <Outlet />
        </div>

    );
}

export default List;
