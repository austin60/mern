import React,{Component} from 'react';
import Navbar from './navbar';
import Footer from './footer';

class Entertainment extends Component{
 render(){
      const {blogs}=this.props;
        return(
            <div className='home-blog'>
                <Navbar />

                <div className='content'>
                <div className="highlights"></div>
                <div className="news">
                {blogs.filter(blog=>blog.category==="Entertainment").map(entertain=><div className='container ' key={entertain._id}>
                    <p className='blog-txt' dangerouslySetInnerHTML={{__html:entertain.content}}></p>
                    <p className='author'>by: <i>{entertain.author}</i></p>
                </div>  ) }

               { /*pagination implimentation
                <div className="pagination">
                    <button className='btn btn-secondary pag' id='bck' onClick={handleBck}> back</button>
                    <span>{page}</span>
                    <button className='btn btn-secondary pag' id='nxt' onClick={handleNxt}>next</button>
                   </div>*/}
                </div>
                
                </div>
                  
                <Footer />
               </div>
        )
    }
}
export default Entertainment;