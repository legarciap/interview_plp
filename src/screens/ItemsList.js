import React from 'react';
import { CardDeck, Col, Container, Row } from 'react-bootstrap';
import Api from '../api/api';
import CardItem from '../components/CardItem';
import ErrorButton from '../components/ErrorButton';
import BaseErrorModal from '../components/modals/BaseErrorModal';
import SearchBar from '../components/SearchBar';
import ErrorPage from './ErrorPage';
import Loading from './Loading';

class ItemsList extends React.Component {

    state = {
        items: [],
        page: 1,
        isLoading: true,
        fetchDataError: null,
        areResultsFiltered: false,
    }

    initialFetch = () => {
        this.setState({ areResultsFiltered: false });
        this.setState({ isLoading: true });
        Api.getAllCharacters().then((response) => {
            this.apiCallForFetchCharacters(response, Api.getCharactersByPage);
        });
    }

    modalClose = () => {
        this.setState({ fetchDataError: false });
        this.initialFetch();
    }

    apiCallForFetchCharacters = (response, apicall, name = null) => {
        const promises = [];
        this.setState({ items: response.data.results });
            for (let i = 2; i <= response.data.info.pages; i++) {
                if (name) promises.push(apicall({ 'page': i, 'name': name}));
                else promises.push(apicall({ 'page': i }));
            }
            Promise.all(promises).then((results) => {
                results.forEach((item) => {
                    this.setState({
                        items: this.state.items.concat(item.data.results)
                    });
                })
                this.setState({ isLoading: false });
            }).catch((err) => {
                this.setState({ isLoading: false });
                this.setState({ fetchDataError: 'UNABLE_TO_LOAD_DATA' });
            })
    }

    doFiltering = (parameter) => {
        this.setState({ isLoading: true });
        this.setState({ items: [] });
        // TO DO: Implement filtering
    }

    componentDidMount() {
        // do api call
        this.initialFetch();
    }

    render() {
        let list = null;
        if (!this.state.isLoading && !this.state.fetchDataError) {
            list = this.state.items.map((character) => (
                <CardItem name={character.name} id={character.id} key={character.id} image={character.image} species={character.species} />
            ))
        }
        return (
            <>
                {this.state.isLoading && !this.state.fetchDataError ? 
                    <Loading /> :
                    this.state.fetchDataError ?
                    <ErrorPage 
                        error={
                            this.state.fetchDataError === 'CANT_DO_FILTERING' ?
                            'No hay personajes con ese nombre!' :
                            'No hemos podido reunir a los personajes, intenta de nuevo más tarde'
                        } 
                    />
                    : list && (
                        <>
                        <Container fluid className="mx-2 px-lg-5 mt-4">
                            <Row className="mt-xs-3 mt-lg-5">
                                <Col xs={this.state.areResultsFiltered ? 8 : 12} md={this.state.areResultsFiltered ? 8 : 12}>
                                    <SearchBar filter={this.doFiltering} />
                                </Col>
                                <Col xs={this.state.areResultsFiltered ? 4 : 12} md={this.state.areResultsFiltered ? 4 : 12} className="d-flex justify-content-end pr-3">
                                    { this.state.areResultsFiltered && <ErrorButton text="Quitar filtro" action={this.initialFetch} /> }
                                </Col>
                            </Row>
                            <Row className="mt-5 d-flex">
                                <CardDeck className="justify-content-center">
                                    { list }
                                </CardDeck>
                            </Row>
                            <BaseErrorModal show={this.state.fetchDataError} handleClose={this.modalClose} errorMessage="Ha ocurrido un error al intentar obtener los artículos, intenta de nuevo más tarde" />
                        </Container>
                        </>
                    )
                }
            </>
        );
    }
}

export default ItemsList;