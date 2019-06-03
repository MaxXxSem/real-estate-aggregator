import React from 'react';
import ObjectType from '../../../../util/ObjectType';

// item
class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.type = this.props.type;
    }
    
    render() {
        return (
            <div className="container">
                <div className="list-item-image">
                    <img src={this.props.mainImage} />
                </div>           

                <div className="list-item-address">
                    <h3>{this.props.address || "-"}</h3>
                </div>     

                <div className="list-item-price">
                    <span>{this.props.price}</span>
                </div>

                {
                    (this.type == ObjectType.Apartments || this.type == ObjectType.Houses) &&
                    (
                        <div className="list-item-rooms-count">
                            <span>Кол-во комнат</span>
                            <span>{this.props.roomsCount || "-"}</span>
                        </div>
                    )
                }
                
                {
                    this.type == ObjectType.Apartments &&
                    (
                        <div className="list-item-floors">
                            <span>Этаж</span>
                            <span>{this.props.floor || "-"} / {this.props.numberOfFloors || "-"}</span>
                        </div>
                    )
                }

                <div className="list-item-title">
                    {this.props.title}
                </div>

                <div className="list-item-date">
                    <span>{this.props.date}</span>
                </div>
            </div>
        )
    }
}

export default ListItem;