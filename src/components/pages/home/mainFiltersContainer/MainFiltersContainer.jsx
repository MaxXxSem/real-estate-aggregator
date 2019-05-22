import React from 'react';
import Dropdown from '../../../common/dropdown/Dropdown';

class MainFiltersContainer extends React.Component { 
    constructor(props) {
        super(props);
        
        this.state = {
            city: this.props.cityOptions[0].value, 
            type: this.props.objectTypeOptions[0].value 
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
        const { objectTypeOptions, cityOptions } = this.props;

        return (
            <div className="container">
                <div className="site-name">{siteName}</div>
                <div className="site-description">{description}</div>

                <div>
                    <div className="form-group">
                        <Dropdown 
                            classes="form-control" 
                            options={objectTypeOptions} 
                            onChangeHandler={this.onTypeChange} 
                        />
                    </div>
                    <div className="form-group">
                        <Dropdown 
                            classes="form-control" 
                            options={cityOptions}
                            onChangeHandler={this.onCityChange}
                        />
                    </div>
                    <a href="#" className="find-button btn btn-primary" onClick={this.searchBtnClick}>{buttonName}</a>
                </div>
            </div>
        )
    }
}

export default MainFiltersContainer;