import React, { Component } from 'react';
import api from '../../api';
import axios from 'axios';
import Footer from '../Footer';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
			petSettings: false,
			userSettings: true,
			showEdit: false,
			username: '',
			password: '',
			message: null,
			firstName: '',
			lastName: '',
			profilepicture: '',
			about: '',
			phoneNumber: '',
			dogs: [],
			address: '',
			groomer: false,
			petName: '',
			petBreed: '',
			petWeight: '',
			isLoggedIn: true
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentDidMount() {
		axios.get(`http://localhost:5000/read/user/5d9f9c2e8afcf44f5676895b`).then((user) => {
			console.log(user.data);

			this.setState({
				username: user.data.username,
				petSettings: user.data.petSettings,
				userSettings: user.data.userSettings,
				showEdit: user.data.showEdit,
				password: user.data.password,
				message: user.data.message,
				firstName: user.data.firstName,
				lastName: user.data.lastName,
				profilepicture: user.data.profilepicture,
				about: user.data.about,
				phoneNumber: user.data.phoneNumber,
				address: user.data.address,
				groomer: user.data.groomer,
				petName: user.data.petName,
				petBreed: user.data.petBreed,
				petWeight: user.data.petWeight,
				dogs: user.data.dogs
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
			phone: this.state.phone,
			address: this.state.address,
			email: this.state.email,
			password: this.state.password,
			username: this.state.username,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			phone: this.state.phone,
			address: this.state.address,
			profilepicture: this.state.pfp,
			about: this.state.about,
			username: this.state.username,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			phone: this.state.phoneNumber,
			address: this.state.address,
			petName: this.state.petName,
			petBreed: this.state.petBreed,
			petWeight: this.state.petWeight
		};
		api
			.signup(data)
			.then((result) => {
				console.log('SUCCESS!');
				this.props.history.push('/'); // Redirect to the home page
			})
			.catch((err) => this.setState({ message: err.toString() }));
	}

	//SHOW EDIT PET AND SETTINGS BOX v
	showPet = () => {
		let petShow = !this.state.petSettings;
		this.setState({
			petSettings: petShow
		});
	};

	showEditPet = () => {
		let showTheEdit = !this.state.showEdit;
		this.setState({
			showEdit: showTheEdit
		});
	};

	updateDog = () => {
		axios.post(`http://localhost:5000/update/user/5da5ebb4f4a8a002391516ba`).then((user) => {
			console.log(user.data);
			this.setState({
				petName: user.data.petName,
				petBreed: user.data.petBreed,
				petWeight: user.data.petWeight
			});
		});
	};

	editPet = () => {
		console.log('_+_+_+_+_+_+_+_+', this.state.dogs);
		const pets = this.state.dogs.map(
			(pets, i) => (
				//return (
				<div key={i} className="edit-pet">
					<form onSubmit={this.updateDog}>
						<input
							onChange={this.handleInputChange}
							type="text"
							name="petName"
							placeholder={pets.name ? pets.name : 'Pet Name'}
						/>
						<input
							onChange={this.handleInputChange}
							type="text"
							name="petBreed"
							placeholder={pets.breed ? pets.breed : 'Pet Breed'}
						/>
						<input
							onChange={this.handleInputChange}
							type="text"
							name="petWeight"
							placeholder={pets.size ? pets.size : 'Pet Weight'}
						/>
						<br />
						<button>Submit</button>
					</form>
					<button onClick={this.showEditPet}>back</button>
				</div>
			)
			// )
		);
		return pets;
	};

	dogInfo = () => {
		console.log(')()()()()()()()()(');
		const dogs = this.state.dogs.map((eachDog, j) => (
			<div key={j}>
				<h3>{eachDog.name}</h3>
				{/* this.state.petName */}
				<h2>{eachDog.breed}</h2>
				{/* this.state.petBreed */}
				<h4>{eachDog.size}</h4>
				{/* this.state.petWeight */}
				<button onClick={this.showEditPet}>edit info</button>
			</div>
		));
		return dogs;
	};

	petInfo = () => {
		return <div className="petInfo">{this.state.showEdit ? this.editPet() : this.dogInfo()}</div>;
	};

	//SHOW EDIT PET AND SETTINGS BOX ^

	// USER SWTTINGS BOX SWITCH v
	updateUser = (event) => {
		event.preventDefault();
		let data = {
			userID: '5d9f9c2e8afcf44f5676895b',
			username: `${this.state.username}`,
			firstName: `${this.state.firstName}`,
			lastName: `${this.state.lastName}`,
			phoneNumber: `${this.state.phoneNumber}`,
			address: `${this.state.address}`,
			profilePic: `${this.state.profilePic}`,
			email: `${this.state.email}`
		};

		axios.post('http://localhost:5000/update/user/', data).then((data) => {
			console.log(data);
		});

		// .post('http://localhost:5000/update/user', {
		//   userID: "5d9f9c2e8afcf44f5676895b",
		//   username: this.state.username,
		//   firstName: this.state.firstName,
		//   lastName: this.state.lastName,
		//   address: this.state.address,
		//   phoneNumber: this.state.phoneNumber,
		// })
		// .then((user) => {
		//   console.log(user);
		// })
		// .catch((error) => {
		//   console.log(error);
		// });
		// axios({
		//   method: 'post',
		//   url: 'http://localhost:5000/update/user/',
		//   data: {
		//     userID: "5d9f9c2e8afcf44f5676895b",
		//     username: this.state.username,
		//     firstName: this.state.firstName,
		//     lastName: this.state.lastName,
		//     address: this.state.address,
		//     phoneNumber: this.state.phoneNumber,
		//   }
		// });
	};

	showUser = () => {
		let userShow = !this.state.userSettings;
		this.setState({
			userSettings: userShow
		});
	};

	editUser = () => {
		return (
			<div className="edit-pet">
				<form onSubmit={this.updateUser}>
					<input
						onChange={this.handleInputChange}
						type="text"
						name="username"
						placeholder={this.state.username}
					/>
					<input
						onChange={this.handleInputChange}
						type="text"
						name="firstName"
						placeholder={this.state.firstName}
					/>
					<input
						onChange={this.handleInputChange}
						type="text"
						name="lastName"
						placeholder={this.state.lastName}
					/>
					<input
						onChange={this.handleInputChange}
						type="text"
						name="address"
						placeholder={this.state.address}
					/>
					<input
						onChange={this.handleInputChange}
						type="text"
						name="phoneNumber"
						placeholder={this.state.phoneNumber}
					/>
					<br />
					<input type="submit" name="submit" />
				</form>
				<button onClick={this.showEditPet}>back</button>
        
			</div>
		);
	};

	userInfo = () => {
		return (
			<div className="userInfo">
				{this.state.showEdit ? (
					this.editUser()
				) : (
					<div>
						<h3>
							{this.state.firstName} {this.state.lastName}
						</h3>
						{/* {this.state.user.firstName}{this.state.user.lastName} */}
						<h2>{this.state.address}</h2>
						{/* this.state.address */}
						<h4>{this.state.phoneNumber}</h4>
						{/* this.state.phone */}
						<h5 />
						{/* this.state.petName */}
						<button onClick={this.showEditPet}>edit info</button>
					</div>
				)}
			</div>
		);
	};
	// USER SWTTINGS BOX SWITCH ^

	// SWITCHES SETTINGS BOX v
	switchSettings = () => {
		return (
			<p onClick={this.showUser} className="card-link">
				<button className="settings-button">User Settings</button>
			</p>
		);
	};
	switchSettings2 = () => {
		return (
			<p onClick={this.showUser} className="card-link">
				<button>Pet Settings</button>
			</p>
		);
	};
	// SWITCHES SETTINGS BOX ^

	render() {
		// console.log("_+_+_+_+_+_+_+_+", this.state.dogs[0]);

		return (
	
				<div className="Home">
					<div className="">
						<div className="col-md-3 ">
							{/* USER PROFILE CARD */}

							<div className="card">
								<div className="avatar-flip">
									<img
										src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg"
										alt=""
										height="150"
										width="150"
									/>
									<img
										src="https://s3-media1.fl.yelpcdn.com/bphoto/8brydl3V-sxA3i58-xx9tw/o.jpg"
										alt=""
										height="150"
										width="150"
									/>
								</div>
								<div className="card-body">
									<p className="card-title">{this.state.username}</p>

									<h5 className="card-text">{this.state.address}</h5>
								</div>
								<div className="card-body">
									{this.state.petSettings || this.state.userSettings ? (
										this.switchSettings()
									) : (
										this.switchSettings2()
									)}
								</div>
							</div>
						</div>
						<div className="">
							{/* GEO LIST + EVENTS */}

							<div>
								<div className="roww">
									<h2>Groomers near you!</h2>
									<div className="col">
										<ul>
											<li>
												Username , Distance , Rate
												<hr />
											</li>
											<li>
												Christian , 10mi , 40$/hr
												<hr />
											</li>
											<li>
												Jose , 7mi , 50$/hr
												<hr />
											</li>
											<li>
												Santa , 2000mi , 1,000$/hr
												<hr />
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* <div className="container"> */}
							<div className="hold-down">
								<div className="roww ">
									<h2>Events in Miami</h2>
									<div className="col">
										<ul>
											<li>
												Username , Content , Link
												<hr />
											</li>
											<li>
												Christian , Dog park party at 7pm at hyde park , www.aspca.com
												<hr />
											</li>
											<li>
												Jose , Free grooming at petsmart monday the 17th all day ,
												www.petsmart.com
												<hr />
											</li>
											<li>
												Santa , Dog day care special rate next week 50% off ,
												www.doggydaycare.com
												<hr />
											</li>
										</ul>
									</div>
                  
								</div>
                <div className="Home"><Footer></Footer></div>
							</div>
             
						</div>
            
						<div className="set">
							<div className="settings-box">
								<div>
									<h1>Settings</h1>
								</div>
								{this.state.petSettings || this.state.userSettings ? this.petInfo() : this.userInfo()}
							</div>
             
						</div>
            
					</div>
         
          
				</div>
       
		
		);
	}
}
