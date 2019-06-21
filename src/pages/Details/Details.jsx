import React from 'react';
import './Details.scss';
import ApartmentDetails from '../../components/pages/details/ApartmentDetails';
import HouseDetails from '../../components/pages/details/HouseDetails';
import PlotDetails from '../../components/pages/details/PlotDetails';
import Header from '../../components/common/header/Header';

// specific object details
class Details extends React.Component { 
    constructor(props) {
        super(props);

        this.id = this.props.match.params.id;
        this.type = this.props.match.params.type;
        this.city = this.props.match.params.city;
    }

    render() {
        return (
            <div className="container details-container">

                <Header 
                    type={this.type}
                    city={this.city} 
                />
                <div>
                {
                    (this.type === "apartments" && <ApartmentDetails id={this.id} />)
                    || (this.type === "houses" && <HouseDetails id={this.id} />)
                    || (this.type === "plots" && <PlotDetails id={this.id} />)
                }
                </div>
            </div>
        )
    }
}

export default Details;