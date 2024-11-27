import React, { useState } from 'react'
import "./CommentItem.css";

import { AiFillStar } from "react-icons/ai";
import { formatDistanceToNow } from "date-fns";
import { BiLike } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Tooltip } from "@mui/material";


const CommentItem = (props) => {
    const { commentDetails, toggleLike, deleteComment, loginData } = props;
    const { id, rating, comment, isLiked, profileColors } =
        commentDetails;
    
  const liked = isLiked ? "liked" : "";


    const onClickLike = () => {
        toggleLike(id)
    }

    const onClickDeleteComment = () => {
        deleteComment(id)
    }

  return (
    <li className="comments-list-item">
      <h1
        className={`comment-profile`}
        style={{ backgroundColor: `${profileColors}` }}
      >
        {loginData[0].username[0].toUpperCase()}
      </h1>
      <div className="comment-details">
        <div className="comments-name-rating-time-container">
          <h1 className="comment-person-name">{loginData[0].username}</h1>
          <p className="comments-person-rating">
            {rating}
            <AiFillStar size={16} color="gold" />
          </p>
          <p className="comments-time">{formatDistanceToNow(new Date())}</p>
        </div>
        <p className="comments-desc">{comment}</p>
        <div className="comment-like-delete-container">
          <Tooltip title="Like" arrow>
            <button
              className={`comment-like ${liked}`}
              onClick={onClickLike}
            >
              <BiLike size={22} className={`like-icon ${liked}`} /> Like
            </button>
          </Tooltip>
          <Tooltip title="Delete" arrow>
            <button
              type="button"
              className="comments-delete-btn"
              onClick={onClickDeleteComment}
            >
              <MdDelete size={25} />
            </button>
          </Tooltip>
        </div>
      </div>
    </li>
  );
}

export default CommentItem
