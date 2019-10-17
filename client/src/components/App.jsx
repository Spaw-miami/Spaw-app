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
			countries: [],
			user: {}
		};
	}

	componentDidMount() {
		this.getUser();
	}

	getUser = () => {
		axios
			.get('http://localhost:5000/read/current')
			.then((res) => {
				console.log(res, 'RESSSSS <<<<<<<');
				this.setUser(res.data);
			})
			.catch((err) => console.error(err));
	};

	setUser = (user) => {
		console.log(user, '-=-=-');
		user = user ? user : {};
		console.log('user', user);
		this.setState({ user });
		console.log(this.state);
	};

	handleLogoutClick(e) {
		console.log('log out????????');
		api.logout().then((res) => {
			console.log('log out');
			this.setState({ user: {} });
		});
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
				<NavLink to="/signup">Signup</NavLink>
				<NavLink to="/login">Login</NavLink>
				<Link to="/" onClick={(e) => this.handleLogoutClick(e)}>
					Logout
				</Link>

				<NavLink to="/secret">Secret</NavLink>
				{this.state.user.username}
				{/* </header> */}
				<Switch>
					<Route path="/" exact render={(props) => <Home user={this.state.user} {...props} />} />
					<Route path="/landing" component={Landing} />
					<Route path="/dashboard" render={(props) => <Dashboard user={this.state.user} {...props} />} />
					<Route path="/signup" render={(props) => <Signup setUser={this.setUser} {...props} />} />
					<Route path="/login" render={(props) => <Login setUser={this.setUser} {...props} />} />
					<Route
						path="/groomerprofile"
						render={(props) => <Groomerprofile user={this.state.user} {...props} />}
					/>
					<Route path="/secret" component={Secret} />
					<Route render={() => <h2>404</h2>} />
				</Switch>
			</div>
		);
	}
}
