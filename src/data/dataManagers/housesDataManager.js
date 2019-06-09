import data from "../datasets/houses.json";

class HousesDataManager {
    static getHouses(city, filter, sorting, limit = 10, offset = 0) {
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

        if (sorting) {
            let isAsc = sorting.order === "asc";
            if (sorting.key === "price") {
                houses.sort((a, b) => {
                    return a.Info.Price - b.Info.Price;
                });

                if (!isAsc)
                    houses = houses.reverse();
            } else if (sorting.key === "date") {
                houses.sort((a, b) => {
                    return new Date(a.Info.CreationDate).getTime() - new Date(b.Info.CreationDate).getTime();
                });

                if (!isAsc)
                    houses = houses.reverse();
            }
        }

        // pagination
        let housesPage = houses.slice(offset, offset + limit);
        return {
            data: housesPage, 
            nextOffset: offset + limit,
            totalCount: houses.length 
        };
    }

    static getHouse(id) {
        let house = data.data.houses.filter(x => x.Id == id)[0];

        if (house)
            return house;
        else
            return null;
    }
}

export default HousesDataManager;