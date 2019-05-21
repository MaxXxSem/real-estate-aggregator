import Home from '../pages/Home';
import RealEstateList from '../pages/RealEstateList';
import Details from '../pages/Details';

export const routes = [
    { path: '/home', exect: true, name: 'Home', component: Home },
    { path: '/list', exect: true, name: 'List', component: RealEstateList },
    { path: '/details', exect: true, name: 'Details', component: Details }
];