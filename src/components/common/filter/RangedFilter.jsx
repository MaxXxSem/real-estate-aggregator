import React from 'react';

class RangedFilter extends React.Component { 
    constructor(props) {
        super(props);
    }
    
    render() {
        const { text } = this.props;
        const { refFrom, refTo } = this.props.forwardedRef;
        const { additionalOptions } = this.props;

        return (
            <div className="btn-group ranged-filter-container">
                <button type="button" className="btn dropdown-toggle ranged-filter" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {text}
                </button>
                <div className="dropdown-menu">
                    <div className="row mx-0">
                        {
                            additionalOptions &&
                            additionalOptions.map(x => (
                                <button key={x.text} className="dropdown-item" onClick={(e) => {
                                    refFrom.current.value = (x.from ? x.from : "");
                                    refTo.current.value = (x.to ? x.to : "");
                                }}>{x.text}</button>
                            ))
                        }
                        <input ref={refFrom} className="dropdown-item filter-text-input col-md-6" type="text" placeholder="от" />
                        <input ref={refTo} className="dropdown-item filter-text-input col-md-6" type="text" placeholder="до" />
                    </div>
                </div>
            </div>
        );
    }
}

export default React.forwardRef((props, ref) => (<RangedFilter forwardedRef={ref} {...props} />));