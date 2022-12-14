import React,{Component} from 'react';
import AdminNav from './admnnav';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Post extends Component{
    state={
        title:"",
        content:"",
        author:"",
        category:""
      }
     notify = () => toast("Post added"); 
    handleChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    createBlog=(e)=>{
     e.preventDefault()
     
     const newBlog={
        title:this.state.title,
        content:this.state.content,
        author:this.state.author,
        category:this.state.category
        
     }
this.props.createNewBlog (newBlog)

    this.setState({
      title:"",
      content:"",
      author:"",
      category:""
    })
   
   
      this.notify();
      this.props.fetchBlogs()
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
                <CKEditor
                    editor={Editor}
                    data={this.state.content}
                   
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        this.setState({content:data})
                    }}
                   
                />
            </div>
            <div>
            </div>
            <div className="input-group mb-3">
                     <label className="input-group-text" htmlFor="inputGroupSelect01">Category</label>
                        <select className="form-select form-control" id="inputGroupSelect01" name="category" onChange={this.handleChange}>
                         <option value=" ">Choose...</option>
                         <option value="Developing">Developing</option>
                         <option value="Politics">Politics</option>
                         <option value="Business">Business</option>
                         <option value="Sports">Sports</option>
                         <option value="Entertainment">Entertainment</option>
                       </select>
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
     
                    <button className='btn' type='submit' >Post</button>
                </form>
                <ToastContainer 
position="top-center"
theme="dark"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover/>
            </div>
        )
    }
}
export default Post;