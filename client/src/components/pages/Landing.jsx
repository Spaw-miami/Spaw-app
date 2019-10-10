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
          <div className="parallax">
            <img className="landing-image"src="./images/Spaws_white.png"></img>
          </div>
        </div>  
        <h1></h1>
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
        <div className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi itaque debitis beatae unde aliquam dolorem ratione iure rerum, reprehenderit nesciunt quidem qui illum maxime natus ut corporis corrupti! Earum?
        </div>
        <div className="para">
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
