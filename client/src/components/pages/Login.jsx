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
		console.log(this.state)
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
				// 	<div class="container-fluid">
				// 		<div class="row no-gutter">
				// 			<div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
				// 			<div class="col-md-8 col-lg-6">
				// 				<div class="login d-flex align-items-center py-5">
				// 					<div class="container">
				// 						<div class="row">
				// 							<div class="col-md-9 col-lg-8 mx-auto">
				// 								<h3 class="login-heading mb-4">Welcome back!</h3>
				// 								<form>
				// 									<div class="form-label-group">
				// 										<input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
				// 										<label for="inputEmail">Email address</label>
				// 									</div>

				// 									<div class="form-label-group">
				// 										<input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
				// 										<label for="inputPassword">Password</label>
				// 									</div>

				// 									<div class="custom-control custom-checkbox mb-3">
				// 										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
				// 										<label class="custom-control-label" for="customCheck1">Remember password</label>
				// 									</div>
				// 									<button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
				// 									<div class="text-center">
				// 										<a class="small" href="#">Forgot password?</a></div>
				// 								</form>
				// 							</div>
				// 						</div>
				// 					</div>
				// 				</div>
				// 			</div>
				// 		</div>
				//  </div>
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
		console.log("_________-__-_--__---", this.state)
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
			.post('http://localhost:5000/auth/loginGroomer', {
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
