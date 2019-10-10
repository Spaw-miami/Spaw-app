import React, { Component } from 'react'
export default class WeekCalendar extends Component {

  state = {
    bgColor: "",
    content:"available"
  }

  handleClick() {
    console.log('Click happened');
    
  }
  boxClick = (e) => {
    this.setState({
      bgColor: "rgb(241, 131, 131)",
      content:"full"
    })
  }


  render() {
      


    

    return (
      
      <div>
        <div className="container-two">
  
  <header>
      <div className="calendar__title" >
        <div className="icon secondary chevron_left">‹</div>
        <h1 className="" ><span></span><strong>Current Week</strong> </h1>
        <div className="icon secondary chevron_left">›</div>
      </div> 
      <div ></div>
  </header>
  <div className="outer">
  <table>
  <thead>
    <tr>
      <th className="headcol"></th>
      <th >Mon</th>
      <th>Tue</th>
      <th >Wed</th>
      <th>Thu</th>
      <th>Fri</th>
      <th className="secondary">Sat</th>
      <th className="secondary">Sun</th>
    </tr>
  </thead>
  </table>
<div className="wrap"> 
  <table className="offset">
  <tbody>
    {/* <tr o>
      <td className="headcol"></td> */}
      {/* <td ></td>
      <td></td> */}
      {/* <td className="past"></td> */}
      {/* <td></td>
      <td></td>
      <td></td>
      <td></td> */}
    {/* </tr> */}
    <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick}>
      <td className="headcol">6:00</td>
      <td style={{backgroundColor: this.state.bgColor}}></td>
      <td></td>
      <td className="past"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
      <td className="headcol"></td>
      <td></td>
      <td></td>
      <td className="past"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> */}
    <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick}>
      <td className="headcol">7:00</td>
      <td></td>
      <td></td>
      <td className="past"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
      <td className="headcol"></td>
      <td></td>
      <td></td>
      <td className="now"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> */}
    <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick}>
      <td className="headcol">8:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
      <td className="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><div className="event double"><input id="check" type="checkbox" className="checkbox" /><label for="check"></label>8:30–9:30 Dog Wash in Kendall</div></td>
      <td></td>
      <td></td>
    </tr> */}
    <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick}>
      <td className="headcol">9:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
      <td className="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> */}
    <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick}>
      <td className="headcol">10:00</td>
      <td></td>
      <td></td>
      <td><div className="event double"><input id="check" type="checkbox" className="checkbox" /><label></label>10:00–11:00 Dog Wash in Brickell</div></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
      <td className="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> */}
    <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick}>
      <td className="headcol">11:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
      <td className="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> */}
    <tr className="test" data-toggle="modal" data-target="#myModall"  onClick={this.handleClick}>
      <td className="headcol">12:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
      <td className="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> */}
    <tr className="test" data-toggle="modal" data-target="#myModall"  onClick={this.handleClick}>
      <td className="headcol">13:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
      <td className="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> */}
    <tr className="test" data-toggle="modal" data-target="#myModall"  onClick={this.handleClick}>
      <td className="headcol">14:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
      <td className="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> */}
    <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick}>
      <td className="headcol">15:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
      <td className="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> */}
    <tr className="test" data-toggle="modal" data-target="#myModall"  onClick={this.handleClick}>
      <td className="headcol">16:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
      <td className="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> */}
    <tr className="test" data-toggle="modal" data-target="#myModall"  onClick={this.handleClick}>
      <td className="headcol">17:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
      <td className="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> */}
    <tr className="test" data-toggle="modal" data-target="#myModall"  onClick={this.handleClick}>
      <td className="headcol">18:00</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    {/* hello */}
    {/* <tr className="test" data-toggle="modal" data-target="#myModall" onClick={this.handleClick} onClick={this.handleClick}>
      <td className="headcol"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr> */}
  </tbody>
</table>
</div>
</div>
</div>

<div className="modal fade" id="myModall" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">BOOKING</h4>
          </div>
          <form>
            <div className="modal-body">
            
                <div className="custom" >
                  <select defaultValue="default">
                    <option value="DEFAULT" disabled >SELECT DOG</option>
                    <option value="1">DOG ONE (NAME)</option>
                    <option value="3">DOG TWO (NAME)</option>
                  </select>
                </div>
                <div className="modal-footer">
                    <button onClick={this.boxClick}type="submit" className="btn btn-primary">Submit</button>
                    <button  onClick={this.boxClick} type="button" className="btn btn-default" data-dismiss="modal">Close</button>
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
