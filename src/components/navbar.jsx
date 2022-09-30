import React,{Component} from 'react';
import { Link } from 'react-router-dom';

  


class Navbar extends Component{
    
    
    render(){
        return(
         <div>
            <nav className='navbar bg-secondary fixed-top'>
                <div className="navbar-brand" ><Link to="/" style={{ color: 'white', textDecoration:'none'}}>Daily Post</Link></div>
                <ul>
                    <li ><Link to="/" style={{ color: 'white'}}>Politics & Developing</Link></li>
                    <li><Link to="/business"style={{ color: 'white' }}>Business</Link></li>
                    <li><Link to="/sports"style={{ color: 'white' }}>Sports</Link></li>
                    <li><Link to="/entertainment"style={{ color: 'white' }}>Entertainment</Link></li>
                    {/*<li><Link to="/contact"style={{ color: 'white' }}>Contact</Link></li>*/}
                </ul>
            </nav>
         </div>
        )
    }
}
export default Navbar