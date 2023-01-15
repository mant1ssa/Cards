import React from "react";
import PostListItem from "../post-list-item";
import './post-list.css';

const PostList = ({list}) => {
    return (
        <ul className="app-list list-group">
            {list.map((item) => {
                return <PostListItem key={item.id} text={item.text}/>
            })}
        </ul>
    )
}

export default PostList;