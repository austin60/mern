import React,{Component} from 'react';

class Blog extends Component{
 render(){
      const {blogs}=this.props;
        return(
            <div>
                {blogs.map(blog=><div className='container blog-container' key={blog._id}>
                    <h3 className='title'>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <p className='author'>by: <i>{blog.author}</i></p>
                </div>  )}
            </div>
        )
    }
}
export default Blog;