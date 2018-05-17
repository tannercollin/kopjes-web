import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './App.css';
import logo from './logo.jpg';
import Home from './Home';
import About from './About';
import Docket from './Docket';
import Example from './Example';

class App extends Component {
	render() {
		return (
			<div className='container'>
				<div className='hero row'>
					<div className='three columns'>
						<img className='logo u-max-full-width' src={logo} alt='kopjes logo' />
					</div>
					<div className='menu seven columns'>
						<Link to='/'>Home</Link>
						&nbsp;|&nbsp;
						<Link to='/about'>About Us</Link>
						&nbsp;|&nbsp;
						<Link to='/docket'>Weekly Docket</Link>
						&nbsp;|&nbsp;
						<Link to='/example-page'>Example Page</Link>
						&nbsp;|&nbsp;
						<Link to='/example-page'>Example Page</Link>
					</div>
					<div className='spacer two columns'></div>
				</div>


				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/docket' component={Docket} />
					<Route exact path='/example-page' component={Example} />
				</Switch>

				<div className='footer'>
					Thanks to person, person, person, and person for helping make kopjes.chat!
				</div>
			</div>
		);
	}
}

export default App;
