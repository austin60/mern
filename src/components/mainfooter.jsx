import React, {Component } from 'react'
import { Link } from 'react-router-dom'
import {TiSocialInstagram,TiSocialTwitter} from "react-icons/ti";
import { AiFillFacebook,AiFillYoutube} from "react-icons/ai";


class MainFooter extends Component{
    render(){
        return(
            <div className='m-foot'>
            <div className='mayne-footer bg-secondary'>
                <div className="logo">
                <div className="navbar-brand" ><Link to="/" style={{ color: 'white', textDecoration:'none'}} id='footer-log'>Daily Post</Link></div>
                </div>
                <div className="company"> 
                    <ul>
                    <h5>Company</h5>
                        <li>About Us</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Affiiate Programs</li>
                    </ul>
                </div>  
                <div className="services">                   
                    <ul>
                    <h5>Services</h5>
                        <li>Partnerships</li>
                        <li>Privacy</li>
                        <li>Advertise with us</li>
                        <li><Link to="/post"style={{ color: 'white' }}>Admin</Link></li>
                    </ul>
                </div>
                <div className="contacts-info">                  
                    <ul>
                    <h5>Contacts</h5>
                        <li>dailyblog@gmail.com</li>
                        <li> P.O Box 13124</li>
                        <li>+245709674679</li>
                        <li>+245709674678</li>
                    </ul>
                </div>

            </div>
            <div className='socials bg-secondary'>
                
                <ul>
                    <li><TiSocialInstagram className='icon'/> instagram</li>
                    <li><TiSocialTwitter className='icon'/> twitter</li>
                    <li><AiFillFacebook className='icon'/> facebook</li>
                    <li><AiFillYoutube  className='icon'/> youtube</li>
                </ul>
            </div>
            </div>
        )
    }
}
export default MainFooter