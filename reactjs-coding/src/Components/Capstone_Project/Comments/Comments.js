import React, { useEffect, useState } from "react";
import "./Comments.css";

import { v4 as uuid4 } from "uuid";
import { FaRegCommentDots } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import axios from "axios";
import CommentItem from "../CommentItem/CommentItem";

const Comments = () => {
  const [loginData, setLoginData] = useState([]);
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [errorMsgRating, setErrorMsgRating] = useState(false);
  const [errorMsgComment, setErrorMsgComment] = useState(false);

  useEffect(() => {
    getLoginData();
  }, []);

  const getLoginData = async () => {
    const loggedInValues = localStorage.getItem("userDetails");
    const emailValue = JSON.parse(loggedInValues).email.toLowerCase();
    // console.log("email:", emailValue);

    const url = `http://localhost:3000/login?email=${emailValue}`;
    const response = await axios.get(url);
    if (response.status === 200) {
      setLoginData(response.data);
    }
  };

  // const commentValues = {
  //   rating: "",
  //   comment: "",
  // };

  // const formDetails = useForm(commentValues);
  // const { register, control, handleSubmit, formState } = formDetails;

  // const { errors } = formState;

  const initialLetterColors = [
    "blue",
    "deepskyblue",
    "black",
    "green",
    "violet",
    "purple",
    "aqua",
    "pink",
    "orange",
    "silver",
    "gold",
    "grey",
  ];

  // const onSubmitComment = (data) => {
  //   setCommentList((prev) => [...prev, data]);
  // };

  const onChangeRating = (e) => {
    setRating(e.target.value);
  };

  const onChangeComments = (e) => {
    setComment(e.target.value);
  };

  const onSubmitComment = (e) => {
    e.preventDefault();
    if (rating !== "" && comment !== "") {
      const profileColors =
        initialLetterColors[Math.ceil(Math.random() * 10 - 1)];
      const newComment = {
        id: uuid4(),
        rating,
        comment,
        isLiked: false,
        profileColors,
      };
      setCommentList((prev) => [...prev, newComment]);
      setErrorMsgRating(false);
      setErrorMsgComment(false);
      setRating("");
      setComment("");
    } else if (rating === "" && comment === "") {
      setErrorMsgRating(true);
      setErrorMsgComment(true);
    } else if (rating === "" && comment !== "") {
      setErrorMsgRating(true);
      setErrorMsgComment(false);
    } else if (comment === "" && rating !== "") {
      setErrorMsgRating(false);
      setErrorMsgComment(true);
    }
  };

  const deleteComment = (id) => {
    const filteredComments = commentList.filter((each) => each.id !== id);
    setCommentList(filteredComments);
  };

  const toggleLike = (id) => {
    setCommentList(prev => prev.map(eachItem => {
      if (eachItem.id === id) {
        return {...eachItem, isLiked: !eachItem.isLiked}
      }
      return eachItem
    }))
  };

  return (
    <div className="comments-container">
      <h1 className="comments-heading">Comments</h1>
      <form className="comments-form-container" onSubmit={onSubmitComment}>
        <div className="comments-input-container">
          <label htmlFor="Rating" className="rating-label">
            Rating
          </label>
          <input
            type="text"
            id="Rating"
            className="comments-rating form-control"
            pattern="[1-4](\.\d)?$|^5(\.0)?$"
            onChange={(e) => onChangeRating(e)}
            value={rating}
          />
          {errorMsgRating && <p className="comments-error-msg">*Required</p>}
        </div>
        <div className="comments-input-container">
          <label htmlFor="Comments" className="comments-label">
            Description
          </label>
          <textarea
            id="Comments"
            className="comments-input form-control"
            rows={6}
            cols={40}
            onChange={(e) => onChangeComments(e)}
            value={comment}
          />
          {errorMsgComment && <p className="comments-error-msg">*Required</p>}
        </div>
        <Tooltip title="Add Comment" arrow>
          <button type="submit" className="comments-add-btn btn btn-secondary">
            Add Comment
          </button>
        </Tooltip>
      </form>
      <hr className="comments-hr" />
      {commentList.length === 0 ? (
        <div className="no-comments-container">
          <FaRegCommentDots size={145} className="no-comments-img" />
          <h1 className="no-comments-heading">No Comments</h1>
          <p className="no-comment-desc">Please leave a comment</p>
        </div>
      ) : (
        <ul className="comments-list-details-container">
          <div className="comments-length-heading-container">
            <p className="comments-length">{commentList.length}</p>
            <h1 className="comments-name-heading">Comments</h1>
          </div>
          {commentList.map((eachItem) => (
            <CommentItem
              toggleLike={toggleLike}
              deleteComment={deleteComment}
              commentDetails={eachItem}
              loginData={loginData}
              key={eachItem.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comments;
