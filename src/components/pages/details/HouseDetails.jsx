import React from 'react';
import HousesDataManager from '../../../data/dataManagers/housesDataManager';
import Label from '../../common/label/Label';
import DetailsImages from '../details/DetailsImages/DetailsImages';

// specific object details
class HouseDetails extends React.Component {    
    constructor(props) {
        super(props);

        this.state = {
            house: null
        }
    }

    componentDidMount() {
        this.setState({
            house: HousesDataManager.getHouse(this.props.id)
        })
    }

    render() {
        const { house } = this.state;

        return (
            (house &&
            <div className="container">
                {/* Заглавие */}
                <div className="details-title">
                    <span>{house.Info.Title}</span>
                </div>
                
                {/* Фото */}
                <DetailsImages images={house.Info.Photos} />
                
                {/* Цена */}
                <div className="details-price">
                    <span>{house.Info.Price}</span>
                </div>
                
                {/* Адрес */}
                <div className="details-address">
                    <span>{house.Info.Address}</span>
                </div>
                
                {/* Дата объявления */}
                <div className="details-date">
                    <span>{house.Info.CreationDate}</span>
                </div>
                
                {/* Предложение от */}
                <div className="details-offer-from">
                    <span>{house.Info.OfferFrom}</span>
                </div>
                
                {/* Детали */}
                <div className="details-features">
                    {/* 
                        RoomsCount
                        FullArea
                        LivingArea
                        NumberOfFloors
                        Floor
                        BuildingType
                    */}
                    <div className="details-features-item">
                        <Label text="Кол-во комнат" />
                        <span>{house.Info.RoomsCount || "-"}</span>
                    </div>
                    <div className="details-features-item">
                        <Label text="Площадь дома" />
                        <span>{house.Info.HouseArea || "-"}</span>
                    </div>
                    <div className="details-features-item">
                        <Label text="Площадь участка" />
                        <span>{house.Info.PlotArea || "-"}</span>
                    </div>
                    <div className="details-features-item">
                        <Label text="Кол-во этажей" />
                        <span>{`${this.state.house.Info.NumberOfFloors || "-"}`}</span>
                    </div>
                    <div className="details-features-item">
                        <Label text="Тип дома" />
                        <span>{house.Info.BuildingType || "-"}</span>
                    </div>
                </div>
                
                {/* Подробное описание */}
                <div className="details-description">
                    {house.Info.Description}
                </div>
                
                {/* Контакты */}
                <div className="details-contacts">
                    <h3>Контакты</h3>
                    <div className="contacts-name">{house.Contacts.Name}</div>
                    <div className="contacts-phone">{house.Contacts.Phone}</div>
                    <div className="contacts-status">{house.Contacts.Status}</div>
                </div>

            </div>
            ) || 
            <div>Error</div>
        )
    }
}

export default HouseDetails;