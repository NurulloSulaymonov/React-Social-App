import React from 'react'
import Post from '../Post/Post'

function Wall() {
    const posts = [
        {
            id: 2,
            author: {
                id: 1,
                avatar: 'https://lms.openjs.io/logo_js.svg',
                name: 'OpenJs'
            },
            content: 'Ну как вы справились с домашкой?',
            photo: null,
            hit: true,
            likes: 222,
            likedByMe: true,
            created: 1603501200
        },
        {
            id: 1,
            author: {
                id: 1,
                avatar: 'https://lms.openjs.io/logo_js.svg',
                name: 'OpenJs'
            },
            content: null,
            photo: {
                url: 'https://lms.openjs.io/openjs.jpg',
                alt: 'openjs logo'
            },
            hit: true,
            likes: 10,
            likedByMe: true,
            tags: ['deadline', 'homework'],
            created: 1603501200
        }
    ]

    return (
        <div>
            {posts.map(p => <Post key={p.id} post={p} />)}
        </div>
    );
}

export default Wall;