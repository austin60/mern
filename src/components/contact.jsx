import React, {Component} from 'react';
import Navbar from './navbar';
import MainFooter from './mainfooter';
import { ContactUs } from './message';
import Sub from './sub';



class Contact extends Component{
    render(){
        return(  <div className='contact-page'>
          <Navbar/>
                   <div className='contact-forms'>
                     <div className='sub-form'>
                      <Sub/>
                      </div>
                      <div className='message-form'>
                      <ContactUs/>
                      </div>    
                   </div>
                   <MainFooter /> 
                </div> )
       
    }
}
export default Contact