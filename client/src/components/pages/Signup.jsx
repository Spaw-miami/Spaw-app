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
      show: true
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
        <h2>Signup</h2>
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
          {this.state.show ?
            <br></br>
            :
            this.signupTwo()
          }
        </form>
        <button onClick={this.showTwo}>next</button>
        {this.state.message && (
          <div className="info info-danger">{this.state.message}</div>
        )}
      </Fragment>
    )
  }
  //RENDERS AFTER COMPLETING FORM 1
  signupTwo = () => {
    return (
      <Fragment>
        <h2>Add more info</h2>
        <form>
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

  showTwo = () => {
    let newshow = !this.state.show
    this.setState({
      show: newshow
    })
    console.log("pushh", this.state.show, newshow)
  }


  render() {
    return (
      <div className="Signup">

        {this.signupOne()}




      </div>
    )
  }
}
