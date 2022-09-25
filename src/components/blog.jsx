import React,{Component} from 'react';
import Navbar from './navbar';

class Blog extends Component{
 render(){
      const {blogs}=this.props;
        return(
            <div className='home-blog'>
                <Navbar />
                <div className='content'>
                {blogs.map(blog=><div className='container ' key={blog._id}>
                    <h3 className='title'>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <p className='author'>by: <i>{blog.author}</i></p>
                </div>  )}
                </div>
            </div>
        )
    }
}
export default Blog;