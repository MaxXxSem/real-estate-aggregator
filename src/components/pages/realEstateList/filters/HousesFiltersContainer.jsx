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
        let housesList = HousesDataManager.getHouses(this.props.city, new HousesFilter(), { key: this.props.sortingKey, order: this.props.sortingOrder }, this.props.limit, this.props.offset);
        this.props.onFiltersChange(housesList);
    }

    UNSAFE_componentWillReceiveProps(props) {
        if (props.limit != this.props.limit || props.offset != this.props.offset || props.sortingKey != this.props.sortingKey || props.sortingOrder != this.props.sortingOrder) {
            let housesList = HousesDataManager.getHouses(props.city, this.houseFilter, { key: props.sortingKey, order: props.sortingOrder }, props.limit, props.offset);
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
        let housesList = HousesDataManager.getHouses(this.props.city, this.houseFilter, { key: this.props.sortingKey, order: this.props.sortingOrder }, this.props.limit, this.props.offset);
        this.props.onFiltersChange(housesList, true);
    }

    render() {
        return (
            <div className="filters mb-4 item-container pr-3 pb-3 pl-3 pt-2">
                <RangedFilter 
                    ref={{ refFrom: this.priceFrom, refTo: this.priceTo }} 
                    text="Цена" 
                    additionalOptions={[
                        { text: "До 200 000 $", to: 200000 },
                        { text: "До 500 000 $", to: 500000 }
                    ]}
                    onChangeClass="filterChangeStyle"
                />
                <RangedFilter 
                    ref={{ refFrom: this.roomsCountFrom, refTo: this.roomsCountTo }} 
                    text="Кол-во комнат" 
                    additionalOptions={[
                        { text: "2 комнаты", from: 2, to: 2 },
                        { text: "3 комнаты", from: 3, to: 3 },
                        { text: "Больше 3-х", from: 4 }
                    ]} 
                    onChangeClass="filterChangeStyle"
                />
                <RangedFilter 
                    ref={{ refFrom: this.houseAreaFrom, refTo: this.houseAreaTo }} 
                    text="Площадь дома" 
                    additionalOptions={[
                        { text: "От 50 кв.м.", from: 50 },
                        { text: "От 60 кв.м.", from: 60 },
                        { text: "От 70 кв.м.", from: 70 }
                    ]}
                    onChangeClass="filterChangeStyle"
                />
                <RangedFilter 
                    ref={{ refFrom: this.plotAreaFrom, refTo: this.plotAreaTo }} 
                    text="Площадь участка" 
                    additionalOptions={[
                        { text: "От 70 кв.м.", from: 70 },
                        { text: "От 80 кв.м.", from: 80 },
                        { text: "От 90 кв.м.", from: 90 }
                    ]}
                    onChangeClass="filterChangeStyle"
                />
                <RangedFilter 
                    ref={{ refFrom: this.numberOfFloorsFrom, refTo: this.numberOfFloorsTo }} 
                    text="Кол-во этажей" 
                    additionalOptions={[
                        { text: "1 этаж", from: 1, to: 1 },
                        { text: "2 этажа", from: 2, to: 2 },
                        { text: "Больше двух", from: 3 }
                    ]}
                    onChangeClass="filterChangeStyle"
                />
                <div className="btn-group d-inline-block">
                    <Dropdown 
                        classes="form-control w-auto" 
                        options={this.houseTypes}
                        ref={this.buildingType} 
                        placeholder="Тип"
                        onChangeClass="filterChangeStyle"
                    />
                </div>
                <div className="d-block">
                    <Checkbox ref={this.noWorkWithRieltors} classes="pr-2" />
                    <Label text="Не работаю с посредниками" />
                </div>
                <button className="btn btn-orange no-shadow d-block" onClick={this.search}>Найти</button>
            </div>
        );
    }
}

export default HousesFiltersContainer;