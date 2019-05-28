import React from 'react';

class Dropdown extends React.Component {    
    render() {
        // options - dictionary <text, value>
        const { options, classes } = this.props;
        const { forwardedRef } = this.props;

        return (
            <select ref={forwardedRef} value={this.props.defaultVal} onChange={this.props.onChangeHandler} className={classes}>
                {
                    options.map(x => (
                        <option key={x.value} value={x.value}>{x.text[0].toUpperCase() + x.text.slice(1)}</option>
                    ))
                }
            </select>
        )
    }
}

export default React.forwardRef((props, ref) => (<Dropdown forwardedRef={ref} {...props} />));