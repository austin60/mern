import React,{Component} from 'react';
import './App.css';
import Post from './components/post';
import Blog from './components/blog';
import ContMan from './components/cms';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from './components/contact';
import Entertainment from './components/entertainment';
import Sports from './components/sports';
import Business from './components/business';
import { BrowserRouter as Router,Routes,  Route} from "react-router-dom";
import { connect } from 'react-redux';
import { fetchBlogs,createNewBlog } from './redux/actions';



class App extends Component {
  state={
    page:1,
  //  pageCount:0
}
componentDidMount=()=>{
    this.props.fetchBlogs();  
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
console.log("http://localhost:4000/app?page="+ this.state.page)
this.getBlog();
}
 render(){ 
  const{page/*pageCount*/}=this.state
  const{blogs,createNewBlog ,fetchBlogs}=this.props
   
  return (
   
<Router>
 <div className="App">
 {!blogs ? <div>Loading ...</div>:<div>
  <Routes>
   
  <Route path='/' element={<Blog  blogs={blogs} page={page} /*pageCount={pageCount}*/
      handleNxt={this.handleNxt}  handleBck={this.handleBck}/>} />

  <Route path='/post' element={ <Post createNewBlog ={createNewBlog } fetchBlogs={fetchBlogs}/>} />
  <Route path='/admin-blogs' element={ <ContMan blogs={blogs} />} />
  <Route path='/contact' element={ <Contact blogs={blogs}/>} />
  <Route path='/entertainment' element={ <Entertainment  blogs={blogs}/>} />
  <Route path='/sports' element={ <Sports  blogs={blogs}/>} />
  <Route path='/business' element={ <Business  blogs={blogs}/>} />
  </Routes>
  </div> }
 </div>
 </Router>
  );}
}

export default connect((state)=>({blogs:state.blogs.items}),{fetchBlogs,createNewBlog }) (App);
