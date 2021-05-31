import React, { useState } from "react";
import "./RegisterForm/Results.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const localAndis = localStorage.getItem("andis")
      ? JSON.parse(localStorage.getItem("andis"))
      : [];

    const id = await axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=V3bahSV8aQmrDBbW0ZBul3qbBa7TSs05&q=${title}&limit=1&offset=0&rating=g&lang=en`
      )
      .then((results) => {
        return results.data.data[0].id;
      });

    const gif = `https://media.giphy.com/media/${id}/giphy.gif`;

    localStorage.setItem(
      "andis",
      JSON.stringify([...localAndis, { name, role, title, gif }])
    );
    window.location.href = "/results";
  };

  return (
    <div className="Results">
      <Container fluid className="h-100">
        <Row className="align-items-stretch h-100">
          <Col className="Results__form" xs={12} sm={4}>
            <Form className="p-4 mt-2" onSubmit={handleSubmit}>
              <h1 className="h2">Search for an ANDi like you</h1>
              <p className="text-muted">
                Find fellow ANDis that share your interests
              </p>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  size="lg"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  type="text"
                  size="lg"
                  onChange={(e) => setRole(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>AND Title</Form.Label>
                <Form.Control
                  type="text"
                  size="lg"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="dark"
                type="submit"
                size="lg"
                onClick={handleSubmit}
              >
                Add Yourself
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterForm;
