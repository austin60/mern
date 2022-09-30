import React,{Component} from 'react';
import Navbar from './navbar';
import Footer from './footer';

class Blog extends Component{
 
 render(){
      const {blogs, handleNxt,handleBck,page,pageCount}=this.props;
        return(
            <div className='home-blog'>
                <Navbar />

                <div className='content'>
                <div className="news">
                {blogs.map(blog=><div className='container ' key={blog._id}>
                    <p dangerouslySetInnerHTML={{__html:blog.content}}></p>
                    <p className='author'>by: <i>{blog.author}</i></p>
                </div>  ) }
                <div className="pagination">
                    <button className='btn btn-secondary pag' id='bck' onClick={handleBck}> back</button>
                    <span>{page}</span>
                    <button className='btn btn-secondary pag' id='nxt' onClick={handleNxt}>next</button>
                   </div>
                </div>
                <div className="highlights">

                </div>
                </div>
                  
                <Footer />
               </div>
        )
    }
}
export default Blog;