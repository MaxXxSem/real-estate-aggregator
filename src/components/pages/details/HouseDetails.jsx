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

        let adDate = null;
        if (house)
            adDate = new Date(house.Info.CreationDate);

        return (
            (house &&
            <div className="container">
                {/* Заглавие */}
                <div className="details-title py-4">
                    <span>{house.Info.Title}</span>
                </div>
                
                {/* Фото */}
                <DetailsImages images={house.Info.Photos} />
                
                <div className="details-right-block">
                    {/* Цена */}
                    <div className="details-price">
                        <span>{`${house.Info.Price}`}</span>
                    </div>

                    {/* Контакты */}
                    <div className="details-contacts">
                        <h3>Контакты</h3>
                        <div className="contacts-name">{house.Contacts.Name}</div>
                        <div className="contacts-phone">{house.Contacts.Phone}</div>
                        <div className="contacts-status">{house.Contacts.Status}</div>
                    </div>
                </div>
                
                <div className="details-bottom-block">
                    {/* Адрес */}
                    <div className="details-address">
                        <span>{house.Info.Address}</span>
                    </div>
                    
                    {/* Дата объявления */}
                    <div className="details-date">
                        <span>{`${adDate.getDate()}-${adDate.getMonth()}-${adDate.getFullYear()}`}</span>
                    </div>
                    
                    {/* Предложение от */}
                    <div className="details-offer-from mt-4">
                        <Label text="Предложение от" />
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
                            <Label text="Кол-во комнат" classes="col-md-2 px-0" />
                            <span className="col-md-2 px-0">{house.Info.RoomsCount || "-"}</span>
                        </div>
                        <div className="details-features-item">
                            <Label text="Площадь дома" classes="col-md-2 px-0" />
                            <span className="col-md-2 px-0">{house.Info.HouseArea || "-"} м<sup>2</sup></span>
                        </div>
                        <div className="details-features-item">
                            <Label text="Площадь участка" classes="col-md-2 px-0" />
                            <span className="col-md-2 px-0">{house.Info.PlotArea || "-"} м<sup>2</sup></span>
                        </div>
                        <div className="details-features-item">
                            <Label text="Кол-во этажей" classes="col-md-2 px-0" />
                            <span className="col-md-2 px-0">{`${this.state.house.Info.NumberOfFloors || "-"}`}</span>
                        </div>
                        <div className="details-features-item mb-4">
                            <Label text="Тип дома" classes="col-md-2 px-0" />
                            <span className="col-md-2 px-0">{house.Info.BuildingType || "-"}</span>
                        </div>
                    </div>
                    
                    {/* Подробное описание */}
                    <div className="details-description">
                        {house.Info.Description}
                    </div>
                </div>
            </div>
            ) || 
            <div>Error</div>
        )
    }
}

export default HouseDetails;