import React from 'react';

class Checkbox extends React.Component {    
    render() {
        const { forwardedRef, classes } = this.props;

        return (
            <div className={`checkbox-container ${classes}`}>
                <input ref={forwardedRef} type="checkbox" />
            </div>
        )
    }
}

export default React.forwardRef((props, ref) => (<Checkbox forwardedRef={ref} {...props} />));