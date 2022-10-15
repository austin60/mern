import React,{Component} from 'react';
import { HiMenu } from "react-icons/hi";
import { NavLink} from 'react-router-dom';

class Navigator extends Component{
    toggleShow=()=>{
        var x= document.getElementById('nav-ul');
         if ( x.style.display==="none"){
          x.style.display="block";
         }
         else{
          x.style.display="none";
         }
        }
    render(){
        
        return(
       <div>
         <nav className='main-navbar fixed-top'>
              <div className='mainnav-logo'>
                <div>
                    <label className='navlogo'>Daily Post</label>
                </div>
                <div>
                  <HiMenu size="25px" id='burger-icon' onClick={this.toggleShow}/>
             </div>
              </div>
              <div className='nav-ul' id='nav-ul'>
                    <ul>
                        <li><NavLink to="/" className="navli">Politics & Developing</NavLink></li>
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
export default Navigator