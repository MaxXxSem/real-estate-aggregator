import React from 'react';
import './RealEstateList.scss';
import Header from '../../components/common/header/Header';
import ApartmentsFiltersContainer from '../../components/pages/realEstateList/filters/ApartmentsFiltersContainer';
import HousesFiltersContainer from '../../components/pages/realEstateList/filters/HousesFiltersContainer';
import PlotsFiltersContainer from '../../components/pages/realEstateList/filters/PlotsFiltersContainer';
import ObjectType from '../../util/ObjectType';
import ItemsList from '../../components/pages/realEstateList/list/ItemsList';
import Pagination from '../../components/common/pagination/Pagination';

// filters and list of items
class RealEstateList extends React.Component {
    constructor(props) {
        super(props);

        this.type = this.props.match.params.type;
        this.city = this.props.match.params.city;

        this.state = { 
            items: null,
            limit: 2,
            offset: 0
        };

        this.onFiltersChange = this.onFiltersChange.bind(this);
        this.onPageChange = this.onPageChange.bind(this);
    }

    onFiltersChange(newItems) {
        this.setState({
            items: newItems
        });
    }

    onPageChange(e) {
        e.preventDefault();

        let value = parseInt(e.target.getAttribute("value"));
        let limit = this.state.limit;

        this.setState({
            offset: (value - 1) * limit
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
                    (this.type === ObjectType.Apartments && <ApartmentsFiltersContainer onFiltersChange={this.onFiltersChange} city={this.city} limit={this.state.limit} offset={this.state.offset} />)
                    || (this.type === ObjectType.Houses && <HousesFiltersContainer onFiltersChange={this.onFiltersChange} city={this.city} limit={this.state.limit} offset={this.state.offset} />)
                    || (this.type === ObjectType.Plots && <PlotsFiltersContainer onFiltersChange={this.onFiltersChange} city={this.city} limit={this.state.limit} offset={this.state.offset} />)
                }

                {/* list of items */}
                {
                    this.state.items && 
                    <ItemsList 
                        items={this.state.items.data}
                        type={this.type}
                    />
                }

                {/* pagination */}
                <Pagination 
                    pagesNumber={this.state.items ? (Math.ceil(this.state.items.totalCount / this.state.limit)) : 0}
                    page={1}
                    onPageChange={this.onPageChange}
                />
            </div>
        )
    }
}

export default RealEstateList;