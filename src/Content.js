import { useState } from "react";
import ItemList from "./ItemList";

const Content = () => {
	const [items, setItems] = useState([
		{
			id: 1,
			checked: true,
			item: "Grocery run",
		},
		{
			id: 2,
			checked: false,
			item: "Item 2",
		},
		{
			id: 3,
			checked: false,
			item: "Item 3",
		},
	]);

	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItems(listItems);
		localStorage.setItem("shoppinglist", JSON.stringify(listItems));
	};

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);
		localStorage.setItem("shoppinglist", JSON.stringify(listItems));
	};

	return (
		<main>
			{items.length ? (
				<ItemList
					items={items}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
			) : (
				<p style={{ marginTop: "2rem" }}>Your list is empty.</p>
			)}
		</main>
	);
};

export default Content;
