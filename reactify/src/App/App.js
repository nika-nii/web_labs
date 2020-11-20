import React from 'react'
import './App.css';
import Header from "../Header/Header";
import PostList from "../PostList/PostList";
import Footer from "../Footer/Footer";
import CommentList from "../CommentList/CommentList";
import Post from "../Post/Post";

function App() {
  return (
    <div className="App">
        <Header/>
        <PostList/>
        <Post/>
        <CommentList/>
        <Footer/>
    </div>
  );
}

export default App;
