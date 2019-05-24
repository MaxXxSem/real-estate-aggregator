import React from 'react';
import Dropdown from '../dropdown/Dropdown';

class MainFilters extends React.Component {    
    render() {
        return (
            <div className="main-filters">
                <div className="form-group">
                    <Dropdown 
                        classes="form-control" 
                        options={this.props.objectTypeOptions} 
                        onChangeHandler={this.props.onTypeChange}
                        defaultVal={this.props.defaultType} 
                    />
                </div>
                <div className="form-group">
                    <Dropdown 
                        classes="form-control" 
                        options={this.props.cityOptions}
                        onChangeHandler={this.props.onCityChange}
                        defaultVal={this.props.defaultCity}
                    />
                </div>
            </div>
        );
    }
}

export default MainFilters;