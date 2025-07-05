import ReactLogo from './assets/react.svg?react'
import "./App.css";

export const App = () => {
	// Декларативный
	return (
		<div className="App">
			<header className="App-header">
				<ReactLogo />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<div className="App-year">{new Date().getFullYear()}</div>
			</header>
		</div>
		// Императивный Вызов функции new Date().getFullYear()
	);
};
