import React, { Component } from 'react'
import api from '../../api'

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
    }
  }
  render() {
    return (
<div >       
        <div className="">
          <div >
          <div  className="box fade-in two" >          
            <img  id="element" className="landing-image" src="./images/Spaws_white.png"></img>
            <div className="box fade-in one">
            <br></br>
           
            <h1 className="landing-statement" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio reiciendis, tempore laborum, minus et, accusantium nisi earum cumque quas ab ratione ipsa. Eveniet vel illum quod obcaecati commodi numquam magni.</h1>
            <button className="buttonn">LOGIN</button>
            <button className="button">SIGN UP</button>
        </div>
          </div>

          </div>
         
        </div>  
       
        <div className="test1">
          <div className="parallax1"></div>
        </div>              
        <div className="test2">
            <h1></h1>
        </div>
        <div className="test2">
            <div className="parallax2"></div>
        </div>
        <div className="test1">
            <h1></h1>
        </div>
            <div className="test1">
          <div className="parallax3"></div>
        </div> 
        <div className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi itaque debitis beatae unde aliquam dolorem ratione iure rerum, reprehenderit nesciunt quidem qui illum maxime natus ut corporis corrupti! Earum?
        </div>
        <div className="para1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi itaque debitis beatae unde aliquam dolorem ratione iure rerum, reprehenderit nesciunt quidem qui illum maxime natus ut corporis corrupti! Earum?
        </div>
        <div className="para2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi itaque debitis beatae unde aliquam dolorem ratione iure rerum, reprehenderit nesciunt quidem qui illum maxime natus ut corporis corrupti! Earum?
        </div>
        <p className="para"></p>
      
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
