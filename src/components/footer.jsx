import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
        <div className='footer container-fluid bg-secondary'>
          <div className="copyrights"><p className='footer-notes'>copyrightdailypost </p></div>
          <div className="socials"><p className='footer-notes'> Advertise With Us</p></div>
          <div className="socials"><Link to="/contact"style={{ color: 'white' }}> Contact Us</Link></div>
         </div>
        )
    }
}
export default Footer