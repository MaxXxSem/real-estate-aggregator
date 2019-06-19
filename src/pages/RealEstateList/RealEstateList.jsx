import React from 'react';
import './RealEstateList.scss';
import Header from '../../components/common/header/Header';
import ApartmentsFiltersContainer from '../../components/pages/realEstateList/filters/ApartmentsFiltersContainer';
import HousesFiltersContainer from '../../components/pages/realEstateList/filters/HousesFiltersContainer';
import PlotsFiltersContainer from '../../components/pages/realEstateList/filters/PlotsFiltersContainer';
import ObjectType from '../../util/ObjectType';
import ItemsList from '../../components/pages/realEstateList/list/ItemsList';
import Pagination from '../../components/common/pagination/Pagination';
import Dropdown from '../../components/common/dropdown/Dropdown';

// filters and list of items
class RealEstateList extends React.Component {
    constructor(props) {
        super(props);

        this.type = this.props.match.params.type;
        this.city = this.props.match.params.city;

        this.state = { 
            items: null,
            limit: 2,
            offset: 0,
            sortingKey: "date",
            sortingOrder: "desc"
        };

        this.updateItems = false;

        this.onFiltersChange = this.onFiltersChange.bind(this);
        this.onPageChange = this.onPageChange.bind(this);
        this.onNextPage = this.onNextPage.bind(this);
        this.onPrevPage = this.onPrevPage.bind(this);
        this.onSorting = this.onSorting.bind(this);
        this.onPageSizeChange = this.onPageSizeChange.bind(this);
    }

    onFiltersChange(newItems, updatePage = false) {
        this.updateItems = true;
        let oldOffset = this.state.offset;
        this.setState({
            items: newItems,
            offset: updatePage ? 0 : oldOffset
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

    onNextPage(e) {
        e.preventDefault();

        let oldOffset = this.state.offset;
        let oldLimit = this.state.limit;
        this.setState({
            offset: oldOffset + oldLimit
        });
    }

    onPrevPage(e) {
        e.preventDefault();

        let oldOffset = this.state.offset;
        let oldLimit = this.state.limit;
        this.setState({
            offset: oldOffset - oldLimit
        });
    }

    onPageSizeChange(e) {
        let value = e.target.value;
        this.setState({
            limit: value
        });
    }

    onSorting(e) {
        let sorting = e.target.value;
        let sortKey = "";
        let sortOrder = "";
        if (sorting === "priceAsc") {
            sortKey = "price";
            sortOrder = "asc";
        } else if (sorting === "priceDesc") {
            sortKey = "price";
            sortOrder = "desc";
        } else if (sorting === "dateAsc") {
            sortKey = "date";
            sortOrder = "asc";
        } else if (sorting === "dateDesc") {
            sortKey = "date";
            sortOrder = "desc";
        }

        this.setState({
            sortingKey: sortKey,
            sortingOrder: sortOrder
        });
    }
    
    render() {
        const shouldUpdateItems = this.updateItems;
        this.updateItems = false;

        return (
            <div className="container list-container">
                {/* heared with main filters */}
                <Header 
                    type={this.type}
                    city={this.city} 
                />

                {/* filters */}
                {
                    (this.type === ObjectType.Apartments && <ApartmentsFiltersContainer onFiltersChange={this.onFiltersChange} city={this.city} limit={this.state.limit} offset={this.state.offset} sortingKey={this.state.sortingKey} sortingOrder={this.state.sortingOrder} />)
                    || (this.type === ObjectType.Houses && <HousesFiltersContainer onFiltersChange={this.onFiltersChange} city={this.city} limit={this.state.limit} offset={this.state.offset} sortingKey={this.state.sortingKey} sortingOrder={this.state.sortingOrder} />)
                    || (this.type === ObjectType.Plots && <PlotsFiltersContainer onFiltersChange={this.onFiltersChange} city={this.city} limit={this.state.limit} offset={this.state.offset} sortingKey={this.state.sortingKey} sortingOrder={this.state.sortingOrder} />)
                }

                {/* sorting */}
                <Dropdown 
                    classes="form-control w-auto d-inline-block mb-3" 
                    options={[
                        { text: "Сначала новые", value: "dateDesc" },
                        { text: "Сначала старые", value: "dateAsc" },
                        { text: "От дорогих к дешевым", value: "priceDesc" },
                        { text: "От дешевых к дорогим", value: "priceAsc" }
                    ]}
                    onChangeHandler={this.onSorting}
                />

                {/* list of items */}
                {
                    this.state.items && 
                    <ItemsList 
                        items={this.state.items.data}
                        type={this.type}
                        city={this.city}
                        shouldUpdate={shouldUpdateItems}
                    />
                }

                {/* pagination */}
                <Pagination 
                    pagesNumber={this.state.items ? (Math.ceil(this.state.items.totalCount / this.state.limit)) : 0}
                    page={(this.state.offset / this.state.limit) + 1}
                    onPageChange={this.onPageChange}
                    onNextPage={this.onNextPage}
                    onPrevPage={this.onPrevPage}
                />

                {/* change page size */}
                <Dropdown 
                    classes="form-control d-inline-block w-auto float-right" 
                    options={[
                        { text: "2", value: "2" },
                        { text: "5", value: "5" },
                        { text: "10", value: "10" },
                        { text: "15", value: "15" }
                    ]}
                    onChangeHandler={this.onPageSizeChange}
                />
            </div>
        )
    }
}

export default RealEstateList;