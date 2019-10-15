import React, { Component } from 'react';
import api from '../../api'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      address: '',
      groomer: false,
      petName: '',
      petBreed: '',
      petWeight: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      profilepicture: this.state.pfp,
      about: this.state.about,
      phone: this.state.phone,
      address: this.state.address,
      petName: this.state.petName,
      petBreed: this.state.petBreed,
      petWeight: this.state.petWeight
    }
    api
      .signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push('/') // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
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
    })

  }

  editPet = () => {
    return (
      <div className="edit-pet">
        <form>
          <input onChange={this.handleInputChange} type="text" name="petName" placeholder="Pet's Name" />
          <input onChange={this.handleInputChange} type="text" name="petBreed" placeholder="Pet's Breed" />
          <input onChange={this.handleInputChange} type="text" name="petWeight" placeholder="Pet's Weight" />
          <br></br>
          <button>Submit</button>
        </form>
        <button onClick={this.showEditPet}>back</button>
      </div>
    )
  }

  petInfo = () => {
    return (
      <div className="petInfo">
        {this.state.showEdit ?
          this.editPet()
          :
          <div>
            <h3>Pet Name</h3>
            {/* this.state.petName */}
            <h2>Pet Breed</h2>
            {/* this.state.petBreed */}
            <h4>Pet weight</h4>
            {/* this.state.petWeight */}
            <button onClick={this.showEditPet}>edit info</button>
          </div>
        }
      </div>
    );
  };
  //SHOW EDIT PET AND SETTINGS BOX ^

  // USER SWTTINGS BOX SWITCH v
  showUser = () => {
    let userShow = !this.state.userSettings;
    this.setState({
      userSettings: userShow
    });

  };

  editUser = () => {
    return (
      <div className="edit-pet">
        <form>
          <input onChange={this.handleInputChange} type="text" name="username" placeholder="User's Username" />
          <input onChange={this.handleInputChange} type="text" name="firstName" placeholder="User's First Name" />
          <input onChange={this.handleInputChange} type="text" name="lastName" placeholder="User's Last Name" />
          <input onChange={this.handleInputChange} type="text" name="address" placeholder="User's Address" />
          <input onChange={this.handleInputChange} type="text" name="phoneNumber" placeholder="User's Phone Number" />
          <br></br>
          <button>Submit</button>
        </form>
        <button onClick={this.showEditPet}>back</button>
      </div>
    )
  }

  userInfo = () => {
    return (
      <div className="userInfo">
        {this.state.showEdit ?
          this.editUser()
          :
          <div>
            <h3>User Name</h3>
            {/* this.state.username */}
            <h2>Address</h2>
            {/* this.state.address */}
            <h4>Phone number</h4>
            {/* this.state.phone */}
            <h5>Dog drop down</h5>
            {/* this.state.petName */}
            <button onClick={this.showEditPet}>edit info</button>
          </div>
        }
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
                <h5 className="card-title">User Name</h5>
                {/* this.state.username */}
                <p className="card-text">User preferred address.</p>
                {/* this.state.address */}
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
          <div className="col-md-6">
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
                      Jose , Free grooming at petsmart monday the 17th all day , www.petsmart.com
											<hr />
                    </li>
                    <li>
                      Santa , Dog day care special rate next week 50% off , www.doggydaycare.com
											<hr />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
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
