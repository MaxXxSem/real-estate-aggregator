import React from 'react';
import RangedFilter from '../../../common/filter/RangedFilter';
import Dropdown from '../../../common/dropdown/Dropdown';
import CommonDataManager from '../../../../data/dataManagers/commonDataManager';
import Label from '../../../common/label/Label';
import Checkbox from '../../../common/checkbox/Checkbox';
import ApartmentsFilter from '../../../../data/dataManagers/filters/apartmentsFilter';
import ApartmentsDataManager from '../../../../data/dataManagers/apartmentsDataManager';

class ApartmentsFiltersContainer extends React.Component { 
    constructor(props) {
        super(props);

        this.floorFrom = React.createRef();
        this.floorTo = React.createRef();
        this.priceFrom = React.createRef();
        this.priceTo = React.createRef();
        this.roomsCountFrom = React.createRef();
        this.roomsCountTo = React.createRef();
        this.fullAreaFrom = React.createRef();
        this.fullAreaTo = React.createRef();
        this.livingAreaFrom = React.createRef();
        this.livingAreaTo = React.createRef();
        this.numberOfFloorsFrom = React.createRef();
        this.numberOfFloorsTo = React.createRef();
        this.buildingType = React.createRef();
        this.noWorkWithRieltors = React.createRef();

        this.apartmentTypes = CommonDataManager.getApartmentTypes();
        this.apartmentFilter = new ApartmentsFilter();

        this.search = this.search.bind(this);
        this.getFiltersData = this.getFiltersData.bind(this);
    }

    componentDidMount() {
        let apartmentsList = ApartmentsDataManager.getApartments(this.props.city, new ApartmentsFilter(), { key: this.props.sortingKey, order: this.props.sortingOrder }, this.props.limit, this.props.offset);
        this.props.onFiltersChange(apartmentsList);
    }

    UNSAFE_componentWillReceiveProps(props) {
        if (props.limit != this.props.limit || props.offset != this.props.offset || props.sortingKey != this.props.sortingKey || props.sortingOrder != this.props.sortingOrder) {
            let apartmentsList = ApartmentsDataManager.getApartments(props.city, this.apartmentFilter, { key: props.sortingKey, order: props.sortingOrder }, props.limit, props.offset);
            props.onFiltersChange(apartmentsList);
        }
    }
    
    getFiltersData() {
        let apartmentFilter = new ApartmentsFilter();
        apartmentFilter.priceFrom = this.priceFrom.current.value;
        apartmentFilter.priceTo = this.priceTo.current.value;
        apartmentFilter.roomsCountFrom = this.roomsCountFrom.current.value;
        apartmentFilter.roomsCountTo = this.roomsCountTo.current.value;
        apartmentFilter.fullAreaFrom = this.fullAreaFrom.current.value;
        apartmentFilter.fullAreaTo = this.fullAreaTo.current.value;
        apartmentFilter.livingAreaFrom = this.livingAreaFrom.current.value;
        apartmentFilter.livingAreaTo = this.livingAreaTo.current.value;
        apartmentFilter.numberOfFloorsFrom = this.numberOfFloorsFrom.current.value;
        apartmentFilter.numberOfFloorsTo = this.numberOfFloorsTo.current.value;
        apartmentFilter.floorFrom = this.floorFrom.current.value;
        apartmentFilter.floorTo = this.floorTo.current.value;
        apartmentFilter.buildingType = this.buildingType.current.value;
        apartmentFilter.noWorkWithRieltors = this.noWorkWithRieltors.current.checked;

        return apartmentFilter;
    }

    search(e) {
        this.apartmentFilter = this.getFiltersData();
        let apartmentsList = ApartmentsDataManager.getApartments(this.props.city, this.apartmentFilter, { key: this.props.sortingKey, order: this.props.sortingOrder }, this.props.limit, this.props.offset);
        this.props.onFiltersChange(apartmentsList, true);
    }

    render() {
        return (
            <div className="filters mb-4 item-container pr-3 pb-3 pl-3 pt-2">
                <RangedFilter 
                    ref={{ refFrom: this.floorFrom, refTo: this.floorTo }} 
                    text="Этаж"
                    additionalOptions={[
                        { text: "Не первый", from: 2 },
                        { text: "От 5", from: 5 },
                        { text: "От 10", from: 10 }
                    ]} 
                    onChangeClass="filterChangeStyle"
                />
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
                        { text: "1 комната", from: 1, to: 1 },
                        { text: "2 комнаты", from: 2, to: 2 },
                        { text: "Больше 2-х", from: 3 }
                    ]}    
                    onChangeClass="filterChangeStyle"
                />
                <RangedFilter 
                    ref={{ refFrom: this.fullAreaFrom, refTo: this.fullAreaTo }} 
                    text="Общая площадь" 
                    additionalOptions={[
                        { text: "От 30 кв.м.", from: 30 },
                        { text: "От 40 кв.м.", from: 40 },
                        { text: "От 50 кв.м.", from: 50 }
                    ]}
                    onChangeClass="filterChangeStyle"
                />
                <RangedFilter 
                    ref={{ refFrom: this.livingAreaFrom, refTo: this.livingAreaTo }} 
                    text="Жилая площадь" 
                    additionalOptions={[
                        { text: "От 10 кв.м.", from: 10 },
                        { text: "От 20 кв.м.", from: 20 },
                        { text: "От 30 кв.м.", from: 30 }
                    ]}
                    onChangeClass="filterChangeStyle"
                />
                <RangedFilter 
                    ref={{ refFrom: this.numberOfFloorsFrom, refTo: this.numberOfFloorsTo }} 
                    text="Этажность" 
                    additionalOptions={[
                        { text: "До 5", to: 5 },
                        { text: "До 10", to: 10 }
                    ]}
                    onChangeClass="filterChangeStyle"
                />
                <div className="btn-group d-inline-block">
                    <Dropdown 
                        classes="form-control w-auto" 
                        options={this.apartmentTypes}
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

export default ApartmentsFiltersContainer;