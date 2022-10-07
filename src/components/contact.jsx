import React, {Component} from 'react';
import Navbar from './navbar';
import MainFooter from './mainfooter';

class Contact extends Component{
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
                        <form className="form"action="">
                        <h4>Write to us</h4>
                            <div>
                            <label htmlFor="sender-name">Name*</label>
                            <input type="text" name="" className='form-control' required id='sender-name'/>
                            </div>
                            <div>
                            <label htmlFor="sender-email">E-mail*</label>
                            <input type="text" name="" className='form-control' required id='sender-email'/>
                            </div>
                            <div>
                            <label htmlFor="sender-phone">Phone</label>
                            <input type="text" name="" className='form-control' id='sender-phone'/>
                            </div>
                            <div>
                            <label htmlFor="sender-msg">Message*</label>
                            <textarea name="" className='form-control' id="sender-msg" cols="40" required rows="4"></textarea>
                            </div>
                            <div>
                            <button className='btn btn-primary' type='submit'> Send</button>
                            </div>
                        </form>
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