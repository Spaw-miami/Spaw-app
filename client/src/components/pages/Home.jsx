import React, { Component } from 'react'


export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col-md-3 ">
            {/* USER PROFILE CARD */}

            <div className="card">
              <div className="avatar-flip">
                <img src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg" alt="" height="150" width="150" />
                <img src="https://s3-media1.fl.yelpcdn.com/bphoto/8brydl3V-sxA3i58-xx9tw/o.jpg" alt="" height="250" width="250" />
              </div>
              <div className="card-body">
                <h5 className="card-title">User Name</h5>
                <p className="card-text">
                  User preferred address.
              </p>
              </div>
              <div className="card-body">
                <a href="/" className="card-link">Pet Settings</a>
                <br></br>
                <a href="/" className="card-link">User Settings</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            {/* GEO LIST + EVENTS */}
            {/* <div className="container"> */}
            <div>
              <div className="row">
                <h2>Groomers near you!</h2>
                <div className="col">
                  <ul>
                    <li>
                      Username , Distance , Rate
                    <hr></hr>
                    </li>
                    <li>
                      Christian , 10mi , 40$/hr
                    <hr></hr>
                    </li>
                    <li>
                      Jose , 7mi , 50$/hr
                    <hr></hr>
                    </li>
                    <li>
                      Santa , 2000mi , 1,000$/hr
                    <hr></hr>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="container"> */}
            <div>
              <div className="row ">
                <h2>Events in Miami</h2>
                <div className="col">
                  <ul>
                    <li>
                      Username , Content , Link
                    <hr></hr>
                    </li>
                    <li>
                      Christian , Dog park party at 7pm at hyde park , www.aspca.com
                    <hr></hr>
                    </li>
                    <li>
                      Jose , Free grooming at petsmart monday the 17th all day , www.petsmart.com
                    <hr></hr>
                    </li>
                    <li>
                      Santa , Dog day care special rate next week 50% off , www.doggydaycare.com
                    <hr></hr>
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
      </div>
    )
  }
}
