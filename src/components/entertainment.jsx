import React,{Component} from 'react';
import Navbar from './navbar';
import Footer from './footer';
import axios from 'axios';

class Entertainment extends Component{
    state={
        entertainment:[]
    }
    componentDidMount=()=>{
      this.getEntertainment();
    }
 
    getEntertainment=()=>{
        axios.get("http://localhost:4000/app/entertainment")
        .then(res=>this.setState({entertainment:res.data}))
        .catch(err=>console.log(err))
    }
 render(){
      const {entertainment}=this.state;
        return(
            <div className='home-blog'>
                <Navbar />

                <div className='content'>
                <div className="news">
                {entertainment.map(entertain=><div className='container ' key={entertain._id}>
                    <p dangerouslySetInnerHTML={{__html:entertain.content}}></p>
                    <p className='author'>by: <i>{entertain.author}</i></p>
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
export default Entertainment;