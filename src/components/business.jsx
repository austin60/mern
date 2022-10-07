import React,{Component} from 'react';
import Navbar from './navbar';
import Footer from './footer';
//import axios from 'axios';

class Business extends Component{

 render(){
      const {blogs}=this.props;
        return(
            <div className='home-blog'>
                <Navbar />

                <div className='content'>
                <div className="news">
                {blogs.filter(blog=>blog.category==="Business").map(bs=><div className='container ' key={bs._id}>
                    <p dangerouslySetInnerHTML={{__html:bs.content}}></p>
                    <p className='author'>by: <i>{bs.author}</i></p>
                </div>  ) }

               { /*pagination implimentation
                <div className="pagination">
                    <button className='btn btn-secondary pag' id='bck' onClick={handleBck}> back</button>
                    <span>{page}</span>
                    <button className='btn btn-secondary pag' id='nxt' onClick={handleNxt}>next</button>
                   </div>*/}
                </div>
                <div className="highlights">

                </div>
                </div>
                  
                <Footer />
               </div>
        )
    }
}
export default Business;