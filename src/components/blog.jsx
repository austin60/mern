import React,{Component} from 'react';
import axios from 'axios';

class Blog extends Component{
    state={
        blogs:[]
    }
    componentDidMount=()=>{
        this.getBlog();
    }
    
    getBlog=()=>{
        axios.get('http://localhost:4000/app')
        .then(res=>this.setState({blogs:res.data}))
        .catch(err=>console.log(err.json()))
    }
    render(){
      
        return(
            <div>
                <h2>Blogs</h2>
            </div>
        )
    }
}
export default Blog;