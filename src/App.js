import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { routes } from './config/routes';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/popper.js/dist/popper';
import '../node_modules/bootstrap/dist/js/bootstrap';

class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Switch>
                        {
                            routes.map((route, idx) => {
                                return route.component ?
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        component={props => (
                                            <route.component {...props} />
                                        )} /> :
                                    null;
                            })
                        }
                        
                        <Redirect exact strict from="/" to="/home" />
                        <Route component={() => <NotFound />} />

                    </Switch>
                </BrowserRouter>

                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable={false}
                    pauseOnHover
                />
            </>
        );
    }
}

export default App;