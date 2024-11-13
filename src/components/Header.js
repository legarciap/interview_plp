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
                <div className="background-secondary">
                    <Row>
                        <Col>
                            <p className="font-face-roboto-bold subtitle text-link color-primary my-auto">Rick and Morty PLP</p>
                        </Col>
                        <Col>
                        </Col>
                        {!window.location.href.includes("/homepage") && <Col xs={6} className="d-flex justify-content-end">
                            <FormatedMainButton text="Regresar al inicio" action={this.returnToHomePage} colorClass="button-primary" />
                        </Col>
                        }
                    </Row>
                </div>
            </>      
        );
    }
}

export default withRouter(Header);