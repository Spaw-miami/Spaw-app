import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Secret from './pages/Secret';
import Login from './pages/Login';
import axios from 'axios';
import Signup from './pages/Signup';
import Groomerprofile from './pages/Groomerprofile';
import api from '../api';
import Dashboard from './pages/Dashboard';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: []
		};
	}

	// componentDidMount() {
	// 	axios.get(`http://localhost:5000/read/groomer/${'5d9f9cdc581f3d4fa89445d9'}`).then((groomer) => {
	// 		this.setState({
	// 			groomer: groomer.data
	// 		});
	// 	});
	// }

	handleLogoutClick(e) {
		api.logout();
	}

	render() {
		return (
			<div className="App">
				{/* <header className="App-header"> */}

				{/* <h1 className="App-title">Welcome to Spaws</h1> */}
				<NavLink to="/" exact>
					Home
				</NavLink>
				<NavLink to="/groomerprofile">Profile</NavLink>
				<NavLink to="/landing">Landing</NavLink>
				<NavLink to="/dashboard">Groomer Dash-Board</NavLink>
				{!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
				{!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
				{api.isLoggedIn() && (
					<Link to="/" onClick={(e) => this.handleLogoutClick(e)}>
						Logout
					</Link>
				)}
				<NavLink to="/secret">Secret</NavLink>
				{/* </header> */}
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/landing" component={Landing} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/signup" component={Signup} />
					<Route path="/login" component={Login} />
					<Route path="/groomerprofile" component={Groomerprofile} />
					<Route path="/secret" component={Secret} />
					<Route render={() => <h2>404</h2>} />
				</Switch>
			</div>
		);
	}
}
