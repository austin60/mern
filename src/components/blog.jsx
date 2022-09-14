import React,{Component} from 'react';
import axios from 'axios';

class Blog extends Component{
    state={
        blogs:[]
    }
    componentDidMount=()=>{
        this.getBlog();
    }

    getBlog=()=>{
        axios.get('http://localhost:4000/app')
        .then(res=>this.setState({blogs:res.data}))
        .catch(err=>console.log(err.json()))
    }
    render(){
      const {blogs}=this.state;
        return(
            <div>
                <h2>Blogs</h2>
                <h3>{blogs.map(blog=><li key={blog._id}>{blog.title}</li>  )}</h3>
            </div>
        )
    }
}
export default Blog;