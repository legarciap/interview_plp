import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import FormatedMainButton from './FormatedMainButton';

export class Header extends Component {

    constructor(props) {
        super(props);
    }

    returnToHomePage = () => {
        this.props.history.replace('/homepage');
    }

    render() {
        return (
            <>
                <Container fluid className="py-2 background-secondary">
                    <Row className="d-flex align-items-center px-1 px-lg-2">
                        <Col xs={4}>
                            <p className="font-face-roboto-bold subtitle text-link color-primary my-auto">Rick and Morty PLP</p>
                        </Col>
                        <Col xs={2}>
                        </Col>
                        {!window.location.href.includes("/homepage") && <Col xs={6} className="d-flex justify-content-end">
                            <FormatedMainButton text="Regresar al inicio" action={this.returnToHomePage} colorClass="button-primary" />
                        </Col>
                        }
                    </Row>
                </Container>
            </>      
        );
    }
}

export default withRouter(Header);