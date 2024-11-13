import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class BaseErrorModal extends React.Component {

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Oh no!</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.errorMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default BaseErrorModal;