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

		console.log("++++++++++++++", this.props);

		this.setState({
			username: this.props.user.username,
			petSettings: this.props.user.petSettings,
			userSettings: this.props.user.userSettings,
			showEdit: this.props.user.showEdit,
			password: this.props.user.password,
			message: this.props.user.message,
			firstName: this.props.user.firstName,
			lastName: this.props.user.lastName,
			profilepicture: this.props.user.profilepicture,
			about: this.props.user.about,
			phoneNumber: this.props.user.phoneNumber,
			address: this.props.user.address,
			groomer: this.props.user.groomer,
			petName: this.props.user.petName,
			petBreed: this.props.user.petBreed,
			petWeight: this.props.user.petWeight,
			dogs: this.props.user.dogs
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
			username: this.props.user.username,
			firstName: this.props.user.firstName,
			lastName: this.props.user.lastName,
			phone: this.props.user.phone,
			address: this.props.user.address,
			email: this.props.user.email,
			password: this.props.user.password,
			username: this.props.user.username,
			firstName: this.props.user.firstName,
			lastName: this.props.user.lastName,
			phone: this.props.user.phone,
			address: this.props.user.address,
			profilepicture: this.props.user.pfp,
			about: this.props.user.about,
			username: this.props.user.username,
			firstName: this.props.user.firstName,
			lastName: this.props.user.lastName,
			phone: this.props.user.phoneNumber,
			address: this.props.user.address,
			petName: this.props.user.petName,
			petBreed: this.props.user.petBreed,
			petWeight: this.props.user.petWeight
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
		axios.post(`http://localhost:5000/update/dog/5da5ebb4f4a8a002391516ba`).then((user) => {

		});
	};

	editPet = () => {
		console.log('_+_+_+_+_+_+_+_+', this.state.dogs);
		const pets = this.props.user.dogs.map((pets, i) => (
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
		const dogsInfo = this.props.user.dogs.map((eachDog, j) => (
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
		return dogsInfo;
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
			username: `${this.props.user.username}`,
			firstName: `${this.props.user.firstName}`,
			lastName: `${this.props.user.lastName}`,
			phoneNumber: `${this.props.user.phoneNumber}`,
			address: `${this.props.user.address}`,
			profilePic: `${this.props.user.profilePic}`,
			email: `${this.props.user.email}`
		};

		axios.post('http://localhost:5000/update/user/', data).then((data) => {
			console.log("AXIOS POST HOME>JS", data);
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
						placeholder={this.props.user.username}
					/>
					<input
						onChange={this.handleInputChange}
						type="text"
						name="firstName"
						placeholder={this.props.user.firstName}
					/>
					<input
						onChange={this.handleInputChange}
						type="text"
						name="lastName"
						placeholder={this.props.user.lastName}
					/>
					<input
						onChange={this.handleInputChange}
						type="text"
						name="address"
						placeholder={this.props.user.address}
					/>
					<input
						onChange={this.handleInputChange}
						type="text"
						name="phoneNumber"
						placeholder={this.props.user.phoneNumber}
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
								{this.props.user.firstName} {this.props.user.lastName}
							</h3>
							{/* {this.props.user.user.firstName}{this.props.user.user.lastName} */}
							<h2>{this.props.user.address}</h2>
							{/* this.props.user.address */}
							<h4>{this.props.user.phoneNumber}</h4>
							{/* this.props.user.phone */}
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
		console.log("_+_+_+_+_+_+_+_+_+_+_+_", this.props.user);
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
									<p className="card-title">{this.props.user.username}</p>

									<h5 className="card-text">{this.props.user.address}</h5>
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
         {/* <p></p> */}
          
				</div>
       
		
		);
	}
}
