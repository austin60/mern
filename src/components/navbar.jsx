import React,{Component} from 'react';
import { Link } from 'react-router-dom';

  

class Navbar extends Component{
    render(){
        return(
         <div>
            <nav className='navbar'>
                <div className="navbar-brand">Daily Post</div>
                <ul>
                    <li ><Link to="/">Blogs</Link></li>
                    <li><Link to="/post">Admin</Link></li>
                    <li><Link to="/admin-blogs">Manage</Link></li>
                </ul>
            </nav>
         </div>
        )
    }
}
export default Navbar