import React, { Component } from 'react'
import api from '../../api'

export default class AddCountry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      capitals: '',
      area: '',
      description: '',
      message: null,
      switch: true,
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
    console.log(this.state.name, this.state.description)
    let data = {
      name: this.state.name,
      capitals: this.state.capitals,
      area: this.state.area,
      description: this.state.description,
    }
    api
      .addCountry(data)
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
          name: '',
          capitals: '',
          area: '',
          description: '',
          message: `Your country '${this.state.name}' has been created`,
        })
        setTimeout(() => {
          this.setState({
            message: null,
          })
        }, 2000)
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  switchBox = () => {
    let switching = !this.state.switch;
    this.setState({
      switch: switching
    })
    console.log("click", this.state.switch)
  }

  scheduleInfo = () => {
    return (
      <div className="all-apt">
        <h2 className="td-apt-sch">Today's Schedule</h2>
        <div className="list">
          <ul>
            <li>User's Name, User's address, User's Phone, Time of Appointment</li>
            <hr></hr>
            <li>User's Name, User's address, User's Phone, Time of Appointment</li>
            <hr></hr>
            <li>User's Name, User's address, User's Phone, Time of Appointment</li>
            <hr></hr>
            <li>User's Name, User's address, User's Phone, Time of Appointment</li>
            <hr></hr>
            <li>User's Name, User's address, User's Phone, Time of Appointment</li>
            <hr></hr>
            <li>User's Name, User's address, User's Phone, Time of Appointment</li>
          </ul>
        </div>
      </div>
    )
  }

  settingsInfo = () => {
    return (
      <div className="all">
        <h2 className="td-apt-set">Settings</h2>
        <form className="all-settings">
          <input type="text" name="username" placeholder="Groomer's Username" />
          <input type="text" name="firstname" placeholder="Groomer's First Name" />
          <input type="text" name="lastname" placeholder="Groomer's Last Name" />
          <input type="text" name="address" placeholder="Groomer's Address" />
          <input type="text" name="phone" placeholder="Groomer's Phone Number" />
          <input type="text" name="phone" placeholder="Groomer's radius" />
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
          <button>Submit</button>
        </form>
      </div>
    )
  }


  render() {
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
                {
                  this.state.switch ? this.scheduleInfo() : this.settingsInfo()
                }
              </div>
            </div>
            <div className="col-md-6">
              <div className="map">
                <h2>Google Map</h2>
              </div>
              <div className="settings-box">
                <h2 onClick={this.switchBox}>Settings</h2> <h2 onClick={this.switchBox} >Schedule</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
