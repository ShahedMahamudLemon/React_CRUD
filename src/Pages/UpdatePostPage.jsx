import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";

const UpdatePostPage = () => {
  const localUserId = localStorage.getItem("userId");
  const location = useLocation();
  const [postData, setPostData] = useState(location.state.arrEl);
  const postUpdate = async () => {
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
      .patch(
        `https://jsonplaceholder.typicode.com/posts/${postData.id}`,
        postData
      )
      .then((response) => {
        setPostData(response.data);
        alert("Post updated successfully!!");
      })
      .catch((error) => {
        // console.log(error);
      });
    document.getElementById("title").value = "";
    document.getElementById("body").value = "";
  };
  return (
    <>
      {localUserId ? (
        <>
          {postData ? (
            <>
              <div>
                <Card className="my-2">
                  <Card.Body className="p-5">
                    <Card.Title>{postData.title}</Card.Title>
                    <Card.Text>{postData.body}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </>
          ) : (
            <>
              <h5 className="text-center p-4 display-4">
                Failed to load the post!!
              </h5>
            </>
          )}
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
              />
            </div>
            <button
              className="btn btn-warning my-2"
              onClick={() => {
                postUpdate();
              }}
            >
              Update
            </button>
          </div>
        </>
      ) : (
        <>
          <h5 className="text-center p-4 display-4">
            Login and select post to update
          </h5>
        </>
      )}
    </>
  );
};

export default UpdatePostPage;
