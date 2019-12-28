import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [toDo, setToDO] = useState("");
	const [newToDo, setNewToDo] = useState([]);

	function toDoChange(e) {
		setToDO(e.target.value);
	}

	function addToDo(e) {
		toDo("");
	}

	return (
		<>
			<h1>To Do</h1>

			<input placeholder="add to list" onChange={toDoChange} />

			<button onClick={addToDo}>add</button>
			<ul>{toDo}</ul>
		</>
	);
}
