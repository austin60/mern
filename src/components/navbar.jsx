import React,{Component} from 'react';
import { NavLink} from 'react-router-dom';

  


class Navbar extends Component{
    
    
    render(){
        return(
         <div>
            <nav className='navbar bg-secondary fixed-top'>
                
                <div><NavLink id='brand' to="/" style={{ color: 'white', textDecoration:'none'}}>Daily Post</NavLink></div>
                <div className='links'>
                <ul>
                    <li ><NavLink to="/" className="navli">Politics & Developing</NavLink></li>
                    <li><NavLink to="/business" className="navli">Business</NavLink></li>
                    <li><NavLink to="/sports" className="navli">Sports</NavLink></li>
                    <li><NavLink to="/entertainment" className="navli">Entertainment</NavLink></li>
                </ul>
                </div>
            </nav>
         </div>
        )
    }
}
export default Navbar