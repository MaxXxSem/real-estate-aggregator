import React from 'react';
import RangedFilter from '../../../common/filter/RangedFilter';
import Dropdown from '../../../common/dropdown/Dropdown';
import CommonDataManager from '../../../../data/dataManagers/commonDataManager';
import Label from '../../../common/label/Label';
import Checkbox from '../../../common/checkbox/Checkbox';
import PlotsFilter from '../../../../data/dataManagers/filters/plotsFilter';
import PlotsDataManager from '../../../../data/dataManagers/plotsDataManager';

class PlotsFiltersContainer extends React.Component { 
    constructor(props) {
        super(props);

        this.priceFrom = React.createRef();
        this.priceTo = React.createRef();
        this.plotAreaFrom = React.createRef();
        this.plotAreaTo = React.createRef();
        this.buildingType = React.createRef();
        this.noWorkWithRieltors = React.createRef();

        this.apartmentTypes = CommonDataManager.getApartmentTypes();
        this.houseTypes = CommonDataManager.getHouseTypes();
        this.plotTypes = CommonDataManager.getPlotTypes();

        this.btnSearchClickHandler = this.btnSearchClickHandler.bind(this);
    }
    
    btnSearchClickHandler(e) {
        let plotsFilter = new PlotsFilter();
        plotsFilter.priceFrom = this.priceFrom.current.value;
        plotsFilter.priceTo = this.priceTo.current.value;
        plotsFilter.plotAreaFrom = this.plotAreaFrom.current.value;
        plotsFilter.plotAreaTo = this.plotAreaTo.current.value;
        plotsFilter.buildingType = this.buildingType.current.value;
        plotsFilter.noWorkWithRieltors = this.noWorkWithRieltors.current.checked;

        let housesList = PlotsDataManager.getPlots(this.props.city, plotsFilter, 10, 0);
        this.props.onFiltersChange(housesList);
    }

    render() {
        return (
            <div className="filters">
                <RangedFilter ref={{ refFrom: this.priceFrom, refTo: this.priceTo }} text="Цена" />
                <RangedFilter ref={{ refFrom: this.plotAreaFrom, refTo: this.plotAreaTo }} text="Площадь участка" />
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

export default PlotsFiltersContainer;