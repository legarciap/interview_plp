import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

export class SearchBar extends Component {
    state = {
        name: '',
        status: true,
    }

    validateInput = () => {
        if (!this.state.name) this.setState({ status: false });
        else {
            this.setState({ status: true });
            this.props.filter(this.state.name);
        }
    }

    render() {
        return (
            <>
                <InputGroup className="ml-0">
                    <FormControl
                        placeholder="Nombre del personaje"
                        aria-label="characterName"
                        aria-describedby="basic-addon"
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                    />
                    <InputGroup.Append>
                        <Button className="button-primary">
                            <FontAwesomeIcon icon={faSearch} size="1x" />
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
                {!this.state.status && <p className="font-face-roboto-light" style={{ color: 'red'}}>Este campo es obligatorio</p> }
            </>
        );
    }
}

export default SearchBar;