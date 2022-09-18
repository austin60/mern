import React, {Component} from 'react';
import {BiEdit} from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import  Modal  from 'react-modal';
import Zoom from 'react-reveal/Zoom';

class ContMan extends Component{
    state={
        blog:null,
        titleEdit:'',
        contentEdit:''
    }
 openModal=(blog)=>{
    this.setState({blog})
 }
 closeModal=()=>{
    this.setState({blog:null})
}
handleTitle=e=>{
    this.setState({titleEdit:e.target.value})
}
handleContent=e=>{
    this.setState({contentEdit:e.target.value})
}
    render(){
       
        const {blogs}=this.props;
        const {blog}=this.state;
        return(
            <div>
             <nav className="navbar bg-light">
                  <span className="navbar-brand mb-0">{blogs.length} posts found</span>
             </nav>
             <div className='blog-list'>
                {blogs.map(blog=> <div key={blog._id}className='container content-managment'>
               
               <div className='content-title'>{blog.title}</div>
               <div className='content-btns'>
                   <button className='btn btn-success' onClick={()=>this.openModal(blog)}>Edit <BiEdit/></button>
                   <button className='btn btn-danger'>Delete <MdDelete /></button>
               </div>
           </div>)}
           </div>
           {blog && (
           <Modal isOpen={true}>
            <Zoom className='zoom'>
               
                <form >
                <div>
                    <label htmlFor="up-title" className="form-label">Title</label>
                    <input type="text" className='form-control' id="up-title"
                     value={blog.title} name='titleEdit' onChange={this.handleTitle} />
                </div>
                <div className="mb-3">
                 <label htmlFor="Textarea1" className="form-label">Blog</label>
                 <textarea className="form-control" id="Textarea1" rows="7" value={blog.content} 
                 name='contentEdit' onChange={this.handleContent}/>
                </div>
                
                <div className='modal-btns'>
                  <div>
                  <button className='btn btn-primary' type='submit' onClick={this.closeModal}>Confirm</button> 
                  </div> 
                  <div>
                  <button className='btn btn-danger' onClick={this.closeModal}>Cancel</button>
                  </div>
                </div>
                </form>
            </Zoom>
           </Modal>)

           }
            </div>
        )
    }
}
export default ContMan;