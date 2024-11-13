import * as Icons from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

export class Avatar extends Component {

    /* configureAvatarSize = () => {
        let size = 50;  // Configured by default to be small size
        if (this.props.size) {
            switch (this.props.size) {
                case 'md':
                    size = 85;
                    break;
                case 'xl':
                    size = 120;
                    break;
                default:
                    break;
            }
        }
        return size;
    } */

    render() {
        // const size = this.configureAvatarSize();
        return (
            <FontAwesomeIcon className="d-block mx-auto" icon={Icons.faUserCircle} size={this.props.size || '5x'} />
        );
    }
}

export default Avatar;
