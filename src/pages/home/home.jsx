import React from 'react';
import './Home.scss';
import MainFiltersContainer from '../../components/pages/home/mainFiltersContainer/MainFiltersContainer';

// chose city and type of objects
class Home extends React.Component {     
    // TODO: add props types and defaults    
    render() {
        return (
            <div className="container h-100 position-relative">
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