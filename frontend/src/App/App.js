import React from 'react'
import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import PostView from "../PostView/PostView";
import LoginView from "../LoginView/LoginView";
import MyPostsView from "../MyPostsView/MyPostsView";
import AllPostsView from "../AllPostsView/AllPostsView";
import RegisterView from "../RegisterView/RegisterView";
import UserView from "../UserView/UserView";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/" component={AllPostsView}/>
                <Route exact path="/about" component={MyPostsView}/>
                <Route path="/user/:id" component={UserView}/>
                <Route path="/post/:id" component={PostView}/>
                <Route exact path="/login" component={LoginView}/>
                <Route exact path="/register" component={RegisterView}/>
            </Switch>
        </div>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
