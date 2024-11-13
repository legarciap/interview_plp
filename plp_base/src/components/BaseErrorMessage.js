import { faBomb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import FormatedMainButton from './FormatedMainButton';

export class BaseErrorMessage extends Component {

    render() {
        return (
            <>
                <FontAwesomeIcon icon={this.props.icon || faBomb} size="9x" />
                <p className="title font-face-roboto-bold color-primary mt-5 mb-3">{this.props.errorMessage || 'Ha ocurrido un error desconocido!'}</p>
                <FormatedMainButton text={this.props.buttonText || 'Atrás'} action={this.props.action} colorClass="button-primary" />
            </>
        );
    }
}

export default withRouter(BaseErrorMessage);