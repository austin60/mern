import React,{Component} from 'react';
import Navbar from './navbar';
import Footer from './footer';
import  Zoom  from 'react-reveal/Zoom'

class Blog extends Component{
 
 render(){
      const {blogs}=this.props;
        return(
           
            <div className='home-blog'>
                {
                  
                !blogs ? <div>Loading...</div>: <div>
                <Navbar />
               
               <div className='content'>
               <div className="highlights position-static"></div>
            <Zoom>
            <div className="news">
              {this.props.blogs.filter(blog=>blog.category==="Politics" ||blog.category==="Developing").map(blog=><div className='container ' key={blog._id}>
                   <p className='blog-txt' dangerouslySetInnerHTML={{__html:blog.content}}></p>
                   <p className='author'>by: <i>{blog.author}</i></p>
                </div>  ) }
                </div> 
           </Zoom>
             
           </div>
                 
               <Footer />
                </div> }
              
               </div>
        )
    }
}
export default Blog;