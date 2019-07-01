import React from 'react';
import './RangedFilter.scss';
import closeIcon from '../../../public/img/close.png';

class RangedFilter extends React.Component { 
    constructor(props) {
        super(props);

        this.container = React.createRef();
        this.mainBtn = React.createRef();
        this.btnClearBlock = React.createRef();
        this.filterTitle = React.createRef();
        this.filterValue = React.createRef();

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
    }

    onChangeHandler() {
        if (this.props.onChangeClass) {
            if (this.props.forwardedRef.refFrom.current.value || this.props.forwardedRef.refTo.current.value) {
                let valFrom = this.props.forwardedRef.refFrom.current.value;
                let valTo = this.props.forwardedRef.refTo.current.value;

                this.container.current.classList.add(this.props.onChangeClass);
                
                this.btnClearBlock.current.classList.add("d-inline-block");
                this.btnClearBlock.current.classList.remove("d-none");

                // change text
                if (valFrom != valTo)
                    this.filterValue.current.innerHTML = `${valFrom ? "От " + valFrom + "" : ""} ${valTo ? "До " + valTo : ""}`;
                else
                    this.filterValue.current.innerHTML = `${valFrom}`;
                this.filterValue.current.classList.remove("d-none");
                this.filterValue.current.classList.add("d-block");
                this.filterTitle.current.classList.add("small-title");
                this.mainBtn.current.classList.add("py-0");
                this.mainBtn.current.classList.add("active");
            }
            else {
                this.container.current.classList.remove(this.props.onChangeClass);   
                this.btnClearBlock.current.classList.remove("d-inline-block");
                this.btnClearBlock.current.classList.add("d-none");

                this.filterValue.current.classList.add("d-none");
                this.filterValue.current.classList.remove("d-block");
                this.filterTitle.current.classList.remove("small-title");
                this.mainBtn.current.classList.remove("py-0");
                this.mainBtn.current.classList.remove("active");
            }
            console.log(this.container.current.classList);
        }
    }

    clearFilter() {
        this.props.forwardedRef.refFrom.current.value = null;
        this.props.forwardedRef.refTo.current.value = null;

        this.container.current.classList.remove(this.props.onChangeClass);   
        this.btnClearBlock.current.classList.remove("d-inline-block");
        this.btnClearBlock.current.classList.add("d-none");

        this.filterValue.current.classList.add("d-none");
        this.filterValue.current.classList.remove("d-block");
        this.filterTitle.current.classList.remove("small-title");
        this.mainBtn.current.classList.remove("py-0");
        this.mainBtn.current.classList.remove("active");
    }
    
    render() {
        const { text } = this.props;
        const { refFrom, refTo } = this.props.forwardedRef;
        const { additionalOptions } = this.props;

        return (
            <div className={`btn-group ranged-filter-container`} ref={this.container}>
                <div>
                    <button ref={this.mainBtn} type="button" className="btn dropdown-toggle ranged-filter no-shadow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="d-inline-block">
                            <span ref={this.filterTitle}>{text}</span>
                            <span ref={this.filterValue} className="d-none filter-value-text"></span>
                        </div>
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
                <div ref={this.btnClearBlock} className="filter-cleaner d-none">
                    <button className="no-shadow pl-0" onClick={this.clearFilter}><img src={closeIcon} /></button>
                </div>
            </div>
        );
    }
}

export default React.forwardRef((props, ref) => (<RangedFilter forwardedRef={ref} {...props} />));