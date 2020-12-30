import React from 'react'
import PostList from "../PostList/PostList";
import ApiService from "../Services/ApiService";
class PostsView extends React.Component {

    apiservice = new ApiService()
    state = {
        posts: null
    }

    componentDidMount() {
        if (this.props.no_user){
            this.apiservice.getAllPosts()
                .then((posts) => {
                    this.setState({
                        posts: posts
                    })
                })
        }else{
            let user_id = null
            if (this.props.user_id){
                user_id = this.props.user_id
            }else{
                user_id = this.props.match.params.id
            }
                this.apiservice.getPosts(user_id)
                    .then((posts) => {
                        this.setState({
                            posts: posts
                        })
                    })
            }
    }

    render() {

        const { posts } = this.state

        if (posts != null) {
            return (
                <main>
                    <PostList posts={posts} />
                </main>
            )
        } else {
            return <div>Ничего нет</div>
        }

    }
}

export default PostsView;