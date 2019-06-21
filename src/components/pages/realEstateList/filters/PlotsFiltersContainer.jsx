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
        this.plotType = React.createRef();
        this.noWorkWithRieltors = React.createRef();

        this.plotTypes = CommonDataManager.getPlotTypes();
        this.plotFilter = new PlotsFilter();

        this.search = this.search.bind(this);
        this.getFiltersData = this.getFiltersData.bind(this);
    }

    componentDidMount() {
        let plotsList = PlotsDataManager.getPlots(this.props.city, new PlotsFilter(), { key: this.props.sortingKey, order: this.props.sortingOrder }, this.props.limit, this.props.offset);
        this.props.onFiltersChange(plotsList);
    }

    UNSAFE_componentWillReceiveProps(props) {
        if (props.limit != this.props.limit || props.offset != this.props.offset || props.sortingKey != this.props.sortingKey || props.sortingOrder != this.props.sortingOrder) {
            let plotsList = PlotsDataManager.getPlots(props.city, this.plotFilter, { key: props.sortingKey, order: props.sortingOrder }, props.limit, props.offset);
            props.onFiltersChange(plotsList);
        }
    }

    getFiltersData() {
        let plotsFilter = new PlotsFilter();
        plotsFilter.priceFrom = this.priceFrom.current.value;
        plotsFilter.priceTo = this.priceTo.current.value;
        plotsFilter.plotAreaFrom = this.plotAreaFrom.current.value;
        plotsFilter.plotAreaTo = this.plotAreaTo.current.value;
        plotsFilter.plotType = this.plotType.current.value;
        plotsFilter.noWorkWithRieltors = this.noWorkWithRieltors.current.checked;

        return plotsFilter;
    }
    
    search() {
        this.plotFilter = this.getFiltersData();
        let plotsList = PlotsDataManager.getPlots(this.props.city, this.plotFilter, { key: this.props.sortingKey, order: this.props.sortingOrder }, this.props.limit, this.props.offset);
        this.props.onFiltersChange(plotsList, true);
    }

    render() {
        return (
            <div className="filters mb-4 item-container pr-3 pb-3 pl-3 pt-2">
                <RangedFilter 
                    ref={{ refFrom: this.priceFrom, refTo: this.priceTo }} 
                    text="Цена" 
                    additionalOptions={[
                        { text: "До 70 000 $", to: 70000 },
                        { text: "До 100 000 $", to: 100000 }
                    ]}
                    onChangeClass="filterChangeStyle"
                />
                <RangedFilter 
                    ref={{ refFrom: this.plotAreaFrom, refTo: this.plotAreaTo }} 
                    text="Площадь участка" 
                    additionalOptions={[
                        { text: "От 70 кв.м.", from: 70 },
                        { text: "От 100 кв.м.", from: 100 },
                        { text: "От 200 кв.м.", from: 200 }
                    ]}
                    onChangeClass="filterChangeStyle"
                />
                <div className="btn-group d-inline-block">
                    <Dropdown 
                        classes="form-control w-auto" 
                        options={this.plotTypes}
                        ref={this.plotType}
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

export default PlotsFiltersContainer;