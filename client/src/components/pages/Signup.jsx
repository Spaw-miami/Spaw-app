import React, { Component, Fragment } from 'react'
import api from '../../api'

export default class Signup extends Component {

  //CHANGE MODEL
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      name: '',
      password: '',
      message: null,
      firstName: '',
      lastName: '',
      profilepicture: '',
      phone: '',
      address: '',
      show: true,
      groomer: true
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
      phone: this.state.phone,
      address: this.state.address,
    }
    api
      .signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push('/') // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  //RENDERS FIRST SIGN UP SLIDE
  signupOne = () => {
    return (
      <Fragment>
        <h2>Pet Owner Signup</h2>
        <button onClick={this.groomerOrUser}>Are you a Pet Groomer?</button>
        <form>
          Username:{' '}
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          E-mail:{' '}
          <input
            type="email"
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          Password:{' '}
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          First name:{' '}
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          Last name:{' '}
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          Profile picture:{' '}
          <input
            type="text"
            value={this.state.pfp}
            name="profile_picture"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          Phone number:{' '}
          <input
            type="text"
            value={this.state.phone}
            name="phone"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          Address:{' '}
          <input
            type="text"
            value={this.state.address}
            name="address"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          <button onClick={e => this.handleClick(e)}>Signup</button>
        </form>

        {this.state.message && (
          <div className="info info-danger">{this.state.message}</div>
        )}
      </Fragment>
    )
  }
  signupGroomer = () => {
    return (
      <Fragment>
        <h2>Pet Groomer Signup</h2>
        <button onClick={this.groomerOrUser}>Are you a Pet Owner?</button>
        <form>
          Username:{' '}
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          E-mail:{' '}
          <input
            type="email"
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          Password:{' '}
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          First name:{' '}
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          Last name:{' '}
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          Profile picture:{' '}
          <input
            type="text"
            value={this.state.pfp}
            name="profile_picture"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          Phone number:{' '}
          <input
            type="text"
            value={this.state.phone}
            name="phone"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          Address:{' '}
          <input
            type="text"
            value={this.state.address}
            name="address"
            onChange={this.handleInputChange}
          />{' '}
          <br />
          Daily Hours:
          <br></br>
          <label>From</label>
          <select id="start-hours">
            <option>9:00 am</option>
            <option>8:00 am</option>
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
          <select id="end-hours">
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
          <br></br>
          <br></br>
          <button onClick={e => this.handleClick(e)}>Signup</button>
        </form>

        {this.state.message && (
          <div className="info info-danger">{this.state.message}</div>
        )}
      </Fragment>
    )
  }

  showTwo = () => {
    let newshow = !this.state.show;
    this.setState({
      show: newshow
    })
    console.log("pushh", this.state.show, newshow)
  }

  showButton = () => {
    return (
      <button onClick={this.showTwo}>next</button>
    )
  }

  groomerOrUser = () => {

    let notUser = !this.state.groomer;
    this.setState({
      groomer: notUser
    })
  }

  render() {
    return (
      <div className="Signup">




        {
          this.state.groomer ?
            this.signupOne()
            :
            this.signupGroomer()
        }







      </div>
    )
  }
}
