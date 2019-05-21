import cities from '../datasets/cities.json';
import types from '../datasets/objectTypes.json';

class CommonDataManager {
    getCities() {
        return cities;
    }

    getObjectTypes() {
        return types;
    }
}

export default CommonDataManager;