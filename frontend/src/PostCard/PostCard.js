import React from 'react'
import './PostCard.css'
import {Link} from "react-router-dom";

function PostCard(props) {
    return (
        <div className="card h-100">
            <img className="post-img-top card-img-top" src={props.header_image} alt="Картинка у поста"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <Link to={props.link} t className="btn btn-primary">Читать далее...</Link>
                </div>
        </div>
    )
}

export default PostCard;