import React, {Component} from 'react';
import {BiEdit} from "react-icons/bi";
import { MdDelete } from "react-icons/md";

class ContMan extends Component{
    render(){
        const {blogs}=this.props;
        return(
            <div>
                {blogs.map(blog=> <div key={blog._id}className='container content-managment'>
               
               <div className='content-title'>{blog.title}</div>
               <div className='content-btns'>
                   <button className='btn btn-success'>Edit <BiEdit/></button>
                   <button className='btn btn-danger'>Delete <MdDelete /></button>
               </div>
           </div>)}
           
            </div>
        )
    }
}
export default ContMan;