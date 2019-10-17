import React, { Component } from 'react';
import api from '../../api';
import axios from 'axios';
import Footer from '../Footer'

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

	// groomerOrUser = () => {
	// 	if (this.state.groomer) {
	// 		return (
	// 			<div className="">
	// 									<button className="" onClick={this.switching}>
	// 										Are you a Groomer?
	// 									</button>
	// 				<div class="container">
	// 												<div class="row">
	// 													<div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
	// 														<div class="card card-signin my-5">
	// 															<div class="card-body">
	// 																<h5 class="card-title text-center">Sign In</h5>
	// 																<form class="form-signin">
	// 																	<div class="form-label-group">
	// 																		<input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
	// 																		<label for="inputEmail">Email address</label>
	// 																	</div>

	// 																	<div class="form-label-group">
	// 																		<input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
	// 																		<label for="inputPassword">Password</label>
	// 																	</div>

	// 																	<div class="custom-control custom-checkbox mb-3">
	// 																		<input type="checkbox" class="custom-control-input" id="customCheck1"/>
	// 																		<label class="custom-control-label" for="customCheck1">Remember password</label>
	// 																	</div>
	// 																	<button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
	// 																	<hr class="my-4"/>
	// 																	<button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
	// 																	<button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
	// 																</form>
	// 															</div>
	// 														</div>
	// 													</div>
	// 												</div>
	// 											</div>
					
					
	// 			</div>
	// 		);
	// 	} else {
	// 		return (
	// 			<div className="">
	// 				<button className="" onClick={this.switching}>
	// 					Are you a Owner?
	// 				</button>
	// 				<form onSubmit={this.handleClickGroomer}>
	// 					<br />
	// 					<input
	// 					className="lo"
	// 						type="text"
	// 						value={this.state.username}
	// 						name="username"
	// 						placeholder="Groomer Username"
	// 						onChange={this.handleInputChange}
	// 					/>{' '}
	// 					<br />
	// 					<input
	// 					className="lo"
	// 						type="password"
	// 						value={this.state.password}
	// 						name="password"
	// 						placeholder="Groomer Password"
	// 						onChange={this.handleInputChange}
	// 					/>{' '}
	// 					<br />
	// 					<button onClick={(e) => this.handleClickGroomer(e)}>Login</button>
	// 				</form>
					
	// 			</div>
	// 		);
	// 	}
	// };
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
			.post('https://spaws.herokuapp.com/auth/loginUser', {
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
				<Footer></Footer>
			</div>
		);
	}
}
