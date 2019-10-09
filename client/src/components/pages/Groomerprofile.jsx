import React, { Component } from 'react'
import Calendar from '../Calendar'


export default class Home extends Component {
  render() {
    return (
      
        <div class="container">
                  <div class="avatar-flip">
                    <img src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg" height="150" width="150"/>
                    <img src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original" height="150" width="150"/>
                  </div>
                  <h2>CHRISTIAN ROQUE</h2>
                  <h4>BEST GROOMER IN MIAMI</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, qui. Et doloremque aperiam suscipit impedit, voluptas voluptatum nesciunt, reprehenderit quod enim expedita cum a! Suscipit unde natus praesentium laborum quam!</p>
                  <p>Connec dolore ipsum faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.</p>

                  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Book groomer</button>


<div class="modal fade" id="myModal" role="dialog">
  <div class="modal-dialog">
  
   
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">BOOKING</h4>
      </div>
      <div class="modal-body">
     
        <Calendar/>
        
            <select>
              <option value="0">AVAILABLE TIMES:</option>
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
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
    
  </div>



</div>






        </div>
       
        
        
      
    )
  }
}