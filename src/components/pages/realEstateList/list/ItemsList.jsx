import React from 'react';
import ListItem from '../listItem/ListItem';

// list of items
class ItemsList extends React.Component {
    constructor(props) {
        super(props);

        this.type = this.props.type;
    }

    shouldComponentUpdate(props, state) {
        if (props.shouldUpdate == true)
            return true;
        return false;
    }
    
    render() {
        const { items } = this.props;
        console.log(items);

        return (
            <div className="container">
                {
                    (items.length > 0) && 
                    items.map(x => (
                        <ListItem
                            key={x.Id}
                            href={`/details/${this.type}/${x.Id}`}
                            type={this.type}
                            mainImage={x.Info.Photos[0]}
                            address={x.Info.Address}
                            price={x.Info.Price}
                            roomsCount={x.Info.RoomsCount}
                            floor={x.Info.Floor}
                            numberOfFloors={x.Info.NumberOfFloors}
                            title={x.Info.Title}
                            date={x.Info.CreationDate}
                        />
                    ))
                }
            </div>
        )
    }
}

export default ItemsList;