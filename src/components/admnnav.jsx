import React, {Component}from 'react';
import { Link } from 'react-router-dom';

class AdminNav extends Component{
    render(){
        return(
            <div>
             <nav className='navbar bg-secondary '>
                <div className="navbar-brand">Daily-Post</div>
                <ul>
                    <li><Link to="/" style={{ color: 'white' }}>Home</Link></li>
                    <li><Link to="/post" style={{ color: 'white' }}>Write</Link></li>
                    <li><Link to="/admin-blogs" style={{color: 'white' }}>Manage</Link></li>
                    
                </ul>
            </nav>
            </div>
        )
    }
}
export default AdminNav;