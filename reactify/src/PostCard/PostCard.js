import React from 'react'
import './PostCard.css'

function PostCard(props) {
    return (
        <div className="card">
            <img className="post-img-top card-img-top" src={props.image} alt="Картинка у поста"/>
                <div className="card-body">
                    <h5 className="card-title">Заголовок поста</h5>
                    <p className="card-text">Рыба рыбка лорем ипсум</p>
                    <a href="content.html" className="btn btn-primary">Читать далее...</a>
                </div>
        </div>
    )
}

export default PostCard;