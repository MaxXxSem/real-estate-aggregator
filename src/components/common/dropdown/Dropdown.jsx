import React from 'react';

class Dropdown extends React.Component {    
    render() {
        // options - dictionary <text, value>
        const { options, classes } = this.props;

        return (
            <select className={classes}>
                {
                    options.map(x => (
                        <option key={x.value} value={x.value}>{x.text}</option>
                    ))
                }
            </select>
        )
    }
}

export default Dropdown;