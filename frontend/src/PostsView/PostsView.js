import React from 'react'
import PostList from "../PostList/PostList";
import post_image from "../static/images/post_1.png";

class PostsView extends React.Component {
    render() {
        const posts = [
            {
                post_image: post_image,
                post_title: "Linux",
                post_text: "В начале месяца некоторые горожане получили квитанции за коммунальные услуги, в графах которых были проставлены нули. Забавно, что они были проставлены и в графе «количество проживающих в квартире». Думаю, что именно в этом случае, Linux тут ни при чём.",
                post_link: "post"
            },
            {
                post_image: post_image,
                post_title: "React",
                post_text: "Иногда возникает такая ситуация: ты объясняешь кому-то, что такое React. Например, человек звонит тебе, и спрашивает: «Как пользоваться React?». Если у вас были подобные ситуации, то вы представляете, насколько сложно это объяснить по телефону.",
                post_link: "react"
            },
            {
                post_image: post_image,
                post_title: "Django",
                post_text: "Когда тебе приснится Django, ты поймешь, как приятно быть просто программой. Даже с глюками. Вот уже семь лет, и ни одного дня без весточки от Django.",
                post_link: "django"
            },
            {
                post_image: post_image,
                post_title: "Django",
                post_text: "Когда тебе приснится Django, ты поймешь, как приятно быть просто программой. Даже с глюками. Вот уже семь лет, и ни одного дня без весточки от Django.",
                post_link: "django"
            },
            {
                post_image: post_image,
                post_title: "Django",
                post_text: "Когда тебе приснится Django, ты поймешь, как приятно быть просто программой. Даже с глюками. Вот уже семь лет, и ни одного дня без весточки от Django.",
                post_link: "django"
            },
            {
                post_image: post_image,
                post_title: "Django",
                post_text: "Когда тебе приснится Django, ты поймешь, как приятно быть просто программой. Даже с глюками. Вот уже семь лет, и ни одного дня без весточки от Django.",
                post_link: "django"
            },
            {
                post_image: post_image,
                post_title: "Django",
                post_text: "Когда тебе приснится Django, ты поймешь, как приятно быть просто программой. Даже с глюками. Вот уже семь лет, и ни одного дня без весточки от Django.",
                post_link: "django"
            },
        ]
        return (
            <main>
                <PostList posts={posts}/>
            </main>
        )
    }
}

export default PostsView;