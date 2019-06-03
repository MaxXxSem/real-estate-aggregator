import React from 'react';
import './RealEstateList.scss';
import Header from '../../components/common/header/Header';
import ApartmentsFiltersContainer from '../../components/pages/realEstateList/filters/ApartmentsFiltersContainer';
import HousesFiltersContainer from '../../components/pages/realEstateList/filters/HousesFiltersContainer';
import PlotsFiltersContainer from '../../components/pages/realEstateList/filters/PlotsFiltersContainer';
import ObjectType from '../../util/ObjectType';
import ItemsList from '../../components/pages/realEstateList/list/ItemsList';

// filters and list of items
class RealEstateList extends React.Component {
    constructor(props) {
        super(props);

        this.type = this.props.match.params.type;
        this.city = this.props.match.params.city;

        this.state = { items: null };

        this.onFiltersChange = this.onFiltersChange.bind(this);
    }

    onFiltersChange(newItems) {
        this.setState({
            items: newItems
        });
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
                {
                    (this.type === ObjectType.Apartments && <ApartmentsFiltersContainer onFiltersChange={this.onFiltersChange} city={this.city} />)
                    || (this.type === ObjectType.Houses && <HousesFiltersContainer onFiltersChange={this.onFiltersChange} city={this.city} />)
                    || (this.type === ObjectType.Plots && <PlotsFiltersContainer onFiltersChange={this.onFiltersChange} city={this.city} />)
                }

                {/* list of items */}
                {
                    this.state.items && 
                    <ItemsList 
                        items={this.state.items.data}
                        type={this.type}
                    />
                }
            </div>
        )
    }
}

export default RealEstateList;