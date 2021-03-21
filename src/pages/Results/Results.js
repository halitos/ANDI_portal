import React, { useState } from 'react';
import './Results.scss';
import {Container, Row, Col, Card, Form, Button} from "react-bootstrap";
import andis from '../../data/andis.json';

const Results = () => {
    const [term, setTerm] = useState('');
    const [searched, setSearched] = useState(false);
    const [results, setResults] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearched(true);

        const lowerTerm = term.toLowerCase();

        const localAndis = localStorage.getItem('andis') ? JSON.parse(localStorage.getItem("andis")): []
        const allAndis = [...andis, ...localAndis];

        const matches = allAndis.filter(andi => {
            const name = andi.name.toLowerCase();
            const role = andi.role.toLowerCase();
            const title = andi.title.toLowerCase();

            return name.includes(lowerTerm) || role.includes(lowerTerm) || title.includes(lowerTerm)
        })

        setResults(matches);
    }

    return <div className="Results">
        <Container fluid className="h-100">
            <Row className="align-items-stretch h-100">
                <Col className="Results__form" xs={12} sm={4}>
                    <Form className="p-4 mt-2" onSubmit={handleSubmit}>
                        <h1 className="h2">Search for an ANDi like you</h1>
                        <p className="text-muted">Find fellow ANDis that share your interests</p>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name, role or AND title</Form.Label>
                            <Form.Control type="text" size="lg" onChange={e => setTerm(e.target.value)}/>
                        </Form.Group>

                        <Button variant="dark" type="submit" size="lg" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col className="Results__andis pt-4" xs={12} sm={8}>
                    {(searched && !results.length) && (
                        <div className="Results__gif">
                            <img src="https://media.giphy.com/media/l1KVaj5UcbHwrBMqI/giphy.gif" alt="Not Found"/>
                            <h3 className="h3 text-white mt-4">No results found, try something else.</h3>
                        </div>
                    )}

                    {!searched && (
                        <div className="Results__gif">
                            <img src="https://media.giphy.com/media/JPV8lNtI59zaWyL4pf/giphy.gif" alt="Search Something"/>
                            <h3 className="h3 text-white mt-4">Try searching for an ANDi by name, role or AND title.</h3>
                        </div>
                    )}

                    {(searched && term !== "") && (
                        <div className="px-4 Results__grid">
                            {results.map((result, index) =>
                                <Card className="Card" key={index}>
                                    <Card.Img variant="top" src={result.gif}/>
                                    <Card.Body>
                                        <Card.Title>
                                            {result.name}
                                        </Card.Title>
                                        <Card.Text className="text-muted">{result.role} AND <strong className="Title">{result.title}</strong></Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    </div>
}

export default Results;