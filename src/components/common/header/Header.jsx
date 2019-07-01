import React from 'react';
import MainFilters from '../mainFilters/MainFilters';
import CommonDataManager from '../../../data/dataManagers/commonDataManager';
import logo from '../../../public/img/logo.png';
import './Header.scss';

class Header extends React.Component { 
    constructor(props) {
        super(props);

        this.objectTypeOptions = CommonDataManager.getObjectTypes();
        this.cityOptions = CommonDataManager.getCities();

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
        const { city, type, classes } = this.props;

        return (
            <div className={`header ${classes}`}>
                <div className="logo">
                    <a href="/home"><img src={logo} /></a>
                </div>

                <MainFilters 
                    onTypeChange={this.onTypeChange}
                    objectTypeOptions={this.objectTypeOptions}
                    defaultType={type}
                    onCityChange={this.onCityChange}
                    cityOptions={this.cityOptions}
                    defaultCity={city}
                    classes="position-relative"
                />
            </div>
        );
    }
}

export default Header;