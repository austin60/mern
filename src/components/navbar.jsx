import React,{Component} from 'react';
import { Link } from 'react-router-dom';

  


class Navbar extends Component{
    
    
    render(){
        return(
         <div>
            <nav className='navbar fixed-top'>
                <div className="navbar-brand" >Daily Post</div>
                <ul>
                    <li ><Link to="/" style={{ color: 'white'}}>Home</Link></li>
                    <li><Link to="/post"style={{ color: 'white' }}>Admin</Link></li>
                </ul>
            </nav>
         </div>
        )
    }
}
export default Navbar