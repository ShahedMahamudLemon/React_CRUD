import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const localUserId = localStorage.getItem("userId");
  const navigate = useNavigate();
  useEffect(() => {
    getPost();
  }, []);
  const getPost = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users/${localUserId}/posts`)
      .then((response) => {
        // console.log(response.data);
        const catchData = response.data;
        setPosts(catchData);
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  const deletePost = async (postId) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        alert("successfully deleted!!");
        getPost();
      })
      .catch((error) => {});
  };
  return (
    <div>
      <Container>
        <h1 className="bg-secondary p-3 text-warning text-center">
          Welcome to News Feed
        </h1>
        <p className="display-4 my-3">Here in this page you can see posts</p>
      </Container>
      {localUserId ? (
        <>
          <Container>
            <Row>
              {posts.map((arrEl) => {
                return (
                  <>
                    <Col sm={12} md={6} lg={4}>
                      <Card className="my-2">
                        <Card.Body>
                          <Card.Title>{arrEl.title}</Card.Title>
                          <Card.Text>{arrEl.body}</Card.Text>
                          <Button
                            variant="danger"
                            className="mx-1"
                            onClick={() => {
                              deletePost(arrEl.id);
                            }}
                          >
                            Delete
                          </Button>
                          <Button
                            variant="success"
                            className="mx-1"
                            onClick={() => {
                              navigate("/update", { state: { arrEl } });
                            }}
                          >
                            Update
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                );
              })}
            </Row>
          </Container>
        </>
      ) : (
        <>
          <h5 className="text-center p-4">
            No post to show. Login to see posts
          </h5>
        </>
      )}
    </div>
  );
};

export default HomePage;
