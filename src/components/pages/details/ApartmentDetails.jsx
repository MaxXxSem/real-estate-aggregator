import React from 'react';
import ApartmentsDataManager from '../../../data/dataManagers/apartmentsDataManager';
import Label from '../../common/label/Label';
import DetailsImages from '../details/DetailsImages/DetailsImages';

// specific object details
class ApartmentDetails extends React.Component {    
    constructor(props) {
        super(props);

        this.state = {
            apartment: null
        }
    }

    componentDidMount() {
        this.setState({
            apartment: ApartmentsDataManager.getApartment(this.props.id)
        })
    }

    render() {
        // if (this.state.apartment)
        //     const { Info, Contacts } = this.state.apartment;
        const { apartment } = this.state;

        return (
            (apartment &&
            <div className="container">
                {/* Заглавие */}
                <div className="details-title">
                    <span>{apartment.Info.Title}</span>
                </div>
                
                {/* Фото */}
                <DetailsImages images={apartment.Info.Photos} />
                
                {/* Цена */}
                <div className="details-price">
                    <span>{apartment.Info.Price}</span>
                </div>
                
                {/* Адрес */}
                <div className="details-address">
                    <span>{apartment.Info.Address}</span>
                </div>
                
                {/* Дата объявления */}
                <div className="details-date">
                    <span>{apartment.Info.CreationDate}</span>
                </div>
                
                {/* Предложение от */}
                <div className="details-offer-from">
                    <span>{apartment.Info.OfferFrom}</span>
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
                        <span>{apartment.Info.RoomsCount || "-"}</span>
                    </div>
                    <div className="details-features-item">
                        <Label text="Площадь" />
                        <span>{apartment.Info.FullArea || "-"}</span>
                    </div>
                    <div className="details-features-item">
                        <Label text="Жилая площадь" />
                        <span>{apartment.Info.LivingArea || "-"}</span>
                    </div>
                    <div className="details-features-item">
                        <Label text="Этаж" />
                        <span>{`${apartment.Info.Floor || "-"} / ${this.state.apartment.Info.NumberOfFloors || "-"}`}</span>
                    </div>
                    <div className="details-features-item">
                        <Label text="Тип дома" />
                        <span>{apartment.Info.BuildingType || "-"}</span>
                    </div>
                </div>
                
                {/* Подробное описание */}
                <div className="details-description">
                    {apartment.Info.Description}
                </div>
                
                {/* Контакты */}
                <div className="details-contacts">
                    <h3>Контакты</h3>
                    <div className="contacts-name">{apartment.Contacts.Name}</div>
                    <div className="contacts-phone">{apartment.Contacts.Phone}</div>
                    <div className="contacts-status">{apartment.Contacts.Status}</div>
                </div>

            </div>
            ) || 
            <div>Error</div>
        )
    }
}

export default ApartmentDetails;