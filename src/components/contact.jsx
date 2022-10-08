import React, {Component} from 'react';
import Navbar from './navbar';
import MainFooter from './mainfooter';
//import emailjs from '@emailjs/browser';
import { ContactUs } from './message';



class Contact extends Component{
 /*   sendEmail = (e) => {
        e.preventDefault();
        const form =React.createRef();
      
    
        emailjs.sendForm('service_fd5of48', 'template_8gpsrcg', form.current, 'PgEmoPELDtiSAFBWh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }*/
    render(){
        return(
            <div>
                <Navbar/>
                <div className="contact-page">
                  
                   <div className="socials-form">
                      <div className="news-letter">
                        <form action="">
                            <h4>News Letter</h4>
                            <p>Subcribe to get daily news letters and keep informed</p>
                            <div>
                            <label htmlFor="lettersub">E-mail</label>
                            <input type="text" className='form-control'required id='lettersub'/>
                            </div>
                            <div>
                                <button className='btn btn-secondary'>Subscribe</button>
                            </div>
                        </form>
                      </div>
                      <div className="message">
                       {/*  <form className="form" onSubmit={this.sendEmail()}>
                        <h4>Write to us</h4>
                            <div>
                            <label htmlFor="sender-name">Name*</label>
                            <input type="text" name="user_name" className='form-control' required id='sender-name'/>
                            </div>
                            <div>
                            <label htmlFor="sender-email">E-mail*</label>
                            <input type="text" name="user_email" className='form-control' required id='sender-email'/>
                            </div>
                            <div>
                            <label htmlFor="sender-phone">Phone</label>
                            <input type="text" name="user_phone" className='form-control' id='sender-phone'/>
                            </div>
                            <div>
                            <label htmlFor="sender-msg">Message*</label>
                            <textarea name="message" className='form-control' id="sender-msg" cols="40" required rows="4"></textarea>
                            </div>
                            <div>
                            <button className='btn btn-primary' type='submit' value="Send"> Send</button>
                            </div>
        </form>*/}
        <ContactUs/>
                      </div>
                   </div>
                </div>
                <div className="main-footer">
                  <MainFooter />
                </div>
            </div>
        )
    }
}
export default Contact