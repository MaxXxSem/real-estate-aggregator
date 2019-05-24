import React from 'react';
import './RealEstateList.scss';
import Header from '../../components/common/header/Header';
import FiltersContainer from '../../components/pages/realEstateList/filters/FiltersContainer';

// filters and list of items
class RealEstateList extends React.Component {
    constructor(props) {
        super(props);

        this.type = this.props.match.params.type;
        this.city = this.props.match.params.city;
    }
    
    render() {
        return (
            <div className="container">
                {/* heared with main filters */}
                <Header 
                    type={this.type}
                    city={this.city} 
                />

                {/* filters */}
                <FiltersContainer />

                {/* list of items */}
            </div>
        )
    }
}

export default RealEstateList;