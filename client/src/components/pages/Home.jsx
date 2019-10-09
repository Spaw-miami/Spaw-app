import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (

      <div className="row">
        <div className="col-md-3 ">
          {/* USER PROFILE CARD */}
          <h1>PROFILE</h1>
          <div className="card">
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">User Name</h5>
              <p className="card-text">
                User preferred address.
              </p>
            </div>
            <div className="card-body">
              <a href="#" className="card-link">Pet Settings</a>
              <br></br>
              <a href="#" className="card-link">User Settings</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {/* GEO LIST + EVENTS */}
          <h1>NEAR YOU + EVENTS</h1>
          <div class="container align-self-start">
            <div class="row ">
              <div class="col">
                Near Me
               <ul>
                  <li>
                    Username , Distance , Rate
                 </li>
                  <li>
                    Christian , 10mi , 40$/hr
                 </li>
                  <li>
                    Jose , 7mi , 50$/hr
                 </li>
                  <li>
                    Santa , 2000mi , 1,000$/hr
                 </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="container align-self-start">
            <div class="row ">
              <div class="col">
                Events
               <ul>
                  <li>
                    Username , Content , Link
                 </li>
                  <li>
                    Christian , Dog park party at 7pm at hyde park , www.aspca.com
                 </li>
                  <li>
                    Jose , Free grooming at petsmart monday the 17th all day , www.petsmart.com
                 </li>
                  <li>
                    Santa , Dog day care special rate next week 50% off , www.doggydaycare.com
                 </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <h1>TRENDING NEWS</h1>
        </div>
      </div>
    )
  }
}
