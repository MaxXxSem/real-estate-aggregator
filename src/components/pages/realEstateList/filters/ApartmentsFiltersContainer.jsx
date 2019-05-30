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
        this.houseTypes = CommonDataManager.getHouseTypes();
        this.plotTypes = CommonDataManager.getPlotTypes();

        this.btnSearchClickHandler = this.btnSearchClickHandler.bind(this);
    }
    
    btnSearchClickHandler(e) {
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

        console.log(this.noWorkWithRieltors.current.checked);

        let apartmentsList = ApartmentsDataManager.getApartments(this.props.city, apartmentFilter, 10, 0);
        console.log(apartmentsList);
    }

    render() {
        return (
            <div className="filters">
                <RangedFilter ref={{ refFrom: this.floorFrom, refTo: this.floorTo }} text="Этаж" />
                <RangedFilter ref={{ refFrom: this.priceFrom, refTo: this.priceTo }} text="Цена" />
                <RangedFilter ref={{ refFrom: this.roomsCountFrom, refTo: this.roomsCountTo }} text="Кол-во комнат" />
                <RangedFilter ref={{ refFrom: this.fullAreaFrom, refTo: this.fullAreaTo }} text="Общая площадь" />
                <RangedFilter ref={{ refFrom: this.livingAreaFrom, refTo: this.livingAreaTo }} text="Жилая площадь" />
                <RangedFilter ref={{ refFrom: this.numberOfFloorsFrom, refTo: this.numberOfFloorsTo }} text="Этажность" />
                <div>
                    <Label text="Тип" />
                    <Dropdown 
                        classes="form-control" 
                        options={this.apartmentTypes}
                        ref={this.buildingType} 
                    />
                </div>
                <div>
                    <Label text="Не работаю с посредниками" />
                    <Checkbox ref={this.noWorkWithRieltors} />
                </div>
                <button className="btn btn-primary" onClick={this.btnSearchClickHandler}>Найти</button>
            </div>
        );
    }
}

export default ApartmentsFiltersContainer;