import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Api from '../api/api';
import ErrorPage from './ErrorPage';
import Loading from './Loading';
import '../styles/components/toast.scss';

class ItemDetails extends React.Component {
    state = {
        isLoading: true,
        character: {},
        fetchDataError: false,
        isUpdatingCart: false,
        isItemAdded: false,
        showToast: false,
    }
    
    componentDidMount() {
        const { id } = this.props.match.params;
        Api.getSingleCharacter(id).then((response) => {
            this.setState({ character: response.data });
            this.setState({ isLoading: false });
        }).catch((err) => {
            this.setState({ isLoading: false });
            this.setState({ fetchDataError: true });
        })
    }

    addItemToCart = () => {
        this.setState({ isUpdatingCart: true });
        const { name, status, species, gender, image, origin, id } = this.state.character;
        let cartItems = JSON.parse(localStorage.getItem('cartItems'));
        if(!cartItems) {
            localStorage.setItem("cartItems", JSON.stringify([{
                name,
                status,
                species,
                gender,
                image,
                id,
                origin: origin.name
            }]));
            this.setState({ isItemAdded: true });
        } else {
            if (!(cartItems.some(element => element.id === id))) {
                cartItems.push({
                    name,
                    status,
                    species,
                    gender,
                    image,
                    id,
                    origin: origin.name
                });
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                this.setState({ isItemAdded: true });
            } else {
                this.setState({ isUniqueError: true });
            }
        }
        this.setState({ showToast: true });
    }

    render() {
        console.log(this.state.character);
        return (
            <>
                {this.state.isLoading ?
                    <Loading /> :
                    this.state.fetchDataError ?
                    <ErrorPage /> :
                    !(Object.keys(this.state.character).length === 0 && this.state.character.constructor === Object) &&
                        <Container fluid className="full-container background-primary pt-5">
                            <Row>
                                <Col xs={12} md={8} className="d-flex justify-content-center">
                                    <Image src={this.state.character.image} roundedCircle className="img-fluid" />
                                </Col>
                                <Col xs={12} md={4} className="mt-4 mt-md-0">
                                    <p className="font-face-roboto-bold text-primary title">{this.state.character.name}</p>
                                    <p className="font-face-roboto-light text-primary subtitle">{this.state.character.status}</p>
                                    <p className="font-face-roboto-light text-primary subtitle">{this.state.character.species}</p>
                                    { this.state.character.type && <p className="font-face-roboto-light text-primary subtitle">{this.state.character.type}</p> }
                                    <p className="font-face-roboto-light text-primary subtitle">{this.state.character.gender}</p>
                                    <p className="font-face-roboto-light text-primary subtitle">{this.state.character.origin.name}</p>
                                </Col>
                            </Row>
                        </Container>
                }
            </>
        );
    }
}

export default ItemDetails;