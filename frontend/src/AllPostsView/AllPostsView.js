import React from 'react'
import PostsView from "../PostsView/PostsView";

class AllPostsView extends React.Component {
    render() {
        return (
            <PostsView no_user={true}/>
        )
    }
}

export default AllPostsView;