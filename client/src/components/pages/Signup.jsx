import React, { Component, Fragment } from 'react'
import api from '../../api'


export default class Signup extends Component {

  //CHANGE MODEL
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      message: null,
      firstName: '',
      lastName: '',
      profilepicture: '',
      about: '',
      phone: '',
      address: '',
      groomer: false
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
  //UNCOMMENT hancleClick WHEN ROUTING
  signupOne = () => {
    return (
      <Fragment>
        <div className="pet-owner">
          <h1 className="page-header">Sign Up Now!</h1>
          <button onClick={this.groomerOrUser}>Are you a Pet Groomer?</button>
          <div className="form-container">
            <form>
              <input id='step2' type='checkbox' />
              <input id='step3' type='checkbox' />
              <input id='step4' type='checkbox' />

              <div id="part1" className="form-group">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Owner User info</h3>
                  </div>
                  <input onChange={this.handleInputChange} type="text" name="owner-username" className="form-control" placeholder="Username" aria-describedby="sizing-addon1" />
                  <input onChange={this.handleInputChange} type="password" name="owner-password" className="form-control" placeholder="password" aria-describedby="sizing-addon1" />
                  <div className="btn-group btn-group-lg" role="group" aria-label="...">
                    <label htmlFor='step2' id="continue-step2" className="continue">
                      <div
                        // onClick={e => this.handleClick(e)} 
                        className="btn btn-default btn-success btn-lg">Continue</div>
                    </label>
                  </div>
                </div>
              </div>

              <div id="part2" className="form-group">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Owner Personal Info</h3>
                  </div>
                  <input onChange={this.handleInputChange} type="email" name="owner-email" className="form-control" placeholder="Email" />
                  <input onChange={this.handleInputChange} type="phone" name="owner-phone" className="form-control" placeholder="Phone" />
                  <input onChange={this.handleInputChange} type="text" name="owner-address" className="form-control" placeholder="Address" />
                  <div className="btn-group btn-group-lg btn-group-justified" role="group" aria-label="...">

                    <label htmlFor='step2' id="back-step2" className="back">
                      <div className="btn btn-default btn-primary btn-lg" role="button">Back</div>
                    </label>


                    <label htmlFor='step3' id="continue-step3" className="continue">
                      <div
                        // onClick={e => this.handleClick(e)}
                        className="btn btn-default btn-success btn-lg" role="button">Continue</div>
                    </label>

                  </div>
                </div>
              </div>

              <div id="part3" className="form-group">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Owner Full Name</h3>
                  </div>
                  <input onChange={this.handleInputChange} type="text" name="firstname" className="form-control" placeholder="FirstName" />
                  <input onChange={this.handleInputChange} type="text" name="lastname" className="form-control" placeholder="LastName" />
                  <div className="btn-group btn-group-lg" role="group" aria-label="...">

                    <label htmlFor='step3' id="back-step3" className="back">
                      <div className="btn btn-default btn-success btn-lg">Back</div>
                    </label>

                    <label htmlFor='step4' id="continue-step4" className="continue">
                      <div
                        // onClick={e => this.handleClick(e)}
                        className="btn btn-default btn-success btn-lg" role="button">Continue</div>
                    </label>

                  </div>
                </div>
              </div>

              <div id="part4" className="form-group">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Profile Picture</h3>
                  </div>
                  <input onChange={this.handleInputChange} type="text" name="PFP" className="form-control" placeholder="Profile Picture"></input>
                  {/* IMAGE UPLOAD TO BE ADDED */}
                  <div className="btn-group btn-group-lg" role="group" aria-label="...">
                    <label htmlFor='step4' id="back-step4" className="back">
                      <div className="btn btn-default btn-primary btn-lg">Back</div>
                    </label>
                    <label className="continue">
                      <button type="submit" className="btn btn-default btn-success btn-lg">Submit</button>
                    </label>
                  </div>
                </div>
              </div>
            </form>
            {this.state.message && (
              <div className="info info-danger">{this.state.message}</div>
            )}
          </div>
        </div>
      </Fragment>
    )
  }
  signupGroomer = () => {
    return (
      <Fragment>
        <div className="pet-groomer">
          <h1 className="page-header">Sign Up Now!</h1>
          <button onClick={this.groomerOrUser}>Are you a Pet Owner?</button>
          <div className="form-container">
            <form>
              <input id='step2' type='checkbox' />
              <input id='step3' type='checkbox' />
              <input id='step4' type='checkbox' />

              <div id="part1" className="form-group">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Groomer User Info</h3>
                  </div>
                  <input onChange={this.handleInputChange} type="text" name="username" className="form-control" placeholder="Username" aria-describedby="sizing-addon1" />
                  <input onChange={this.handleInputChange} type="password" name="password" className="form-control" placeholder="password" aria-describedby="sizing-addon1" />
                  <div className="btn-group btn-group-lg" role="group" aria-label="...">
                    <label htmlFor='step2' id="continue-step2" className="continue">
                      <div
                        onClick={e => this.handleClick(e)}
                        className="btn btn-default btn-success btn-lg">Continue</div>
                    </label>
                  </div>
                </div>
              </div>

              <div id="part2" className="form-group">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Groomer Personal Info</h3>
                  </div>
                  <input onChange={this.handleInputChange} type="email" name="email" className="form-control" placeholder="Email" />
                  <input onChange={this.handleInputChange} type="phone" name="phone" className="form-control" placeholder="Phone" />
                  <input onChange={this.handleInputChange} type="text" name="address" className="form-control" placeholder="Address" />
                  <div className="btn-group btn-group-lg btn-group-justified" role="group" aria-label="...">

                    <label htmlFor='step2' id="back-step2" className="back">
                      <div className="btn btn-default btn-primary btn-lg" role="button">Back</div>
                    </label>


                    <label htmlFor='step3' id="continue-step3" className="continue">
                      <div
                        // onClick={e => this.handleClick(e)}
                        className="btn btn-default btn-success btn-lg" role="button">Continue</div>
                    </label>

                  </div>
                </div>
              </div>

              <div id="part3" className="form-group">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Groomer Full Name</h3>
                  </div>
                  <input onChange={this.handleInputChange} type="text" name="firstname" className="form-control" placeholder="FirstName" />
                  <input onChange={this.handleInputChange} type="text" name="lastname" className="form-control" placeholder="LastName" />
                  <div className="btn-group btn-group-lg" role="group" aria-label="...">

                    <label htmlFor='step3' id="back-step3" className="back">
                      <div className="btn btn-default btn-success btn-lg">Back</div>
                    </label>

                    <label htmlFor='step4' id="continue-step4" className="continue">
                      <div
                        // onClick={e => this.handleClick(e)}
                        className="btn btn-default btn-success btn-lg" role="button">Continue</div>
                    </label>

                  </div>
                </div>
              </div>

              <div id="part4" className="form-group">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">Groomer Bio</h3>
                  </div>
                  <textarea onChange={this.handleInputChange} name="message" className="form-control" placeholder="About You..."></textarea>
                  {/* IMAGE UPLOAD TO BE ADDED */}
                  <div className="btn-group btn-group-lg" role="group" aria-label="...">
                    <label htmlFor='step4' id="back-step4" className="back">
                      <div className="btn btn-default btn-primary btn-lg">Back</div>
                    </label>
                    <label className="continue">
                      <button
                        // onClick={e => this.handleClick(e)}
                        type="submit" className="btn btn-default btn-success btn-lg">Submit</button>
                    </label>
                  </div>
                </div>
              </div>
            </form>
            {this.state.message && (
              <div className="info info-danger">{this.state.message}</div>
            )}
          </div>
        </div>

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
    console.log(this.state, this.handleClick)
    return (
      <div className="Signup">
        <div className="container-contact100">
          <div className="wrap-contact100">


            {
              this.state.groomer ?
                this.signupGroomer()
                :
                this.signupOne()
            }





          </div>
        </div>
      </div>
    )
  }
}
