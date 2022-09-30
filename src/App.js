import React,{Component} from 'react';
import './App.css';
import Post from './components/post';
import Blog from './components/blog';
import ContMan from './components/cms';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from './components/contact';
import { BrowserRouter as Router,Routes,  Route} from "react-router-dom";
import axios from 'axios';

class App extends Component {
  state={
    blogs:[],
    page:1,
  //  pageCount:0
}
componentDidMount=()=>{
    this.getBlog();
    this.btnMonitor();
    
}
btnMonitor=()=>{

}
getBlog=()=>{
    const{page}=this.state
    axios.get(`http://localhost:4000/app?page=${page}`)
    .then(res=>this.setState({blogs:res.data}))
    .catch(err=>console.log(err))
}
handleNxt=()=>{
this.setState(state=>{
  return {page:state.page + 1}
})
console.log(this.state.page)
console.log(`http://localhost:4000/app?page=${this.state.page}`)
this.getBlog();
}

handleBck=()=>{
if(this.state.page <=1){
  return this.setState(state=>{
    return {page:state.page = 1}
  })
}
this.setState(state=>{
  return {page:state.page - 1}
})
console.log(this.state.page)
console.log(`http://localhost:4000/app?page=${this.state.page}`)
this.getBlog();
}
 render(){ 
  const{blogs,page/*pageCount*/}=this.state
   
  return (
   
<Router>
 <div className="App">
  <Routes>
  <Route path='/' element={<Blog  blogs={blogs} page={page} /*pageCount={pageCount}*/
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
