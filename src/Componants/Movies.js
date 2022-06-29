
import Sample from '../JsonFile/sample.json';
import * as React from "react";
import { Row, Col, Card } from "react-bootstrap";


function Movies() {
    return (
        <div >

            <nav class="nav nav-pills bg-dark">
                <div style={{ color: "white", marginLeft: "10%" }}>Popular Movies</div>

            </nav>
            <Row>

                {Sample.map(j1 => {


                    return (
                        j1.entries.map(j2 => {

                            return j2.programType === 'movie' ? (


                                <Col md={2} style={{ marginTop: '2%' }}>
                                    <Card style={{ width: '10rem', height: '100%' }}>
                                        <Card.Img variant="top" src={j2.images["Poster Art"].url} />
                                        <Card.Body>
                                            <Card.Title>{j2.title}</Card.Title>

                                        </Card.Body>
                                    </Card>
                                </Col>




                            ) : ""

                        })


                    )

                }


                )}



            </Row>

        </div >
    );
}

export default Movies;
