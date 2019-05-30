import data from "../datasets/houses.json";

class HousesDataManager {
    static getHouses(city, filter, limit = 10, offset = 0) {
        // filters
        let houses = data.data.houses.filter(x => x.City === city);

        if (filter) {
            houses = houses.filter(
                x => (
                    (filter.priceFrom ? x.Info.Price >= filter.priceFrom : true)
                    && (filter.priceTo ? x.Info.Price <= filter.priceTo : true)
                    && (filter.roomsCountFrom ? (x.Info.RoomsCount == null || x.Info.RoomsCount >= filter.roomsCountFrom) : true)
                    && (filter.roomsCountTo ? (x.Info.RoomsCount == null || x.Info.RoomsCount <= filter.roomsCountTo) : true)
                    && (filter.houseAreaFrom ? (x.Info.HouseArea == null ||  x.Info.HouseArea >= filter.houseAreaFrom) : true)
                    && (filter.houseAreaTo ? (x.Info.HouseArea == null || x.Info.HouseArea <= filter.houseAreaTo) : true)
                    && (filter.plotAreaFrom ? (x.Info.PlotArea == null || x.Info.PlotArea >= filter.plotAreaFrom) : true)
                    && (filter.plotAreaTo ? (x.Info.PlotArea == null || x.Info.PlotArea <= filter.plotAreaTo) : true)
                    && (filter.numberOfFloorsFrom ? (x.Info.NumberOfFloors == null || x.Info.NumberOfFloors >= filter.numberOfFloorsFrom) : true)
                    && (filter.numberOfFloorsTo ? (x.Info.NumberOfFloors == null || x.Info.NumberOfFloors <= filter.numberOfFloorsTo) : true)
                    && (filter.buildingType ? (x.Info.BuildingType == null || x.Info.BuildingType === filter.buildingType) : true)
                    && (filter.noWorkWithRieltors && filter.noWorkWithRieltors == true ? (x.Info.OfferFrom == null || x.Info.OfferFrom !== "посредник") : true)
                )
            );
        }

        // pagination
        let housesPage = houses.slice(offset, offset + limit);
        console.log(housesPage);
        return {
            data: housesPage, 
            nextOffset: offset + limit,
            totalCount: houses.length 
        };
    }

    static getHouse(id) {
        let house = data.data.houses.filter(x => x.Id == id)[0];
        console.log(house);

        if (house)
            return house;
        else
            return null;
    }
}

export default HousesDataManager;