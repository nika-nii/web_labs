import React from 'react'
import './App.css';
import Header from "../Header/Header";
import PostList from "../PostList/PostList";
import Footer from "../Footer/Footer";
import CommentList from "../CommentList/CommentList";

function App() {
  return (
    <div className="App">
        <Header/>
        <PostList/>
        <CommentList/>
        <Footer/>
    </div>
  );
}

export default App;
