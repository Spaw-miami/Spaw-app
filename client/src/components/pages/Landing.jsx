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
       <div>
         <div class="bs-example">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        {/* <!-- Carousel indicators --> */}
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        {/* <!-- Wrapper for carousel items --> */}
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src=" https://images.squarespace-cdn.com/content/v1/58ec8fce20099e78e669254c/1493768177531-8Y9UPN4WV34MXUFJRJL5/ke17ZwdGBToddI8pDm48kKCsOgeI5PJmrOlWdhHZvykUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcmvuJ5V1Zzwym5z4RWj7rQad9yEtYC8mGxxkdpOMr9Wq7_mGVf12pAqhUbHGtWIla/banner-grooming.jpg?format=2500w"/>
            </div>
            <div class="carousel-item">
                <img src="https://images.squarespace-cdn.com/content/v1/58ec8fce20099e78e669254c/1493768177531-8Y9UPN4WV34MXUFJRJL5/ke17ZwdGBToddI8pDm48kKCsOgeI5PJmrOlWdhHZvykUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcmvuJ5V1Zzwym5z4RWj7rQad9yEtYC8mGxxkdpOMr9Wq7_mGVf12pAqhUbHGtWIla/banner-grooming.jpg?format=2500w" alt="Second Slide"/>
            </div>
            <div class="carousel-item">
                <img src="https://pierre.fm/assets/front_theme/images/banner-pet-grooming.png" alt="Third Slide"/>
            </div>
        </div>
        {/* <!-- Carousel controls --> */}
        <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
</div>
<div>
        <div className="">
          <img id="logo2"src="./images/Spaws_white.png"></img>
          <div className="bye"> 
          <img id="logo1"src="https://media.giphy.com/media/l4FGtAXjRFvOs3UyY/giphy.gif" className=""alt="Norway"></img>
          <img id="logo" src="https://media1.giphy.com/media/3oKIPtwX904KOvjCEw/giphy.gif?cid=790b7611e05d7d57d340fd6969a8fe54979e60257c6968d3&rid=giphy.gif" className="w3-hover-opacity" alt="Norway"></img>
          <img  id="logo" src="https://media1.giphy.com/media/3o7buc7sAR6NEfAzTi/giphy.gif?cid=790b761140bbb9ca0c9bf9e2a78a9f1f1e678a681ac1306d&rid=giphy.gif" className="w3-hover-opacity"alt="Norway"></img>
          <div  className="box fade-in two" >       
            <div className="hello">
            <br></br>
            <h1 className="h1" >SPAWS IS THE FIRST OF ITS KIND PLATFORM TO FINALLY BRIDGE THE GAP BETWEEN DOG GROOMERS AND PET OWNERS. SPAWS IS BUILT WITH COMMUNITY IN MIND, FACILITATING APPOINTMENTS ON BOTH ENDS OF USERS. LOVE YOUR DOG THEN YOU'LL LOVE SPAWS. 
            </h1>
            <a className="buttonn"><Link to="/login">Login</Link></a>
            <a className="button"><Link to="/signup">SignUp</Link></a>
        </div>
          </div>
          </div>
        </div>  
        <div className="test1">
          <div className="parallax1"></div>
        </div>              
        <div className="test2">
            <h1></h1>
        </div>
        <div className="test2">
            <div className="parallax2"></div>
        </div>
        <div className="test1">
            <h1></h1>
        </div>
            <div className="test1">
          <div className="parallax3"></div>
        </div> 
        <div className="para">
            CREATE AN ACCOUNT
        <p className="p1">WETHER YOU ARE A DOG GROOMER LOOKIN TO MAXIMIZE YOUR TIME/CUSTOMERS BASED OR A PET OWNER LOOKING TO FIND THE BEST POSSIBLE CARE IN AREA NEAR YOU. SPAWS IS HERE FOR YOU. START BY CREATING AN ACCOUNT. <Link className="a"to="/signup">Click Here to Sign Up</Link>
        </p>
        </div>
        <div className="para1">
          STAY LOCAL
       <p className="p2"> SPAWS NEAR YOU FEATURE ALLOWS YOU TO SEE THE DOG GROOMERS NEAR YOUR AREA. YOU WILL BE ABLE TO VIEW THE DOG GROOMERS PROFILE WITH ALL THEIR SEVICE PLANS; AS WELL AS REVIEWS FROM OTHER PET OWNERS. </p>
        </div>
        <div className="para2">
          APPOINMENTS
            <p className="p3">FINDING THE RIGHT DOG GROOMER IS ONLY HALF THE BATTLE, WITH SPAWS YOU WILL BE ABLE TO BOOK AN APPOINMENT IN THE COMFORT OF YOUR HOME. DOG GROOMER WILL BE PROVINDING THEIR SERVICES IN THE COMFORT OF YOUR HOME.  </p>
        </div><p className="par"></p>
        <div clasName="phone"><Footer></Footer></div>  
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
