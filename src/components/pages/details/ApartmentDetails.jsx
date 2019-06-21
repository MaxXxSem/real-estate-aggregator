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

        let adDate = null;
        if (apartment)
            adDate = new Date(apartment.Info.CreationDate);

        return (
            (apartment &&
            <div>
                <div className="item-container">
                    {/* Заглавие */}
                    <div className="details-title px-3 py-4">
                        <span>{apartment.Info.Title}</span>
                    </div>
                    
                    <div className="row mx-0 pb-3">
                        {/* Фото */}
                        <DetailsImages 
                            images={apartment.Info.Photos} 
                            classes="col-md-8"
                        />

                        <div className="details-right-block col-md-4">
                            {/* Цена */}
                            <div className="details-price">
                                <span>{`${apartment.Info.Price} $`}</span>
                            </div>

                            {/* Контакты */}
                            <div className="details-contacts">
                                <h3>Контакты</h3>
                                <div className="contacts-name">{apartment.Contacts.Name}</div>
                                <div className="contacts-phone">{apartment.Contacts.Phone}</div>
                                <div className="contacts-status">{apartment.Contacts.Status}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="details-bottom-block item-container">
                    {/* Адрес */}
                    <div className="details-address">
                        <span>{apartment.Info.Address}</span>
                    </div>
                    
                    {/* Дата объявления */}
                    <div className="details-date">
                        <span>{`${adDate.getDate()}-${adDate.getMonth()}-${adDate.getFullYear()}`}</span>
                    </div>
                    
                    {/* Предложение от */}
                    <div className="details-offer-from mt-4 mx-0 row">
                        <Label text="Предложение от" classes="col-md-2 px-0" />
                        <span className="col-md-2 px-0">{apartment.Info.OfferFrom}</span>
                    </div>
                    
                    {/* Детали */}
                    <div className="details-features pb-1 mb-4">
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
                            <span className="col-md-2 px-0">{apartment.Info.RoomsCount || "-"}</span>
                        </div>
                        <div className="details-features-item">
                            <Label text="Площадь" classes="col-md-2 px-0" />
                            <span className="col-md-2 px-0">{apartment.Info.FullArea || "-"} м<sup>2</sup></span>
                        </div>
                        <div className="details-features-item">
                            <Label text="Жилая площадь" classes="col-md-2 px-0" />
                            <span className="col-md-2 px-0">{apartment.Info.LivingArea || "-"} м<sup>2</sup></span>
                        </div>
                        <div className="details-features-item">
                            <Label text="Этаж" classes="col-md-2 px-0" />
                            <span className="col-md-2 px-0">{`${apartment.Info.Floor || "-"} / ${this.state.apartment.Info.NumberOfFloors || "-"}`}</span>
                        </div>
                        <div className="details-features-item mb-4">
                            <Label text="Тип дома" classes="col-md-2 px-0" />
                            <span className="col-md-2 px-0">{apartment.Info.BuildingType || "-"}</span>
                        </div>
                    </div>
                    
                    {/* Подробное описание */}
                    <div className="details-description">
                        <Label text="Описание" classes="h3 d-block" />
                        {apartment.Info.Description}
                    </div>
                </div>
            </div>
            ) || 
            <div>Error</div>
        )
    }
}

export default ApartmentDetails;