import React from 'react'
import PostsView from "../PostsView/PostsView";
import ApiService from "../Services/ApiService";
import { createBrowserHistory } from 'history'
import {Link} from "react-router-dom";

class MyPostsView extends React.Component {

    apiservice = new ApiService();

    state = {
        user_id: null,
    }

    componentDidMount() {
        this.apiservice
            .getUserId()
            .then((data) => {
                if (data){
                    this.setState({
                        user_id: data.user_id,
                    })
                }
            })
    }

    render() {
        const user_id = this.state.user_id;
        if (user_id){
            return (
                <PostsView user_id={user_id}/>
            )
        }else{
            // const history = createBrowserHistory()
            // history.push('/login')
            // window.location.reload()
            return <Link to="/login">Залогиньтесь</Link>
        }
    }
}

export default MyPostsView;