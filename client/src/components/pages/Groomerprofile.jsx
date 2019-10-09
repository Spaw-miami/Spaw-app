import React, { Component } from 'react'
import Calendar from '../Calendar'


export default class Home extends Component {
  render() {
    return (
      <frameElement>
        <div id="book">
          <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Book groomer</button>
        </div>
        <div className="container">
          <div className="avatar-flip">
            <img src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg" alt="" height="150" width="150" />
            <img src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original" alt="" height="250" width="250" />
          </div>
          <h2>CHRISTIAN ROQUE</h2>
          <h4>BEST GROOMER IN MIAMI</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, qui. Et doloremque aperiam suscipit impedit, voluptas voluptatum nesciunt, reprehenderit quod enim expedita cum a! Suscipit unde natus praesentium laborum quam!</p>
          <div className="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>
          </div>
          <br></br>
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">BOOKING</h4>
                </div>
                <form>
                  <div className="modal-body">
                    <Calendar />
                    <br></br>
                    <div className="custom" >
                      <select >
                        <option value="" disabled selected>AVAILABLE TIMES:</option>
                        <option value="1">9:00AM-10:00AM</option>
                        <option value="3">10:00AM-11:00AM</option>
                        <option value="4">11:00AM-12:00AM</option>
                        <option value="5">12:00AM-1:00PM</option>
                        <option value="6">1:00PM-2:00PM</option>
                        <option value="7">2:00PM-3:00PM</option>
                        <option value="8">3:00PM-4:00PM</option>
                        <option value="9">5:00PM-6:00PM</option>
                      </select>
                    </div>
                    <br></br>
                    <div className="custom" >
                      <select>
                        <option value="" disabled selected>SELECT DOG</option>
                        <option value="1">DOG ONE (NAME)</option>
                        <option value="3">DOG TWO (NAME)</option>
                      </select>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </frameElement>


    )
  }
}
