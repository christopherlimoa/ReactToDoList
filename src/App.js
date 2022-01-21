import Header from "./Header";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";

import { useState } from "react";

function App() {
	// default items in to do list
	const [items, setItems] = useState(
		JSON.parse(localStorage.getItem("todolist"))
	);

	// new default item with empty string
	const [newItem, setNewItem] = useState("");

	const setAndSaveItems = (newItemsList) => {
		setItems(newItemsList);
		localStorage.setItem("todolist", JSON.stringify(newItemsList));
	};

	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;

		const newItem = {
			id: id,
			checked: false,
			item: item,
		};
		const listItems = [...items, newItem];
		setAndSaveItems(listItems);
	};

	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setAndSaveItems(listItems);
	};

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setAndSaveItems(listItems);
	};

	const handleAdd = (e) => {
		e.preventDefault(); // prevents page to reload when submitting
		if (!newItem) return;
		addItem(newItem);
		setNewItem("");
	};

	return (
		<div className="App">
			<Header title="To Do List" />
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleAdd={handleAdd}
			/>
			<Content
				items={items}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			<Footer />
		</div>
	);
}

export default App;
