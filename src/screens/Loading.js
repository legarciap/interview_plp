import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

class Loading extends React.Component {
    render() {
        return (
            <>
                <Container>
                <Row>
                    <Col className="mt-5 justify-content-center">
                        <Row>
                            <Col className="text-center">
                                <Spinner animation="grow" variant="primary" className="mx-3" />
                                <Spinner animation="grow" variant="primary" className="mx-3" />
                                <Spinner animation="grow" variant="primary" className="mx-3" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="title font-face-roboto-light color-primary text-center mt-3">Cargando</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}

export default Loading;