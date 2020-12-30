import React from 'react'
import PostsView from "../PostsView/PostsView";

class MyPostsView extends React.Component {
    render() {
        // Получить инфу о том, залогинен пользователь или нет
        // Получить id пользователя
        // Вернуть или PostsView, или редирект
        const user_id = 0;
        return (
            <PostsView user_id={user_id}/>
        )
    }
}

export default MyPostsView;