import React,{Component} from 'react';
import Navigator from './navigation';
import Footer from './footer';

class Entertainment extends Component{
 render(){
      const {blogs}=this.props;
        return(
            <div className='home-blog'>
                {blogs.length<1?<div>Loading...</div>:<div>
                <Navigator/>

<div className='content'>
<div className="highlights"></div>
<div className="news">
{blogs.filter(blog=>blog.category==="Entertainment").map(entertain=><div className='container ' key={entertain._id}>
<h4 className='maptitle'>{entertain.title}</h4>
    <p className='blog-txt' dangerouslySetInnerHTML={{__html:entertain.content}}></p>
    <p className='author'>by: <i>{entertain.author}</i></p>
</div>  ) }
</div>

</div>
  
<Footer />
                </div> }
               
               </div>
        )
    }
}
export default Entertainment;