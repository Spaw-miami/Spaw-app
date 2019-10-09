import React, { Component } from 'react'
import Calendar from '../Calendar'
import WeekCalendar from '../WeekCalendar'

export default class Home extends Component {
  render() {
    return (
      <frameElement>


        <div class="containerr-two">
          <div><h2>CHRISTIAN ROQUE</h2></div>
          <div id="book">
            <button type="button" class="btn btn-info btn-md" data-toggle="modal" data-target="#myModal">Book groomer</button>
          </div>
          <br></br>
          <div><h4>BEST GROOMER IN MIAMI</h4></div>
          <div> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, qui. Et doloremque aperiam suscipit impedit, voluptas voluptatum nesciunt, reprehenderit quod enim expedita cum a! Suscipit unde natus praesentium laborum quam!</p></div>

        </div>
        <div class="containerr-two">
          <div><h2>WEEK SCHEDULE</h2></div>
          <br></br>
          <WeekCalendar />
        </div>

        <div class="containerr">
          <div class="avatar-flip">
            <img src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg" height="150" width="150" />
            <img src="https://www.dccomics.com/sites/default/files/Char_GetToKnow_Batman80_5ca54cb83a27a6.53173051.png" height="250" width="250" />
          </div>
          <h2>CONTACT INFO</h2>
          <h4>Phone Number</h4>
          <p>(999)999-9999</p>
          <h2><em></em>(84% rating)</h2>
          <div class="star-ratings-css">
            <div class="star-ratings-css-top"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            <div class="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
          </div>
          <br></br>
          <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                  <h4 class="modal-title">BOOKING</h4>
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
