import React from 'react'
import './PostCard.css'

function PostCard(props) {
    return (
        <div className="card h-100">
            <img className="post-img-top card-img-top" src={props.post_image} alt="Картинка у поста"/>
                <div className="card-body">
                    <h5 className="card-title">{props.post_title}</h5>
                    <p className="card-text">{props.post_text}</p>
                    <a href={props.post_link} className="btn btn-primary">Читать далее...</a>
                </div>
        </div>
    )
}

export default PostCard;