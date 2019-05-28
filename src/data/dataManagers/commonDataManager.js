import cities from '../datasets/cities.json';
import types from '../datasets/objectTypes.json';
import apartmentBuildingTypes from '../datasets/apartmentBuildingTypes.json';
import housesBuildingTypes from '../datasets/housesBuildingTypes.json';
import plotTypes from '../datasets/plotTypes.json';

class CommonDataManager {
    static getCities() {
        return cities;
    }

    static getObjectTypes() {
        return types;
    }

    static getApartmentTypes() {
        return apartmentBuildingTypes;
    }

    static getHouseTypes() {
        return housesBuildingTypes;
    }

    static getPlotTypes() {
        return plotTypes;
    }
}

export default CommonDataManager;