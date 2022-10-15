import React, {Component} from 'react';

class Sub extends Component{
    render(){
        return(
            <div className='subscription-form' id='subs'>
        <form action="">
         <h4>News Letter</h4>
        <p>Subscribe to our news letters and stay informed</p>
         <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
         <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
         <button className='btn'>Subscribe</button>
        </form>
            </div>
        )
    }
}
export default Sub