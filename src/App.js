import React,{Component} from 'react';
import './App.css';
import Post from './components/post';
import Blog from './components/blog';
import Navbar from './components/navbar';
import ContMan from './components/cms';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router,   Routes,  Route} from "react-router-dom";
import axios from 'axios';

class App extends Component {
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
  
   
  return (
    
<Router>
 <div className="App">
  <Navbar />
  <Routes>
  <Route path='/' element={<Blog  blogs={this.state.blogs}/>} />
  <Route path='/post' element={ <Post />} />
  <Route path='/admin-blogs' element={ <ContMan blogs={this.state.blogs}/>} />
  </Routes>
 </div>
 </Router>
  );}
}

export default App;
