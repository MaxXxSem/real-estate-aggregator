import React from 'react';

class Dropdown extends React.Component {  
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }
    
    onChange(e) {
        if (this.props.onChangeClass) {
            if (this.props.forwardedRef.current.value) {
                this.props.forwardedRef.current.classList.add(this.props.onChangeClass);
            } else {
                this.props.forwardedRef.current.classList.remove(this.props.onChangeClass);                
            }
        }

        if (this.props.onChangeHandler)
            this.props.onChangeHandler(e);
    }

    render() {
        // options - dictionary <text, value>
        const { options, classes } = this.props;
        const { forwardedRef } = this.props;
        const { placeholder } = this.props;

        return (
            <select ref={forwardedRef} value={this.props.defaultVal} onChange={this.onChange} className={classes}>
                {
                    placeholder && (
                        <option value="" selected disabled hidden>{placeholder}</option>
                    )
                }
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