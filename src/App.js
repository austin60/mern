import React,{Component} from 'react';
import './App.css';
import Post from './components/post';
import Blog from './components/blog';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router,   Routes,  Route} from "react-router-dom";

class App extends Component {


  render(){ 
   
  return (
    
<Router>
 <div className="App">
  <Navbar />
  <Routes>
  <Route path='/' element={<Blog />} />
  <Route path='/post' element={ <Post/>} />
  </Routes>
 </div>
 </Router>
  );}
}

export default App;
