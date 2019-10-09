import React, { Component } from 'react'
export default class WeekCalendar extends Component {

  

  handleClick() {
    console.log('Click happened');
  }


  render() {
      


    

    return (
      
      <div>
        <div class="calendar">
  
  <header>
      <div class="calendar__title" >
        <div class="icon secondary chevron_left">‹</div>
        <h1 class="" ><span></span><strong>Current Week</strong> </h1>
        <div class="icon secondary chevron_left">›</div>
      </div> 
      <div ></div>
  </header>
  <div class="outer">
  <table>
  <thead>
    <tr>
      <th class="headcol"></th>
      <th >Mon</th>
      <th>Tue</th>
      <th >Wed</th>
      <th>Thu</th>
      <th>Fri</th>
      <th class="secondary">Sat</th>
      <th class="secondary">Sun</th>
    </tr>
  </thead>
  </table>
<div class="wrap"> 
  <table class="offset">
  <tbody>
    <tr o>
      <td class="headcol"></td>
      <td ></td>
      <td></td>
      <td class="past"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr  data-toggle="modal" data-target="#myModall" onClick={this.handleClick} >
      <td className="headcol">6:00</td>
      <td></td>
      <td></td>
      <td class="past"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol"></td>
      <td></td>
      <td></td>
      <td class="past"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol">7:00</td>
      <td></td>
      <td></td>
      <td class="past"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol"></td>
      <td></td>
      <td></td>
      <td class="now"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol">8:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><div class="event double"><input id="check" type="checkbox" class="checkbox" /><label for="check"></label>8:30–9:30 Dog Wash in Kendall</div></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol">9:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol">10:00</td>
      <td></td>
      <td></td>
      <td><div class="event double"><input id="check" type="checkbox" class="checkbox" /><label for="check"></label>10:00–11:00 Dog Wash in Brickell</div></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol">11:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol">12:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol">13:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol">14:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol">15:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol">16:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol">17:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol">18:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr onClick={this.handleClick}>
      <td class="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>


<div class="modal fade" id="myModall" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
                                <div class="modal-header">
                                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                                  <h4 class="modal-title">BOOKING</h4>
                                </div>
                                <form>
                                  <div className="modal-body">
                                  
                                      <div className="custom" >
                                        <select>
                                          <option value="" disabled selected>SELECT DOG</option>
                                          <option value="1">DOG ONE (NAME)</option>
                                          <option value="3">DOG TWO (NAME)</option>
                                        </select>
                                      </div>
                                      <div className="modal-footer">
                                          <button type="submit" className="btn btn-primary">Submit</button>
                                          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                      </div>
                                    </div>
                                </form>
        </div>
      </div>
    </div>

</div>



 
      
    )
  }
}
