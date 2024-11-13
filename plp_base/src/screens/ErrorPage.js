import { faDizzy } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { withRouter } from 'react-router';
import { BaseErrorMessage } from '../components/BaseErrorMessage';

// DEFAULT ERROR PAGE
class ErrorPage extends React.Component {

    goToHomePage = () => {
        this.props.history.replace('/homepage');
    }

    render() {
        return (
            <>
                <div className="text-center mt-5">
                    <BaseErrorMessage action={this.goToHomePage} errorMessage={this.props.error || "Ha ocurrido un error al intentar procesar tu solicitud"} icon={faDizzy} buttonText="Regresar al inicio" />
                </div>
            </>
        );
    }
}

export default withRouter(ErrorPage);