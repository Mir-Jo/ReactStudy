import React from "react";

function Comment1(props){
  return (
    <div className = "comment">
      <UserInfo user = {props.author} />
        <Avatar user={props.author} />
        <div className="user-info-name">
          {props.author.name}
        </div>

      <div className="comment-text">
      {props.text}
      </div>

      <div className="comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}

export default Comment;