import React, {Component} from 'react';
import {BiEdit} from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import  Modal  from 'react-modal';
import Zoom from 'react-reveal/Zoom';

class ContMan extends Component{
    state={
        blog:null
    }
 openModal=(blog)=>{
    this.setState({blog})
 }
 closeModal=()=>{
    this.setState({blog:null})
}
    render(){
       
        const {blogs}=this.props;
        const {blog}=this.state;
        return(
            <div>
             <nav class="navbar bg-light">
                  <span class="navbar-brand mb-0">{blogs.length} posts found</span>
             </nav>
             <div className='blog-list'>
                {blogs.map(blog=> <div key={blog._id}className='container content-managment'>
               
               <div className='content-title'>{blog.title}</div>
               <div className='content-btns'>
                   <button className='btn btn-success' onClick={this.openModal(blog)}>Edit <BiEdit/></button>
                   <button className='btn btn-danger'>Delete <MdDelete /></button>
               </div>
           </div>)}
           </div>
           {blog && (
           <Modal isOpen={true}>
            <Zoom>
                <button className='btn btn-warning btn-block'>x</button>
            </Zoom>
           </Modal>)

           }
            </div>
        )
    }
}
export default ContMan;