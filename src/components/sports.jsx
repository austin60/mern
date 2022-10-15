import React,{Component} from 'react';
import Footer from './footer';
import Navigator from './navigation';
import  Zoom  from 'react-reveal/Zoom'

class Sports extends Component{

 render(){
      const {blogs}=this.props;
        return(
            <div className='home-blog'>
                <Navigator/>

                <div className='content'>
                <div className="highlights"></div>
                <Zoom>
                <div className="news">
                {blogs.filter(blogs=>blogs.category==="Sports").map(sport=><div className='container ' key={sport._id}>
                <h4 className='maptitle'>{sport.title}</h4>
                    <p className='blog-txt' dangerouslySetInnerHTML={{__html:sport.content}}></p>
                    <p className='author'>by: <i>{sport.author}</i></p>
                </div>  ) }
                </div>
                </Zoom>
                </div>
                  
                <Footer />
               </div>
        )
    }
}
export default Sports;