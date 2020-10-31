import React from 'react'
import Tags from '../Tags/Tags';
import './Post.css'

function Post({ post }) {
    const { author } = post;
    const { photo } = post;

    return (
        <article>
            <header>
                <img className="Post-avatar" src={author.avatar} width="50" height="50" alt={author.name} />
                <h5>{post.author.name}</h5>
                <div>{post.created}</div>
                {post.hit ? <span>HIT</span> : null}
            </header>
            <div>
                {<div className="Post-content">{post.content}</div>}
                {photo && <img src={photo.url} alt={photo.alt} className="Post-photo" />}
            </div>
            <footer>
                <span className="Post-likes">
                    <img src={"https://lms.openjs.io/" + (post.likedByMe === true ? "" : "un") + "liked.svg"} width="20" height="20" alt="likes" />
                    <span className="Post-likes-count">{post.likes}</span>
                    {post.tags && <Tags tags={post.tags} />}
                </span>
            </footer>
        </article>
    )
}

export default Post
