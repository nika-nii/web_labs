import React from 'react'
import PostsView from "../PostsView/PostsView";
import UserCard from "../UserCard/UserCard";

class UserView extends React.Component {
    render() {
        console.log(this.props)
        return (
            <main>
                <UserCard user_id={this.props.match.params.id}/>
                <PostsView user_id = {this.props.match.params.id}/>
            </main>
        )
    }
}

export default UserView;