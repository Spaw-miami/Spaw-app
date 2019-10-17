import React, { Component } from 'react';
import api from '../../api';
import axios from 'axios';
import Footer from '../Footer';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			message: null,
			groomer: true
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	switching = () => {
		let opposite = !this.state.groomer;
		this.setState({
			groomer: opposite
		});
	};

	groomerOrUser = () => {
		if (this.state.groomer) {
			return (
				<div className="owner-login">
					<button className="owner-button" onClick={this.switching}>
						Are you a Groomer?
					</button>
					<form onSubmit={this.handleClick}>
						<br />
						<input
							className="lo"
							type="text"
							value={this.state.username}
							name="username"
							placeholder="Owner Username"
							onChange={this.handleInputChange}
						/>{' '}
						<br />
						<input
							className="lo"
							type="password"
							value={this.state.password}
							name="password"
							placeholder="Owner Password"
							onChange={this.handleInputChange}
						/>{' '}
						<br />
						<button onClick={(e) => this.handleClick(e)}>Login</button>
					</form>
				</div>
			);
		} else {
			return (
				<div className="groomer-login">
					<button className="groomer-button" onClick={this.switching}>
						Are you a Owner?
					</button>
					<form onSubmit={this.handleClickGroomer}>
						<br />
						<input
							className="lo"
							type="text"
							value={this.state.username}
							name="username"
							placeholder="Groomer Username"
							onChange={this.handleInputChange}
						/>{' '}
						<br />
						<input
							className="lo"
							type="password"
							value={this.state.password}
							name="password"
							placeholder="Groomer Password"
							onChange={this.handleInputChange}
						/>{' '}
						<br />
						<button onClick={(e) => this.handleClickGroomer(e)}>Login</button>
					</form>
				</div>
			);
		}
	};

	handleClick(e) {
		e.preventDefault();
		axios
			.post('http://localhost:5000/auth/loginUser', {
				username: this.state.username,
				password: this.state.password
			})
			.then((user) => {
				console.log(user);
				this.props.setUser(user.data);
				this.props.history.push('/profile');
			})
			.catch((error) => {
				console.log(error);
			});
	}

	handleClickGroomer(e) {
		e.preventDefault();
		axios
			.post('https://spaws.herokuapp.com/auth/loginGroomer', {
				username: this.state.username,
				password: this.state.password
			})
			.then((user) => {
				console.log(user);
				this.props.setUser(user.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="Login">
				<div className="center">
					<img className="logo" src="./images/Spaws_white.png" width="200" alt="logo" />
					{this.groomerOrUser()}
				</div>
				{this.state.message && <div className="info info-danger">{this.state.message}</div>}
				<Footer />
			</div>
		);
	}
}
