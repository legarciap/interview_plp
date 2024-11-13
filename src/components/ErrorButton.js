import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import '../styles/components/button.scss';

export class ErrorButton extends Component {
    render() {
        return (
            <Button className="button-danger" onClick={this.props.action}>
                <FontAwesomeIcon icon={faTimes} size="1x" className="mx-auto" />
                {this.props.text || ''}
            </Button>
        );
    }
}

export default ErrorButton;
