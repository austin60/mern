import axios from 'axios';
import React, {Component} from 'react';
import {BiEdit} from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import  Modal  from 'react-modal';
import Zoom from 'react-reveal/Zoom';


class ContMan extends Component{
    state={
        blog:null,
        titleEdit:'',
        contentEdit:'',
        id:''
    }
 openModal=(blog)=>{
    this.setState({blog})
 }
 closeModal=()=>{
    this.setState({blog:null})
}
handleEdits=e=>{
    this.setState({[e.target.name]:e.target.value})
}

handleState=(blog)=>{
return  this.setState({titleEdit:blog.title,contentEdit:blog.content,id:blog._id});
  
}
handleDelete=(blog)=>{
    if(window.confirm(`Action will delete ${blog.title}`)===true){
        const id=blog._id

        axios.delete(`http://localhost:4000/app/delete/${id}`)
    }
    else  alert("Operation was terminated")
}
handleSubmit=(e)=>{
    e.preventDefault()
     
const titleEdit=this.state.titleEdit
const contentEdit=this.state.contentEdit
const id=this.state.id

   axios.put(`http://localhost:4000/app/admin-blogs/edit/${id}`,{titleEdit:titleEdit,contentEdit:contentEdit})
   .then(res=>{console.log(res.data);console.log('formSubmitted');})
   .catch(err=>console.log(err))
    
}
    render(){
       
        const {blogs}=this.props;
        const {blog,titleEdit,contentEdit}=this.state;
        return(
            <div>
             <nav className="navbar bg-light">
                  <span className="navbar-brand mb-0">{blogs.length} posts found</span>
             </nav>
             <div className='blog-list'>
                {blogs.map(blog=> <div key={blog._id}className='container content-managment'>
               
               <div className='content-title'>{blog.title}</div>
               <div className='content-btns'>
                   <button className='btn btn-success' onClick={()=>{this.openModal(blog); this.handleState(blog)} }>Edit <BiEdit/></button>
                   <button className='btn btn-danger' onClick={()=>this.handleDelete(blog)}>Delete <MdDelete /></button>
               </div>
           </div>)}
           </div>
           {blog && (
           <Modal isOpen={true} onRequestClose={this.closeModal} ariaHideApp={false}
           contentLabel="Selected Option">
            <Zoom className='zoom'>
               
                <form  onSubmit={this.handleSubmit} action="">
                <label className="form-label">Edit for:{" "}<b>{blog.title}</b></label>
                <p className='text-muted'>*only edit required field</p>
                <div>
                    <label htmlFor="up-title" className="form-label">Title</label>
                    <input type="text" className='form-control' id="up-title"
                     name='titleEdit' value={titleEdit}  onChange={this.handleEdits} />
                </div>
                <div className="mb-3">
                 <label htmlFor="Textarea1" className="form-label">Blog</label>
                 <textarea className="form-control" id="Textarea1" rows="7" 
                 name='contentEdit' value={contentEdit} onChange={this.handleEdits}/>
                </div>
                
                <div className='modal-btns'>
                  <div>
                  <button className='btn btn-primary' type='submit'>Confirm</button> 
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