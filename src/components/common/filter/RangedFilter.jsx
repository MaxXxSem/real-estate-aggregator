import React from 'react';

class RangedFilter extends React.Component { 
    constructor(props) {
        super(props);

        this.container = React.createRef();

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler() {
        if (this.props.onChangeClass) {
            if (this.props.forwardedRef.refFrom.current.value || this.props.forwardedRef.refTo.current.value) {
                this.container.current.classList.add(this.props.onChangeClass);
            }
            else {
                this.container.current.classList.remove(this.props.onChangeClass);            
            }
            console.log(this.container.current.classList);
        }
    }
    
    render() {
        const { text } = this.props;
        const { refFrom, refTo } = this.props.forwardedRef;
        const { additionalOptions } = this.props;

        return (
            <div className={`btn-group ranged-filter-container`} ref={this.container}>
                <button type="button" className="btn dropdown-toggle ranged-filter no-shadow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {text}
                </button>
                <div className="dropdown-menu">
                    <div className="row mx-0">
                        {
                            additionalOptions &&
                            additionalOptions.map(x => (
                                <button key={x.text} className="dropdown-item pl-2 no-shadow" onClick={(e) => {
                                    refFrom.current.value = (x.from ? x.from : "");
                                    refTo.current.value = (x.to ? x.to : "");
                                    this.onChangeHandler();
                                }}>{x.text}</button>
                            ))
                        }
                        <input onChange={this.onChangeHandler} ref={refFrom} className="dropdown-item filter-text-input col-md-6 pl-2 pr-1 no-shadow" type="number" min="1" placeholder="от" />
                        <input onChange={this.onChangeHandler} ref={refTo} className="dropdown-item filter-text-input col-md-6 pr-2 pl-1 no-shadow" type="number" min="1" placeholder="до" />
                    </div>
                </div>
            </div>
        );
    }
}

export default React.forwardRef((props, ref) => (<RangedFilter forwardedRef={ref} {...props} />));