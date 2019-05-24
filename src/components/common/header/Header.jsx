import React from 'react';
import MainFilters from '../mainFilters/MainFilters';
import CommonDataManager from '../../../data/dataManagers/commonDataManager';

class Header extends React.Component { 
    constructor(props) {
        super(props);

        let dataManager = new CommonDataManager();
        this.objectTypeOptions = dataManager.getObjectTypes();
        this.cityOptions = dataManager.getCities();

        this.onCityChange = this.onCityChange.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
    }

    onCityChange(e) {
        window.location.href = `/list/${this.props.type}/${e.target.value}`;        
    }

    onTypeChange(e) {
        window.location.href = `/list/${e.target.value}/${this.props.city}`;                
    }
    
    render() {
        const { city, type } = this.props;

        return (
            <div>
                <div className="logo">
                    <img src="#" />
                </div>

                <div className="main-filters">
                    <MainFilters 
                        onTypeChange={this.onTypeChange}
                        objectTypeOptions={this.objectTypeOptions}
                        defaultType={type}
                        onCityChange={this.onCityChange}
                        cityOptions={this.cityOptions}
                        defaultCity={city}
                    />
                </div>
            </div>
        );
    }
}

export default Header;