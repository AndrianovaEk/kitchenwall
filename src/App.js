import React from 'react';
import './App.css';
import BlogPost from './components/BlogPost.js';
import BlogPostsContainer from './components/BlogPostsContainer.js';
import Menu from './components/Menu.js';
import Categories from './components/Categories.js';
import LikesHandler from './components/LikesHandler.js';
import ModalWindow from './components/ModalWindow.js';
import Footer from './components/Footer.js';
import { postData } from './posts.js';

class App extends React.Component {
  constructor(props){
    super(props);
    const modal = {
      show: false,
      type: 'add'
    }
    this.state = {
      posts: postData,
      filter:'',
      type:'',
      show:false
    };

   this.changeFilter = this.changeFilter.bind(this);
   this.changeModal = this.changeModal.bind(this);

   this.deletePost = this.deletePost.bind(this);
   this.addPost = this.addPost.bind(this);
   
  }

  changeFilter(value){
    this.setState({
      filter: value
    })
  }
  changeModal(value, type){
    this.setState({     
        show: value,
        type: type     
    })
  }

  deletePost(id) {
    const updatedPostData = this.state.posts.filter((item) => item.id !== id);
    this.setState((prevState,props) => Object.assign({}, prevState, {posts: updatedPostData})); 
  }

  addPost(data) {
     this.setState((prevState,props) => {
       const posts = [];
       prevState.posts.forEach((item) => posts.push(item));
       posts.push(data);
       return Object.assign({}, prevState, {
         posts: posts, show: false
       });
     }) 
  }
  
  render() {
    const modal = this.state.show ? <ModalWindow  handler = {this.changeModal} addHandler = {this.addPost} typeModal={this.state.type} />:null

    return (
      <div>
        
        <Menu action = {this.changeFilter} handler = {this.changeModal}/>
        {modal}
        <Categories action = {this.changeFilter}/>
        <BlogPostsContainer data = {this.state.posts} filterValue = {this.state.filter} deleteHandler = {this.deletePost} showModalHandler = {this.changeModal}/>
        <Footer/>    
      </div>
    )
  }
}

export default App;
