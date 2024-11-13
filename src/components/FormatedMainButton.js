import React, { Component } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import '../styles/components/button.scss';

export class FormatedMainButton extends Component {

    render() {
        return (
            <Button disabled={this.props.disabled || false} className={`${this.props.colorClass || 'background-primary'} styled-button font-face-roboto-light`} onClick={this.props.action}>
                {
                    this.props.isLoading && (
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className="mr-3"
                        />
                    )
                }
                {this.props.text}
            </Button>
        );
    }
}

export default FormatedMainButton;