import React,{Component} from 'react';
import './App.css';
import Post from './components/post';
import Blog from './components/blog';
//import Navbar from './components/navbar';
import ContMan from './components/cms';
//import MyckEditor from './components/editor';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from './components/contact';
import { BrowserRouter as Router,   Routes,  Route} from "react-router-dom";
import axios from 'axios';

class App extends Component {
  state={
    blogs:[],
    page:1,
    pageCount:0
}
componentDidMount=()=>{
    this.getBlog();
}

getBlog=()=>{
    axios.get('http://localhost:4000/app')
    .then(res=>this.setState({blogs:res.data}))
    .catch(err=>console.log(err))
}
handleNxt=()=>{
  if(this.state.page >= 1) {
      document.getElementById('bck').disabled=false;
  }
  this.setState({page:this.state.page+1})
}
handleBck=()=>{
  if(this.state.page<=2) {
      document.getElementById('bck').disabled=true;
  }

  this.setState({page:this.state.page-1})
}
 render(){ 
  const{blogs,page,pageCount}=this.state
   
  return (
   
<Router>
 <div className="App">
  <Routes>
  <Route path='/' element={<Blog  blogs={blogs} page={page} pageCount={pageCount}
      handleNxt={this.handleNxt}  handleBck={this.handleBck}/>} />
      
  <Route path='/post' element={ <Post />} />
  <Route path='/admin-blogs' element={ <ContMan blogs={blogs}/>} />
  <Route path='/contact' element={ <Contact/>} />
  </Routes>
 </div>
 </Router>
  );}
}

export default App;
