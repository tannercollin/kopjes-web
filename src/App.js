import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Example from './Example';

class App extends Component {
	render() {
		return (
			<div className="container">
				<h1>My big header</h1>

				<p>
					<Link to='/'>Home</Link>
					&nbsp;|&nbsp;
					<Link to='/example-page'>Example Page</Link>
				</p>

				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/example-page' component={Example} />
				</Switch>

				<h4>Footer</h4>
			</div>
		);
	}
}

export default App;
