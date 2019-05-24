import React from 'react';
import RangedFilter from '../../../common/filter/Filter';

class FiltersContainer extends React.Component { 
    constructor(props) {
        super(props);

        this.floorFrom = React.createRef();
        this.floorTo = React.createRef();
    }
    
    render() {
        return (
            <div className="filters">
                <RangedFilter ref={{ refFrom: this.floorFrom, refTo: this.floorTo }} text="Этаж" />
            </div>
        );
    }
}

export default FiltersContainer;