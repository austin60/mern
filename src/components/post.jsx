import React,{Component} from 'react';
import axios from 'axios'
import AdminNav from './admnnav';

class Post extends Component{
    state={
        title:"",
        content:"",
        author:""
      }
    handleChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    createBlog=(e)=>{
     e.preventDefault()
     
     const newBlog={
        title:this.state.title,
        content:this.state.content,
        author:this.state.author
     }

    axios.post('http://localhost:4000/app/post',newBlog)
    .then(res=>console.log(res.data))

    this.setState({
      title:"",
      content:"",
      author:""
    })
   
     alert("Post has been added to blog")
    }
    render(){
       
        return(
            <div>
<AdminNav />
<form action="" onSubmit={this.createBlog}>
                
    <div className="mb-3">
      <label htmlFor="ControlInput1" className="form-label">Blog Title</label>
        <input type="text" className="form-control" required id="ControlInput1" name="title" onChange={this.handleChange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="Textarea1" className="form-label">Blog</label>
        <textarea className="form-control" id="Textarea1" rows="3" name="content" onChange={this.handleChange}/>
    </div>
                    <div className="input-group mb-3">
                     <label className="input-group-text" htmlFor="inputGroupSelect01">Author</label>
                        <select className="form-select form-control" id="inputGroupSelect01" name="author" onChange={this.handleChange}>
                         <option value=" ">Choose...</option>
                         <option value="Brian Mwai">Brian Mwai</option>
                         <option value="Janet Mburu">Janet Mburu</option>
                         <option value="Matthew Onyango">Matthew Onyango</option>
                       </select>
                    </div>
                    <button className='btn btn-primary' type='submit'>Post</button>
                </form>
            </div>
        )
    }
}
export default Post;