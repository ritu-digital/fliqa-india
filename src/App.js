import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Services from './components/Services/Services';

function App() {
	return (
		<BrowserRouter>
			<div className='app'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/services' component={Services} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
