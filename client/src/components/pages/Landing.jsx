import React, { Component } from 'react'
import api from '../../api'
import Signup from './Signup'
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Footer from '../Footer'

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
    }
  }
  render() {
    return (
<div>
   <div className="">
      <div className="">
      <div class="container">
        <div class="row">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>
            {/* <!-- Wrapper for slides --> */}
            <div class="carousel-inner">
                <div class="item active">
                  <img className ="photo"src="./images/tettt.jpg" alt="First slide"/>
                          <div class="header-text hidden-xs">
                              <div class="col-md-12 text-center">
                                  <h2>
                                    <span><strong className="h3">         
                                      </strong></span>
                                  </h2>
                                  <br/>
                                  <h3 className="">
                                    <span>SPAWS IS THE FIRST OF ITS KIND PLATFORM. </span>
                                  </h3>
                                  <br/>
                              </div>
                          </div>
                </div>
                <div class="item ">
                  <img src="./images/first.png" alt="Second slide"/>
                  {/* <!-- Static Header --> */}
                          <div class="header-text hidden-xs">
                              <div class="col-md-12 text-center">
                                  <h2>
                                      <span></span>
                                  </h2>
                                  <br/>
                                  <h3 className="middle">
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                  </h3>
                                  <br/>
                              </div>
                          </div>
                </div>
                <div class="item ">
                  <img src="./images/dog.jpg" alt="Third slide" width="200" height="200"/>
                  {/* <!-- Static Header --> */}
                          <div class="header-text hidden-xs">
                              <div class="col-md-12 text-center">
                                  <h2>
                                      <span></span>
                                  </h2>
                                  <br/>
                                  <h3 className="middle">
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                  </h3>
                                  <br/>
                                  <div class="">
                                    </div>
                              </div>
                          </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="register">
      <a class="btn btn-theme btn-sm btn-min-block" ><Link to="/login">Login</Link></a>
      <a class="btn btn-theme btn-sm btn-min-block"><Link to="/signup">Register</Link></a>
      </div>

      </div> 
      <div className="snow">
      <div class="card-group">
        <div class="card">
          <img class="card-img-top" src="https://media.giphy.com/media/l4FGtAXjRFvOs3UyY/giphy.gif" alt="Card image cap"/>
          <div class="card-body">
            <h3 class="card-title">CREATE AN ACCOUNT</h3><hr/>
            <p class="card-text">Wether you are a dog groomer looking to maximize your time and increase your customer based or a pet owner lookin to find the best care for your dog. SPAWS is here for you. Start by creating an account<br/> <Link className="a"to="/signup">Click Here to Sign Up</Link></p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="https://media1.giphy.com/media/3oKIPtwX904KOvjCEw/giphy.gif?cid=790b7611e05d7d57d340fd6969a8fe54979e60257c6968d3&rid=giphy.gif" alt="Card image cap"/>
          <div class="card-body">
            <h3 class="card-title">STAY LOCAL</h3><hr/>
            <p class="card-text">SPAWS "near me" feature allows you to see the dog groomers near you. You will also be able to view the dog groomer's profile with all their service plans as well as reviews from other pet owners.</p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="https://media1.giphy.com/media/3o7buc7sAR6NEfAzTi/giphy.gif?cid=790b761140bbb9ca0c9bf9e2a78a9f1f1e678a681ac1306d&rid=giphy.gif" alt="Card image cap"/>
          <div class="card-body">
            <h3 class="card-title">APPOINTMENTS</h3><hr/>
            <p class="card-text">Finding the right dog groomer is only hald the battle with SPAWS you will be able to book an appoinment in the comfort of your home. Dog groomers will be providing their service at your convenience</p>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
      </div>
      </div>
      <div clasName="phone"><Footer></Footer></div>  
</div>
    )
  }
  componentDidMount() {
    api
      .getCountries()
      .then(countries => {
        console.log(countries)
        this.setState({
          countries: countries,
        })
      })
      .catch(err => console.log(err))
  }
}
