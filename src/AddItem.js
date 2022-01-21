import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleAdd }) => {
	return (
		<form className="addForm" onSubmit={handleAdd}>
			<input
				autoFocus
				id="addItem"
				type="text"
				placeholder="Add item"
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
				required
			/>
			<button type="submit">
				<FaPlus />
			</button>
		</form>
	);
};

export default AddItem;
