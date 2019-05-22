import React from 'react';
import './Home.scss';
import MainFiltersContainer from '../../components/pages/home/mainFiltersContainer/MainFiltersContainer';
import CommonDataManager from '../../data/dataManagers/commonDataManager';

// chose city and type of objects
class Home extends React.Component { 
    constructor(props) {
        super(props);

        let dataManager = new CommonDataManager();
        this.objectTypeOptions = dataManager.getObjectTypes();
        this.cityOptions = dataManager.getCities();
    }
    
    // TODO: add props types and defaults    
    render() {
        return (
            <div className="container">
                <MainFiltersContainer 
                    siteName="Real Estate Aggregator"
                    description="Лучший сервис по продаже недвижимости"
                    buttonName="Найти"
                    objectTypeOptions={this.objectTypeOptions}
                    cityOptions={this.cityOptions}
                />
            </div>
        )
    }
}

export default Home;