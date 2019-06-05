import React from 'react';
import RangedFilter from '../../../common/filter/RangedFilter';
import Dropdown from '../../../common/dropdown/Dropdown';
import CommonDataManager from '../../../../data/dataManagers/commonDataManager';
import Label from '../../../common/label/Label';
import Checkbox from '../../../common/checkbox/Checkbox';
import HousesFilter from '../../../../data/dataManagers/filters/housesFilter';
import HousesDataManager from '../../../../data/dataManagers/housesDataManager';

class HousesFiltersContainer extends React.Component { 
    constructor(props) {
        super(props);

        this.priceFrom = React.createRef();
        this.priceTo = React.createRef();
        this.roomsCountFrom = React.createRef();
        this.roomsCountTo = React.createRef();
        this.houseAreaFrom = React.createRef();
        this.houseAreaTo = React.createRef();
        this.plotAreaFrom = React.createRef();
        this.plotAreaTo = React.createRef();
        this.numberOfFloorsFrom = React.createRef();
        this.numberOfFloorsTo = React.createRef();
        this.buildingType = React.createRef();
        this.noWorkWithRieltors = React.createRef();

        this.houseTypes = CommonDataManager.getHouseTypes();
        this.houseFilter = new HousesFilter();

        this.search = this.search.bind(this);
        this.getFiltersData = this.getFiltersData.bind(this);
    }

    componentDidMount() {
        let housesList = HousesDataManager.getHouses(this.props.city, new HousesFilter(), this.props.limit, this.props.offset);
        this.props.onFiltersChange(housesList);
    }

    UNSAFE_componentWillReceiveProps(props) {
        if (props.limit != this.props.limit || props.offset != this.props.offset) {
            let housesList = HousesDataManager.getHouses(props.city, this.houseFilter, props.limit, props.offset);
            props.onFiltersChange(housesList);
        }
    }

    getFiltersData() {
        let housesFilter = new HousesFilter();
        housesFilter.priceFrom = this.priceFrom.current.value;
        housesFilter.priceTo = this.priceTo.current.value;
        housesFilter.roomsCountFrom = this.roomsCountFrom.current.value;
        housesFilter.roomsCountTo = this.roomsCountTo.current.value;
        housesFilter.houseAreaFrom = this.houseAreaFrom.current.value;
        housesFilter.houseAreaTo = this.houseAreaTo.current.value;
        housesFilter.plotAreaFrom = this.plotAreaFrom.current.value;
        housesFilter.plotAreaTo = this.plotAreaTo.current.value;
        housesFilter.numberOfFloorsFrom = this.numberOfFloorsFrom.current.value;
        housesFilter.numberOfFloorsTo = this.numberOfFloorsTo.current.value;
        housesFilter.buildingType = this.buildingType.current.value;
        housesFilter.noWorkWithRieltors = this.noWorkWithRieltors.current.checked;

        return housesFilter;
    }

    search(e) {
        this.houseFilter = this.getFiltersData();
        let housesList = HousesDataManager.getHouses(this.props.city, this.houseFilter, this.props.limit, this.props.offset);
        this.props.onFiltersChange(housesList, true);
    }

    render() {
        return (
            <div className="filters">
                <RangedFilter ref={{ refFrom: this.priceFrom, refTo: this.priceTo }} text="Цена" />
                <RangedFilter ref={{ refFrom: this.roomsCountFrom, refTo: this.roomsCountTo }} text="Кол-во комнат" />
                <RangedFilter ref={{ refFrom: this.houseAreaFrom, refTo: this.houseAreaTo }} text="Площадь дома" />
                <RangedFilter ref={{ refFrom: this.plotAreaFrom, refTo: this.plotAreaTo }} text="Площадь участка" />
                <RangedFilter ref={{ refFrom: this.numberOfFloorsFrom, refTo: this.numberOfFloorsTo }} text="Кол-во этажей" />
                <div>
                    <Label text="Тип" />
                    <Dropdown 
                        classes="form-control" 
                        options={this.houseTypes}
                        ref={this.buildingType} 
                    />
                </div>
                <div>
                    <Label text="Не работаю с посредниками" />
                    <Checkbox ref={this.noWorkWithRieltors} />
                </div>
                <button className="btn btn-primary" onClick={this.search}>Найти</button>
            </div>
        );
    }
}

export default HousesFiltersContainer;