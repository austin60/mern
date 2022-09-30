import React,{Component} from 'react';
import Navbar from './navbar';
import Footer from './footer';
import axios from 'axios';

class Sports extends Component{
    state={
        sports:[]
    }
    componentDidMount=()=>{
      this.getSports(); 
    }
 
    getSports=()=>{
        axios.get("http://localhost:4000/app/sports")
        .then(res=>this.setState({sports:res.data}))
        .catch(err=>console.log(err))
    }
 render(){
      const {sports}=this.state;
        return(
            <div className='home-blog'>
                <Navbar />

                <div className='content'>
                <div className="news">
                {sports.map(sport=><div className='container ' key={sport._id}>
                    <p dangerouslySetInnerHTML={{__html:sport.content}}></p>
                    <p className='author'>by: <i>{sport.author}</i></p>
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
export default Sports;