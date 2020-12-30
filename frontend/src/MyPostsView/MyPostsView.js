import React from 'react'
import PostsView from "../PostsView/PostsView";
import ApiService from "../Services/ApiService";
import {createBrowserHistory} from 'history'
import {Link} from "react-router-dom";
import PostList from "../PostList/PostList";
import AuthService from "../Services/AuthServices";

class MyPostsView extends React.Component {

    apiservice = new ApiService();
    authservice = new AuthService();

    state = {
        posts: null,
    }

    componentDidMount() {
        this.apiservice
            .getMyPosts()
            .then((data) => {
                if (data) {
                    this.setState({
                        posts: data,
                    })
                }
            })
    }

    render() {
        if (this.authservice.isLogged()){
            const posts = this.state.posts
            if (posts)
                return <PostList posts={this.state.posts}/>
            else
                return (
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                )
        }else{
            const history = createBrowserHistory()
            history.push('/login')
            window.location.reload()
        }
    }
}

export default MyPostsView;