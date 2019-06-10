import React from 'react';
import MainFilters from '../../../common/mainFilters/MainFilters';
import CommonDataManager from '../../../../data/dataManagers/commonDataManager';
import './MainFiltersContainer.scss';

class MainFiltersContainer extends React.Component { 
    constructor(props) {
        super(props);

        this.objectTypeOptions = CommonDataManager.getObjectTypes();
        this.cityOptions = CommonDataManager.getCities();
        
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
            <div className="main-filters-container offset-md-3 col-md-6 v-align px-4 py-5">
                <h1 className="site-name site-name col-md-6 px-0 font-weight-bold">{siteName}</h1>
                <h4 className="site-description my-4 px-0">{description}</h4>

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