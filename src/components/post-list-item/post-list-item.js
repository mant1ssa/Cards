import React from "react";

const PostListItem = ({id, text}) => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                {text}
            </span>
        </li>
    )
}

export default PostListItem;