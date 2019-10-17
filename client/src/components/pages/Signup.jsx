import React, { Component, Fragment } from 'react';
import api from '../../api';
import axios from 'axios';
import Images from '../Images';
import Footer from '../Footer'


export default class Signup extends Component {
  //CHANGE MODEL

  state = {
    email: '',
    username: '',
    password: '',
    message: null,
    firstName: '',
    lastName: '',
    profilePic: '',
    about: '',
    startingTime: '',
    endTime: '',
    phone: '',
    address: '',
    groomer: false,
  };



  saveNewThing(newThing) {
    // //console.log('new thing is: ', newThing)
    return axios.post('http://localhost:5000/create/user', newThing)
      .then(res => res.data)
      .catch();
  };


  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    //console.log(this.state);
    let data = {
      username: this.state.username,

      email: this.state.email,

      password: this.state.password,

      firstName: this.state.firstName,

      lastName: this.state.lastName,

      profilePic: this.state.profilePic,

      phoneNumber: this.state.phone,

      address: this.state.address
    };
    axios
      .post('http://localhost:5000/create/user', data)
      .then((user) => {
        console.log(user);
        this.props.setUser(user.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleClickGroomer = (e) => {
    e.preventDefault();
    console.log(this.state);
    let data = {
      username: this.state.username,

      email: this.state.email,

      password: this.state.password,

      firstName: this.state.firstName,

      lastName: this.state.lastName,

      profilePic: this.state.profilePic,

      phoneNumber: this.state.phone,

      address: this.state.address,

      about: this.state.about,

      startingTime: this.state.startingTime,

      endTime: this.state.endTime,

      profilePic: this.state.profilePic,
    };
    axios
      .post('http://localhost:5000/create/groomer', data)
      .then((groomer) => {
        console.log(groomer);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //RENDERS FIRST SIGN UP SLIDE
  //UNCOMMENT hancleClick WHEN ROUTING
  signupOne = () => {
    return (
      <Fragment>
        {/* <div>
            <h2>New Thing</h2>
            <form onSubmit={e => this.handleSubmit(e)}>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={ this.state.name } 
                    onChange={ e => this.handleChange(e)} />
                <label>Description</label>
                <textarea 
                    type="text" 
                    name="description" 
                    value={ this.state.description } 
                    onChange={ e => this.handleChange(e)} />
                <input 
                    type="file" 
                    onChange={(e) => this.handleFileUpload(e)} /> 
                <button type="submit">Save new thing</button>
            </form>
          </div> */}
        <div className="pet-owner">
          <h1 className="page-header">Sign Up Now!</h1>
          <button onClick={this.groomerOrUser}>Are you a Pet Groomer?</button>
          <div className="form-container">
            <form onSubmit={this.handleClick}>
              <input id="step2" type="checkbox" />
              <input id="step3" type="checkbox" />
              <input id="step4" type="checkbox" />

              <div id="part1" className="form-group">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Owner User info</h3>
                  </div>
                  <input
                    onChange={this.handleInputChange}
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    aria-describedby="sizing-addon1"
                  />
                  <input
                    onChange={this.handleInputChange}
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="password"
                    aria-describedby="sizing-addon1"
                  />
                  <div className="btn-group btn-group-lg" role="group" aria-label="...">
                    <label htmlFor="step2" id="continue-step2" className="continue">
                      <div className="btn btn-default btn-success btn-lg">
                        {' '}

                        Continue
											</div>
                    </label>
                  </div>
                </div>
              </div>

              <div id="part2" className="form-group">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Owner Personal Info</h3>
                  </div>
                  <input
                    onChange={this.handleInputChange}
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <input
                    onChange={this.handleInputChange}
                    type="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Phone"
                  />
                  <input
                    onChange={this.handleInputChange}
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="Address"
                  />
                  <Images name="profilePic"></Images>
                  <div
                    className="btn-group btn-group-lg btn-group-justified"
                    role="group"
                    aria-label="..."
                  >
                    <label htmlFor="step2" id="back-step2" className="back">
                      <div className="btn btn-default btn-primary btn-lg" role="button">
                        Back
											</div>
                    </label>

                    <label htmlFor="step3" id="continue-step3" className="continue">
                      <div
                        // onClick={e => this.handleClick(e)}
                        className="btn btn-default btn-success btn-lg"
                        role="button"
                      >
                        Continue
											</div>
                    </label>
                  </div>
                </div>
              </div>

              <div id="part3" className="form-group">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Owner Full Name</h3>
                  </div>
                  <input
                    onChange={this.handleInputChange}
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="FirstName"
                  />
                  <input
                    onChange={this.handleInputChange}
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="LastName"
                  />
                  <div className="btn-group btn-group-lg" role="group" aria-label="...">
                    <label htmlFor="step3" id="back-step3" className="back">
                      <div className="btn btn-default btn-success btn-lg">Back</div>
                    </label>

                    <label htmlFor="step4" id="continue-step4" className="continue">
                      <div
                        // onClick={e => this.handleClick(e)}
                        className="btn btn-default btn-success btn-lg"
                        role="button"
                      >
                        Continue
											</div>
                    </label>
                  </div>
                </div>
              </div>

              <div id="part4" className="form-group">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Profile Picture</h3>
                  </div>
                  <input
                    onChange={this.handleInputChange}
                    type="text"
                    name="profilePic"
                    className="form-control"
                    placeholder="Profile Picture"
                  />
                  <div className="btn-group btn-group-lg" role="group" aria-label="...">
                    <label htmlFor="step4" id="back-step4" className="back">
                      <div className="btn btn-default btn-primary btn-lg">Back</div>
                    </label>
                    <label className="continue">
                      <button type="submit" className="btn btn-default btn-success btn-lg">
                        Submit
											</button>
                    </label>
                  </div>
                </div>
              </div>
            </form>
            
            {this.state.message && <div className="info info-danger">{this.state.message}</div>}
          </div>

        </div>
        <Footer></Footer>
      </Fragment>
    );
  };
  signupGroomer = () => {
    return (
      <Fragment>
        <div className="pet-groomer">
          <h1 className="page-header">Sign Up Now!</h1>
          <button onClick={this.groomerOrUser}>Are you a Pet Owner?</button>
          <div className="form-container">
            <form onSubmit={this.handleClickGroomer}>
              <input id="step2" type="checkbox" />
              <input id="step3" type="checkbox" />
              <input id="step4" type="checkbox" />

              <div id="part1" className="form-group">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Groomer User Info</h3>
                  </div>
                  <input
                    onChange={this.handleInputChange}
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    aria-describedby="sizing-addon1"
                  />
                  <input
                    onChange={this.handleInputChange}
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="password"
                    aria-describedby="sizing-addon1"
                  />
                  <div className="btn-group btn-group-lg" role="group" aria-label="...">
                    <label htmlFor="step2" id="continue-step2" className="continue">
                      <div
                        //	onClick={(e) => this.handleClick(e)}
                        className="btn btn-default btn-success btn-lg"
                      >
                        Continue
											</div>
                    </label>
                  </div>
                </div>
              </div>

              <div id="part2" className="form-group">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Groomer Personal Info</h3>
                  </div>
                  <input
                    onChange={this.handleInputChange}
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <input
                    onChange={this.handleInputChange}
                    type="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Phone"
                  />
                  <input
                    onChange={this.handleInputChange}
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="Address"
                  />
                  <div
                    className="btn-group btn-group-lg btn-group-justified"
                    role="group"
                    aria-label="..."
                  >
                    <label htmlFor="step2" id="back-step2" className="back">
                      <div className="btn btn-default btn-primary btn-lg" role="button">
                        Back
											</div>
                    </label>

                    <label htmlFor="step3" id="continue-step3" className="continue">
                      <div
                        // onClick={e => this.handleClick(e)}
                        className="btn btn-default btn-success btn-lg"
                        role="button"
                      >
                        Continue
											</div>
                    </label>
                  </div>
                </div>
              </div>

              <div id="part3" className="form-group">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Groomer Full Name</h3>
                  </div>
                  <input
                    onChange={this.handleInputChange}
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="FirstName"
                  />
                  <input
                    onChange={this.handleInputChange}
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="LastName"
                  />
                  <input
                    onChange={this.handleInputChange}
                    type="text"
                    name="profilePic"
                    className="form-control"
                    placeholder="profilepicture"
                  />
                  <div className="btn-group btn-group-lg" role="group" aria-label="...">
                    <label htmlFor="step3" id="back-step3" className="back">
                      <div className="btn btn-default btn-success btn-lg">Back</div>
                    </label>

                    <label htmlFor="step4" id="continue-step4" className="continue">
                      <div
                        // onClick={e => this.handleClick(e)}
                        className="btn btn-default btn-success btn-lg"
                        role="button"
                      >
                        Continue
											</div>
                    </label>
                  </div>
                </div>
              </div>

              <div id="part4" className="form-group">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Groomer Bio</h3>
                  </div>
                  <textarea
                    onChange={this.handleInputChange}
                    name="about"
                    className="form-control"
                    placeholder="About You..."
                  />
                  <label>From</label>
                  <select name="startingTime" id="start-hours" onChange={this.handleInputChange}>
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
                  {/* IMAGE UPLOAD TO BE ADDED */}
                  <div className="btn-group btn-group-lg" role="group" aria-label="...">
                    <label htmlFor="step4" id="back-step4" className="back">
                      <div className="btn btn-default btn-primary btn-lg">Back</div>
                    </label>
                    <label className="continue">
                      <button type="submit" className="btn btn-default btn-success btn-lg">
                        Submit
											</button>
                    </label>
                  </div>
                </div>
              </div>
            </form>
            {this.state.message && <div className="info info-danger">{this.state.message}</div>}
          </div>
         
        </div>

        {this.state.message && <div className="info info-danger">{this.state.message}</div>}
        
      </Fragment>
    );
  };

  showTwo = () => {
    let newshow = !this.state.show;
    this.setState({
      show: newshow
    });
    console.log('pushh', this.state.show, newshow);
  };

  showButton = () => {
    return <button onClick={this.showTwo}>next</button>;
  };

  groomerOrUser = () => {
    let notUser = !this.state.groomer;
    this.setState({
      groomer: notUser
    });
  };

  render() {
    //console.log("_+_+_+_+_+_+_+_+", this.state);
    //console.log(this.state, this.handleClick);
    return (
      <div className="Signup">
        <div className="container-contact100">
          <div className="wrap-contact100">
            {this.state.groomer ? this.signupGroomer() : this.signupOne()}
          </div>
        </div>
      </div>
    );
  }
}
