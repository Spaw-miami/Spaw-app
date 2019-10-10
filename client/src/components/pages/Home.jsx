import React, { Component } from 'react';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petSettings: false,
      userSettings: true,
      showEdit: false
    };
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
          <input type="text" name="petname" placeholder="Pet's Name" />
          <input type="text" name="petbreed" placeholder="Pet's Breed" />
          <input type="text" name="petweight" placeholder="Pet's Weight" />
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
            <h2>Pet Breed</h2>
            <h4>Pet weight</h4>
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
          <input type="text" name="username" placeholder="User's Username" />
          <input type="text" name="firstname" placeholder="User's First Name" />
          <input type="text" name="lastname" placeholder="User's Last Name" />
          <input type="text" name="address" placeholder="User's Address" />
          <input type="text" name="phone" placeholder="User's Phone Number" />
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
            <h2>Address</h2>
            <h4>Phone number</h4>
            <h5>Dog drop down</h5>
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
        <div className="row">
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
                <p className="card-text">User preferred address.</p>
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
              <div className="row">
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
              <div className="row ">
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
