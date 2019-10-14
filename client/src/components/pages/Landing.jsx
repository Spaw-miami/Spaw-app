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
          {/* <div className="gif">
            <img  src="https://media.giphy.com/media/l4FGtAXjRFvOs3UyY/giphy.gif"></img>
            <img  src="https://media1.giphy.com/media/3oKIPtwX904KOvjCEw/giphy.gif?cid=790b7611e05d7d57d340fd6969a8fe54979e60257c6968d3&rid=giphy.gif"></img>
            <img  src="https://media1.giphy.com/media/3o7buc7sAR6NEfAzTi/giphy.gif?cid=790b761140bbb9ca0c9bf9e2a78a9f1f1e678a681ac1306d&rid=giphy.gif"></img>
            
            </div>       */}
        <div className="">
          <img id="logo2"src="./images/Spaws_white.png"></img>
          <div className="bye">
          
          <img id="logo1"src="https://media.giphy.com/media/l4FGtAXjRFvOs3UyY/giphy.gif" className=""alt="Norway"></img>
          <img id="logo" src="https://media1.giphy.com/media/3oKIPtwX904KOvjCEw/giphy.gif?cid=790b7611e05d7d57d340fd6969a8fe54979e60257c6968d3&rid=giphy.gif" className="w3-hover-opacity" alt="Norway"></img>
          <img  id="logo" src="https://media1.giphy.com/media/3o7buc7sAR6NEfAzTi/giphy.gif?cid=790b761140bbb9ca0c9bf9e2a78a9f1f1e678a681ac1306d&rid=giphy.gif" className="w3-hover-opacity"alt="Norway"></img>
          <div  className="box fade-in two" >   
                
            
            
            
            <div className="hello">
            <br></br>
           
            <h1 className="h1" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio reiciendis, tempore laborum, minus et, accusantium nisi earum cumque quas ab ratione ipsa. Eveniet vel illum quod obcaecati commodi</h1>
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
            1.  Book your Dog Groomer 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis modi itaque debitis beatae unde aliquam dolorem ratione iure rerum, 
        
        reprehenderit nesciunt quidem qui illum maxime natus ut corporis corrupti! Earum?
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
