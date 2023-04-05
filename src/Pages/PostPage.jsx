import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostPage = () => {
  const localUserId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const postDetails = async () => {
    const postTitle = document.getElementById("title").value;
    const postBody = document.getElementById("body").value;

    const postData = {
      title: postTitle,
      body: postBody,
      userId: localUserId,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    await axios
      .post("https://jsonplaceholder.typicode.com/posts", postData)
      .then((response) => {
        //   console.log(response.data);
        alert("Post created successfully!!");
        navigate("/home");
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <>
      {localUserId ? (
        <>
          <div className="bg-secondary p-5">
            <div className="form-group">
              <label htmlFor="formGroupExampleInput" className="text-white">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="post title.."
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2" className="text-white">
                Body
              </label>
              <textarea
                type="text"
                className="form-control"
                id="body"
                placeholder="post body..."
                required
              />
            </div>
            <button
              className="btn btn-success my-2"
              onClick={() => {
                postDetails();
              }}
            >
              Create Post
            </button>
          </div>
        </>
      ) : (
        <>
          <h5 className="text-center p-4 display-4">Login to create post</h5>
        </>
      )}
    </>
  );
};

export default PostPage;
