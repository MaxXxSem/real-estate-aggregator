import React from 'react';

class Pagination extends React.Component {    
    render() {
        return (
            <nav aria-label="..." className="d-inline-block">
                <ul className="pagination">
                    <li className={`page-item ${this.props.page == 1 ? 'disabled' : ""}`}>
                        <a onClick={this.props.onPrevPage} className="page-link" href="#" tabIndex="-1">Previous</a>
                    </li>
                    {
                        (() => {
                            let items = [];
                            for (let i = 1; i <= this.props.pagesNumber; i++) {
                                items.push(
                                    <li className={`page-item ${i == this.props.page ? 'active' : ""}`} key={i}>
                                        <a onClick={this.props.onPageChange} value={i} className="page-link" href="#">{i}</a>
                                    </li>
                                );
                            }
                            return items;
                        })()
                    }
                    <li className={`page-item  ${this.props.page == this.props.pagesNumber ? 'disabled' : ""}`}>
                        <a onClick={this.props.onNextPage} className='page-link' href="#">Next</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Pagination;