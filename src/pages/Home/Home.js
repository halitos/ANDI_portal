import React from "react";
import "./Home.scss";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main d-flex">
      {/* <div>
        <Jumbotron>
          <h1>Hello</h1>
        </Jumbotron>
      </div> */}
      <Container className="left bg-danger text-white">
        <h1>Search for an ANDi like you</h1>
        <p>Find fellow ANDis that share your interest</p>
          <Link to="/results"><Button className="btn btn-light" size="lg">Search</Button></Link>
      </Container>
      <Container className="right">
        {" "}
        <h1>Add yourself</h1>
        <p>Register your details to find ANDis like you</p>
        <Link to="/signUp">
          <Button className="btn btn-dark" size="lg">Register</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Home;
