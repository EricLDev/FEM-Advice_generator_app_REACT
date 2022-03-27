import React, { useState, useEffect } from "react";
import "./App.css";
import divider from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";

function App() {
	const [id, setId] = useState("");
	const [advice, setAdvice] = useState("");

	async function getData() {
		let randomId = Math.floor(Math.random() * 220);
		await fetch(`https://api.adviceslip.com/advice/${randomId}`)
			.then((response) => response.json())
			.then((data) => {
				setId(data.slip.id);
				setAdvice(data.slip.advice);
			})
			.catch((error) => console.log(error));
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="App">
			<div className="container">
				<h1>Advice #{id}</h1>
				<p>"{advice}"</p>
				<img className="divider" src={divider} alt="" />
				<div>
					<button onClick={getData}>
						<img src={dice} alt="" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
