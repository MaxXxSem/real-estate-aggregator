import React from 'react';
import ObjectType from '../../../../util/ObjectType';
import './ListItem.scss';

// item
class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.type = this.props.type;
    }
    
    render() {
        let adDate = new Date(this.props.date);

        return (
            <div className="real-estate-item item-container row mx-0">
                <div className="list-item-image col-md-6 p-0">
                    <a className="w-100" href={this.props.href} target="_blank"><img className="w-100" src={this.props.mainImage} /></a>
                </div>      

                <div className="list-item-info col-md-6 p-4">
                    <div className="list-item-address">
                        <a href={this.props.href} target="_blank">{this.props.address || "-"}</a>
                    </div>    

                    <div className="list-item-price">
                        <span>{`${this.props.price} $`}</span>
                    </div>

                    {
                        (this.type == ObjectType.Apartments || this.type == ObjectType.Houses) &&
                        (
                            <div className="list-item-rooms-count list-item-info-size">
                                <span>Кол-во комнат</span>
                                <span>{this.props.roomsCount || "-"}</span>
                            </div>
                        )
                    }
                    
                    {
                        this.type == ObjectType.Apartments &&
                        (
                            <div className="list-item-floors list-item-info-size">
                                <span>Этаж</span>
                                <span>{this.props.floor || "-"} / {this.props.numberOfFloors || "-"}</span>
                            </div>
                        )
                    }

                    <div className="list-item-title list-item-info-size">
                        {this.props.title}
                    </div>

                    <div className="list-item-date">
                        <span>{`${adDate.getDate()}-${adDate.getMonth()}-${adDate.getFullYear()}`}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListItem;