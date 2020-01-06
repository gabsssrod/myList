import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [value, setValue] = useState();
	// const [toDo, setToDO] = useState();
	const [newToDo, setNewToDo] = useState([]);

	// function toDoChange(e) {
	// 	setToDO(e.target.value);
	// }

	function addToDo(e) {
		if (value === "") return;
		setNewToDo([...newToDo, { text: value }]);
		setValue("");
	}

	return (
		<>
			<h1>To Do</h1>
			<input
				id="input1"
				type="text"
				placeholder="add to list"
				onChange={e => setValue(e.target.value)}
				value={value}
			/>
			<button onClick={addToDo}>add</button>
			<ul>
				{newToDo.map(todo => (
					<li key={todo.index}>{todo.text}</li>
				))}
			</ul>
		</>
	);
}
