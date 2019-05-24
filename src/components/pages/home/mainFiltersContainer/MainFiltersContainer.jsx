import React from 'react';
import MainFilters from '../../../common/mainFilters/MainFilters';
import CommonDataManager from '../../../../data/dataManagers/commonDataManager';

class MainFiltersContainer extends React.Component { 
    constructor(props) {
        super(props);

        let dataManager = new CommonDataManager();
        this.objectTypeOptions = dataManager.getObjectTypes();
        this.cityOptions = dataManager.getCities();
        
        this.state = {
            city: this.cityOptions[0].value, 
            type: this.objectTypeOptions[0].value 
        };

        this.onCityChange = this.onCityChange.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.searchBtnClick = this.searchBtnClick.bind(this);
    }

    onCityChange(e) {
        this.setState({
            city: e.target.value
        });
    }

    onTypeChange(e) {
        this.setState({
            type: e.target.value
        });
    }

    searchBtnClick(e) {
        e.preventDefault();

        window.location.href = `/list/${this.state.type}/${this.state.city}`;
    }
    
    render() {
        const { siteName, description, buttonName } = this.props;

        return (
            <div className="container">
                <div className="site-name">{siteName}</div>
                <div className="site-description">{description}</div>

                <div>
                    <MainFilters 
                        onTypeChange={this.onTypeChange}
                        onCityChange={this.onCityChange}
                        objectTypeOptions={this.objectTypeOptions}
                        cityOptions={this.cityOptions}
                    />
                    <a href="#" className="find-button btn btn-primary" onClick={this.searchBtnClick}>{buttonName}</a>
                </div>
            </div>
        )
    }
}

export default MainFiltersContainer;