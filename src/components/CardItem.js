import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/components/card.scss';

export class CardItem extends Component {

    render() {
        return (
            <Link to={`/item-details/${this.props.id}`} style={{ textDecoration: 'none' }}>
                <Card style={{ width: '18rem' }} className="card-with-effect mb-3">
                    <Card.Img variant="top" src={this.props.image} />
                    <Card.Body className="background-primary">
                        <Card.Title className="font-face-roboto-bold color-secondary">{this.props.name}</Card.Title>
                        <Card.Text className="font-face-roboto-light color-secondary">{this.props.species}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        );
    }
}

export default CardItem;