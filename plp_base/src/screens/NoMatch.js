import { faGhost } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { withRouter } from 'react-router';
import { BaseErrorMessage } from '../components/BaseErrorMessage';

// DEFAULT 404 PAGE
class NoMatch extends React.Component {
    goToHomePage = () => {
        this.props.history.replace('/homepage');
    }

    render() {
        return (
            <>
                <div className="text-center mt-5">
                    <BaseErrorMessage action={this.goToHomePage} errorMessage="No hemos podido encontrar lo que estas buscando" icon={faGhost} buttonText="Regresar al inicio" />
                </div>
            </>
        );
    }
}

export default withRouter(NoMatch);