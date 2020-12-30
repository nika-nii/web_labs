import React, {useEffect} from 'react'
import './Post.css'
import image from '../static/images/post_3.jpg'

function Post(props) {

    const post = props.post

    const content = post.content.map((piece) => {
            switch (piece.type) {
                case "text":
                    return <p className="card-text">
                        {piece.content}
                    </p>
                case "code":
                    return <pre><code>{piece.content}</code></pre>
                case "image":
                    return <img className="mx-auto d-block rounded post-img m-3 w-100" src={piece.content}
                                alt="Картинка в посте"/>
            }
            return <p>Неопознанный контент</p>
        }
    )

    // Для нумерации строк в коде. TODO: заменить эту дичь на какую-нибудь библиотеку
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "(function () {\n" +
            "            var pre = document.getElementsByTagName('pre'),\n" +
            "                pl = pre.length;\n" +
            "            for (var i = 0; i < pl; i++) {\n" +
            "                pre[i].innerHTML = '<span class=\"line-number\"></span>' + pre[i].innerHTML + '<span class=\"cl\"></span>';\n" +
            "                var num = pre[i].innerHTML.split(/\\n/).length;\n" +
            "                for (var j = 0; j < num; j++) {\n" +
            "                    var line_num = pre[i].getElementsByTagName('span')[0];\n" +
            "                    line_num.innerHTML += '<span>' + (j + 1) + '</span>';\n" +
            "                }\n" +
            "            }\n" +
            "        })();";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
            <div className="container py-3">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 p-1">
                        <div className="card">
                            <img className="post-img-top card-img-top" src={post.header_image}
                                 alt="Картинка у поста"/>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{post.date}</h6>
                                {content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Post;