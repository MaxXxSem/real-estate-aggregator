import React from 'react';
import PlotsDataManager from '../../../data/dataManagers/plotsDataManager';
import Label from '../../common/label/Label';
import DetailsImages from '../details/DetailsImages/DetailsImages';

// specific object details
class PlotDetails extends React.Component {    
    constructor(props) {
        super(props);

        this.state = {
            plot: null
        }
    }

    componentDidMount() {
        this.setState({
            plot: PlotsDataManager.getPlot(this.props.id)
        })
    }

    render() {
        const { plot } = this.state;

        let adDate = null;
        if (plot)
            adDate = new Date(plot.Info.CreationDate);

        return (
            (plot &&
            <div className="container">
                {/* Заглавие */}
                <div className="details-title py-4">
                    <span>{plot.Info.Title}</span>
                </div>
                
                {/* Фото */}
                <DetailsImages images={plot.Info.Photos} />
                
                <div className="details-right-block">
                    {/* Цена */}
                    <div className="details-price">
                        <span>{`${plot.Info.Price}`}</span>
                    </div>

                    {/* Контакты */}
                    <div className="details-contacts">
                        <h3>Контакты</h3>
                        <div className="contacts-name">{plot.Contacts.Name}</div>
                        <div className="contacts-phone">{plot.Contacts.Phone}</div>
                        <div className="contacts-status">{plot.Contacts.Status}</div>
                    </div>
                </div>
                
                <div className="details-bottom-block">
                    {/* Адрес */}
                    <div className="details-address">
                        <span>{plot.Info.Address}</span>
                    </div>
                    
                    {/* Дата объявления */}
                    <div className="details-date">
                        <span>{`${adDate.getDate()}-${adDate.getMonth()}-${adDate.getFullYear()}`}</span>
                    </div>
                    
                    {/* Предложение от */}
                    <div className="details-offer-from mt-4">
                        <Label text="Предложение от" classes="col-md-2 px-0" />
                        <span className="col-md-2 px-0">{plot.Info.OfferFrom}</span>
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
                            <Label text="Площадь участка" classes="col-md-2 px-0" />
                            <span className="col-md-2 px-0">{plot.Info.PlotArea || "-"} м<sup>2</sup></span>
                        </div>
                        <div className="details-features-item mb-4">
                            <Label text="Тип участка" classes="col-md-2 px-0" />
                            <span className="col-md-2 px-0">{plot.Info.PlotType || "-"}</span>
                        </div>
                    </div>
                    
                    {/* Подробное описание */}
                    <div className="details-description">
                        {plot.Info.Description}
                    </div>
                </div>
            </div>
            ) || 
            <div>Error</div>
        )
    }
}

export default PlotDetails;