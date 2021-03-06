import React from 'react'
import { useState } from 'react';
import Post from '../Post/Post'

function Wall() {

    const [posts, setPosts] = useState([
        {
            id: 2,
            author: {
                id: 1,
                avatar: 'https://lms.openjs.io/logo_js.svg',
                name: 'OpenJS'
            },
            content: 'Ну как вы справились с домашкой?',
            photo: null,
            hit: true,
            likes: 222,
            likedByMe: true,
            hidden: false,
            tags: ['deadline', 'homework'],
            created: 1603774800
        },
        {
            id: 1,
            author: {
                id: 1,
                avatar: 'https://lms.openjs.io/logo_js.svg',
                name: 'OpenJS'
            },
            content: null,
            photo: {
                url: 'https://lms.openjs.io/openjs.jpg',
                alt: 'openjs logo'
            },
            hit: true,
            likes: 10,
            likedByMe: false,
            hidden: true,
            created: 1603501200
        }
    ])

    const handlePostLike = (id) => {
        setPosts((prevNewPosts) => {
            return prevNewPosts.map(post => {
                if (post.id !== id) {
                    return post
                }
                return { ...post, likedByMe: !post.likedByMe, likes: post.likedByMe ? post.likes - 1 : post.likes + 1 }
            })
        });
    };

    const handlePostRemove = (id) => {

        setPosts((prevState) => prevState.filter(o => o.id !== id));
    }

    const handlePostHide = (id) => {
        setPosts((prevNewPosts) => {
            return prevNewPosts.map(post => {
                if (post.id !== id) {
                    return post
                }
                return { ...post, hidden: !post.hidden }
            })
        });
    }

    const handlePostShow = (id) => {
        setPosts((prevState) => prevState.map(o => {
            if (o.id !== id) {
                return o;
            }

            const hidden = false;
            return { ...o, hidden };
        }));
    }

    return (
        <div>
            {posts.map(p =>
                <Post key={p.id}
                    post={p}
                    onLike={() => handlePostLike(p.id)}
                    onRemove={() => handlePostRemove(p.id)}
                    onHide={() => handlePostHide(p.id)}
                    onShow={() => handlePostShow(p.id)} />)}
        </div>
    );
}

export default Wall;