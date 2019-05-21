import React from 'react';
import Dropdown from '../../../common/dropdown/Dropdown';

class MainFiltersContainer extends React.Component {    
    render() {
        const { siteName, description } = this.props;
        const { objectTypeOptions, cityOptions } = this.props;

        return (
            <div className="container">
                <div className="site-name">{siteName}</div>
                <div className="site-description">{description}</div>

                <form>
                    <div className="form-group">
                        <Dropdown classes="form-control" options={objectTypeOptions} />
                    </div>
                    <div className="form-group">
                        <Dropdown classes="form-control" options={cityOptions} />
                    </div>
                </form>
            </div>
        )
    }
}

export default MainFiltersContainer;