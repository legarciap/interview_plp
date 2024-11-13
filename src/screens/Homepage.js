import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ItemsList from './ItemsList';

export class Homepage extends Component {

    render() {
        return (
            <>
                <ItemsList />
            </>      
        );
    }
}

export default withRouter(Homepage);

