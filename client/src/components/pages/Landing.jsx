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
      <div className="">
       <div class="parallax">
         <h2>SPAWS</h2>
       </div>


 
  





<h1>WELCOME TO Spaws</h1>
<h5>this is the best place to share ideas opinions and over all views!
  your are one of kind and the world would not be the same without you!
  debitis beatae unde aliquam dolorem ratione iure rerum, reprehenderit
</h5>


<h1>SECOND PARAGRAPH</h1> 

<div class="parallax2"></div>

<div class="para">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi itaque debitis beatae unde aliquam dolorem ratione iure rerum, reprehenderit nesciunt quidem qui illum maxime natus ut corporis corrupti! Earum?
</div>
        
      
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
