import React, { Component } from 'react';
import api from '../../api';
import axios from 'axios';
import GoogleMap from '../GoogleMap'
import Footer from '../Footer'

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			firstName: '',
			lastName: '',
			address: '',
			message: null,
			switch: true,
			phone: '',
			startTime: '',
			endTime: ''

		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentWillMount() {
		axios.get(`http://spaws-project.herokuapp.com/read/groomer/5da4d019f4a8a00239151614`).then((groomer) => {
			this.setState({
				groomer: groomer.data,
				username: this.state.username,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				address: this.state.address,
				message: null,
				switch: true,
				phone: this.state.phone,
				startTime: this.state.startTime,
				endTime: this.state.endTime
			});
		});
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleClick(e) {
		e.preventDefault();
		let data = {
			username: this.state.username,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			address: this.state.address,
			message: null,
			switch: true,
			phone: this.state.phone,
			startTime: this.state.startTime,
			endTime: this.state.endTime
		};
		api
			.signup(data)
			// CHANGE ROUTES
			.then(result => {
				console.log('SUCCESS!')
				this.props.history.push('/') // Redirect to the home page
			})
			.catch(err => this.setState({ message: err.toString() }))
	}

	switchBox = () => {
		let switching = !this.state.switch;
		this.setState({
			switch: switching
		});
		console.log('click', this.state.switch);
	};

	scheduleInfo = () => {
		return (
			<div className="all-apt">
				<h2 className="td-apt-sch">Today's Schedule</h2>
				<div className="list">
					<ul>
						<li>User's Name, User's address, User's Phone, Time of Appointment</li>
						<hr />
						<li>User's Name, User's address, User's Phone, Time of Appointment</li>
						<hr />
						<li>User's Name, User's address, User's Phone, Time of Appointment</li>
						<hr />
						<li>User's Name, User's address, User's Phone, Time of Appointment</li>
						<hr />
						<li>User's Name, User's address, User's Phone, Time of Appointment</li>
						<hr />
						<li>User's Name, User's address, User's Phone, Time of Appointment</li>
					</ul>
				</div>
			</div>
		);
	};

	settingsInfo = () => {
		return (
			<div className="all">
				<h2 className="td-apt-set">Settings</h2>
				<form className="all-settings">
					<input
						type="text"
						name="username"
						placeholder="Groomer's Username"
						onChange={this.handleInputChange}
					/>
					<input
						type="text"
						name="firstname"
						placeholder="Groomer's First Name"
						onChange={this.handleInputChange}
					/>
					<input
						type="text"
						name="lastname"
						placeholder="Groomer's Last Name"
						onChange={this.handleInputChange}
					/>
					<input
						type="text"
						name="address"
						placeholder="Groomer's Address"
						onChange={this.handleInputChange}
					/>
					<input
						type="text"
						name="phone"
						placeholder="Groomer's Phone Number"
						onChange={this.handleInputChange}
					/>
					{/* <input type="text" name="phone" placeholder="Groomer's radius" value={this.state.groomer.} /> */}
					<br />
					<label>From</label>
					<select name="startTime" id="start-hours" onChange={this.handleInputChange}>
						<option>8:00 am</option>
						<option>9:00 am</option>
						<option>10:00 am</option>
						<option>11:00 am</option>
						<option>12:00 pm</option>
						<option>1:00 pm</option>
						<option>2:00 pm</option>
						<option>3:00 pm</option>
						<option>4:00 pm</option>
						<option>5:00 pm</option>
						<option>6:00 pm</option>
					</select>
					<label>To</label>
					<select name="endTime" id="end-hours" onChange={this.handleInputChange}>
						<option>8:00 am</option>
						<option>9:00 am</option>
						<option>10:00 am</option>
						<option>11:00 am</option>
						<option>12:00 pm</option>
						<option>1:00 pm</option>
						<option>2:00 pm</option>
						<option>3:00 pm</option>
						<option>4:00 pm</option>
						<option>5:00 pm</option>
						<option>6:00 pm</option>
					</select>
					<br />
					<br />
					<button>Submit</button>
				</form>
			</div>
		);
	};
	//REPLACE
	render() {
		if (!this.state.groomer) {
			return <div>Loading</div>;
		}
		return (
			<div className="groomer-db">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="next-apt">
								<h2>Up Next</h2>
								<p>User Name</p>
								<p>User Phone</p>
								<p>Next Address</p>
							</div>
							<div className="mod-box">
								{this.state.switch ? this.scheduleInfo() : this.settingsInfo()}
							</div>
						</div>
						<div className="col-md-6">
							<div className="map">
								<GoogleMap></GoogleMap>
								<h2>Google Map</h2>

							</div>
							<div className="settings-box">
								{this.state.switch ? (
									<button onClick={this.switchBox}>Settings</button>
								) : (
										<button onClick={this.switchBox}>Schedule</button>
									)}
							</div>
						</div>

					</div>

				</div>
				<Footer></Footer>
			</div>
		);
	}
}
