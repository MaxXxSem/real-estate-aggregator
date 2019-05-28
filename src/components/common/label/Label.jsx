import React from 'react';

class Label extends React.Component {    
    render() {
        return (
            <div className="label inline">
                <span>{this.props.text}</span>
            </div>
        )
    }
}

export default Label;