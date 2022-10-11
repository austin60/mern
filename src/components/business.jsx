import React,{Component} from 'react';
import Navbar from './navbar';
import Footer from './footer';
import  Zoom  from 'react-reveal/Zoom'
//import axios from 'axios';

class Business extends Component{

 render(){
      const {blogs}=this.props;
        return(
            <div className='home-blog'>
                <Navbar />

                <div className='content'>
                <div className="highlights">

             </div>
             <Zoom>
                <div className="news">
               
                {blogs.filter(blog=>blog.category==="Business").map(bs=><div className='container ' key={bs._id}>
                    <p className='blog-txt' dangerouslySetInnerHTML={{__html:bs.content}}></p>
                    <p className='author'>by: <i>{bs.author}</i></p>
                </div>  ) }
                </div>
                </Zoom>
                </div>
                  
                <Footer />
               </div>
        )
    }
}
export default Business;