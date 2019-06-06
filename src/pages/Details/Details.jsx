import React from 'react';
import './Details.scss';
import ApartmentDetails from '../../components/pages/details/ApartmentDetails';

// specific object details
class Details extends React.Component { 
    constructor(props) {
        super(props);

        this.id = this.props.match.params.id;
    }

    render() {
        return (
            <div className="container">
                <ApartmentDetails id={this.id} />
            </div>
        )
    }
}

export default Details;