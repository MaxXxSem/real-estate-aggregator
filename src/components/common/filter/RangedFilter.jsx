import React from 'react';

class RangedFilter extends React.Component { 
    constructor(props) {
        super(props);
    }
    
    render() {
        const { text } = this.props;
        const { refFrom, refTo } = this.props.forwardedRef;

        return (
            <div className="btn-group">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {text}
                </button>
                <div className="dropdown-menu">
                    <div className="row mx-0">
                        <input ref={refFrom} className="dropdown-item filter-text-input col-md-6" type="text" placeholder="от" />
                        <input ref={refTo} className="dropdown-item filter-text-input col-md-6" type="text" placeholder="до" />
                    </div>
                </div>
            </div>
        );
    }
}

export default React.forwardRef((props, ref) => (<RangedFilter forwardedRef={ref} {...props} />));