import React from 'react';
import RangedFilter from '../../../common/filter/RangedFilter';
import Dropdown from '../../../common/dropdown/Dropdown';
import CommonDataManager from '../../../../data/dataManagers/commonDataManager';
import Label from '../../../common/label/Label';
import Checkbox from '../../../common/checkbox/Checkbox';

class FiltersContainer extends React.Component { 
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

        this.apartmentTypes = CommonDataManager.getApartmentTypes();
        this.houseTypes = CommonDataManager.getHouseTypes();
        this.plotTypes = CommonDataManager.getPlotTypes();
    }
    
    // TODO: check type
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
                    />
                </div>
                <div>
                    <Label text="Не работаю с посредниками" />
                    <Checkbox />
                </div>
            </div>
        );
    }
}

export default FiltersContainer;