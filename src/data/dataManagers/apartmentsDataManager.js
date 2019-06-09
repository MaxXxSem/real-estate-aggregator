import data from "../datasets/apartments.json";

class ApartmentsDataManager {
    static getApartments(city, filter, sorting, limit = 10, offset = 0) {
        // filters
        let apartments = data.data.apartments.filter(x => x.City === city);

        if (filter) {
            apartments = apartments.filter(
                x => (
                    (filter.priceFrom ? x.Info.Price >= filter.priceFrom : true)
                    && (filter.priceTo ? x.Info.Price <= filter.priceTo : true)
                    && (filter.roomsCountFrom ? (x.Info.RoomsCount == null || x.Info.RoomsCount >= filter.roomsCountFrom) : true)
                    && (filter.roomsCountTo ? (x.Info.RoomsCount == null || x.Info.RoomsCount <= filter.roomsCountTo) : true)
                    && (filter.fullAreaFrom ? (x.Info.FullArea == null ||  x.Info.FullArea >= filter.fullAreaFrom) : true)
                    && (filter.fullAreaTo ? (x.Info.FullArea == null || x.Info.FullArea <= filter.fullAreaTo) : true)
                    && (filter.livingAreaFrom ? (x.Info.LivingArea == null || x.Info.LivingArea >= filter.livingAreaFrom) : true)
                    && (filter.livingAreaTo ? (x.Info.LivingArea == null || x.Info.LivingArea <= filter.livingAreaTo) : true)
                    && (filter.numberOfFloorsFrom ? (x.Info.NumberOfFloors == null || x.Info.NumberOfFloors >= filter.numberOfFloorsFrom) : true)
                    && (filter.numberOfFloorsTo ? (x.Info.NumberOfFloors == null || x.Info.NumberOfFloors <= filter.numberOfFloorsTo) : true)
                    && (filter.floorFrom ? (x.Info.Floor == null || x.Info.Floor >= filter.floorFrom) : true)
                    && (filter.floorTo ? (x.Info.Floor == null || x.Info.Floor <= filter.floorTo) : true)
                    && (filter.buildingType ? (x.Info.BuildingType == null || x.Info.BuildingType === filter.buildingType) : true)
                    && (filter.noWorkWithRieltors && filter.noWorkWithRieltors == true ? (x.Info.OfferFrom == null || x.Info.OfferFrom !== "посредник") : true)
                )
            );
        }

        if (sorting) {
            let isAsc = sorting.order === "asc";
            if (sorting.key === "price") {
                apartments.sort((a, b) => {
                    return a.Info.Price - b.Info.Price;
                });

                if (!isAsc)
                    apartments = apartments.reverse();
            } else if (sorting.key === "date") {
                apartments.sort((a, b) => {
                    return new Date(a.Info.CreationDate).getTime() - new Date(b.Info.CreationDate).getTime();
                });

                if (!isAsc)
                    apartments = apartments.reverse();
            }
        }

        // pagination
        let apartmentsPage = apartments.slice(offset, offset + limit);
        return {
            data: apartmentsPage, 
            nextOffset: offset + limit,
            totalCount: apartments.length 
        };
    }

    static getApartment(id) {
        let apartment = data.data.apartments.filter(x => x.Id == id)[0];

        if (apartment)
            return apartment;
        else
            return null;
    }
}

export default ApartmentsDataManager;