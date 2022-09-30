import React,{Component} from 'react';
import Navbar from './navbar';
import Footer from './footer';
import axios from 'axios';

class Business extends Component{
    state={
        business:[]
    }
    componentDidMount=()=>{
        this.getBusiness();
      }
    getBusiness=()=>{
        axios.get("http://localhost:4000/app/business")
        .then(res=>this.setState({business:res.data}))
        .catch(err=>console.log(err))
    }
 render(){
      const {business}=this.state;
        return(
            <div className='home-blog'>
                <Navbar />

                <div className='content'>
                <div className="news">
                {business.map(bs=><div className='container ' key={bs._id}>
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