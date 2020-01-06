import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [value, setValue] = useState();
	const [newToDo, setNewToDo] = useState([]);

	// const [toDo, setToDO] = useState();
	// function toDoChange(e) {
	// 	setToDO(e.target.value);
	// }

	function addToDo(e) {
		if (value === "") return;
		setNewToDo([...newToDo, { text: value }]);
		setValue("");
	}

	function deleteInput(e) {
		newToDo.splice(list1, 1);
		setNewToDo([...newToDo]);
	}

	return (
		<>
			<h1>To Do</h1>
			<input
				id="input1"
				type="text"
				placeholder="add to list"
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button onClick={addToDo}>add</button>
			<ul>
				{newToDo.map(todo => (
					<>
						<li id="list1" key={todo.index}>
							{todo.text}
						</li>
						<button onClick={deleteInput}>trash</button>
					</>
				))}
			</ul>
		</>
	);
}
