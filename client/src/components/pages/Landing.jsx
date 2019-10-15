import React, { Component } from 'react'
import api from '../../api'
import Signup from './Signup'
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Footer from '../Footer'

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
          <img id="logo2"src="./images/Spaws_white.png"></img>
          <div className="bye">
          
          <img id="logo1"src="https://media.giphy.com/media/l4FGtAXjRFvOs3UyY/giphy.gif" className=""alt="Norway"></img>
          <img id="logo" src="https://media1.giphy.com/media/3oKIPtwX904KOvjCEw/giphy.gif?cid=790b7611e05d7d57d340fd6969a8fe54979e60257c6968d3&rid=giphy.gif" className="w3-hover-opacity" alt="Norway"></img>
          <img  id="logo" src="https://media1.giphy.com/media/3o7buc7sAR6NEfAzTi/giphy.gif?cid=790b761140bbb9ca0c9bf9e2a78a9f1f1e678a681ac1306d&rid=giphy.gif" className="w3-hover-opacity"alt="Norway"></img>
          <div  className="box fade-in two" >   
                
            
            
            
            <div className="hello">
            <br></br>
           
            <h1 className="h1" >SPAWS IS THE FIRST OF ITS KIND PLATFORM TO FINALLY BRIDGE THE GAP BETWEEN DOG GROOMERS AND PET OWNERS. SPAWS IS BUILT WITH COMMUNITY IN MIND, FACILITATING APPOINTMENTS ON BOTH ENDS OF USERS. LOVE YOUR DOG THEN YOU'LL LOVE SPAWS. 
            </h1>
            <a className="buttonn"><Link to="/login">Login</Link></a>
            <a className="button"><Link to="/signup">SignUp</Link></a>
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
            1. CREATE AN ACCOUNT
        <p className="p1">WETHER YOU ARE A DOG GROOMER LOOKIN TO MAXIMIZE YOUR TIME/CUSTOMERS BASED OR A PET OWNER LOOKING TO FIND THE BEST POSSIBLE CARE IN AREA NEAR YOU. SPAWS IS HERE FOR YOU. START BY CREATING AN ACCOUNT. <Link className="a"to="/signup">Click Here to Sign Up</Link>
        </p>
        </div>
        <div className="para1">
          2. STAY LOCAL
       <p className="p2"> SPAWS NEAR YOU FEATURE ALLOWS YOU TO SEE THE DOG GROOMERS NEAR YOUR AREA. YOU WILL BE ABLE TO VIEW THE DOG GROOMERS PROFILE WITH ALL THEIR SEVICE PLANS; AS WELL AS REVIEWS FROM OTHER PET OWNERS. </p>
        </div>
        <div className="para2">
          3. APPOINMENTS
            <p className="p3">FINDING THE RIGHT DOG GROOMER IS ONLY HALF THE BATTLE, WITH SPAWS YOU WILL BE ABLE TO BOOK AN APPOINMENT IN THE COMFORT OF YOUR HOME. DOG GROOMER WILL BE PROVINDING THEIR SERVICES IN THE COMFORT OF YOUR HOME.  </p>
        </div><p className="par"></p>
        <Footer></Footer>
      
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
