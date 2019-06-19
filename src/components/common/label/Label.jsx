import React from 'react';

class Label extends React.Component {    
    render() {
        const { classes } = this.props;

        return (
            <div className={`label d-inline-block ${classes || ''}`}>
                <span>{this.props.text}</span>
            </div>
        )
    }
}

export default Label;