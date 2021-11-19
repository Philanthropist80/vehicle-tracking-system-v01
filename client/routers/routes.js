import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Import custom components
import PrivateRoute from './PrivateRoute';
import RestrictRoute from './RestrictRoute';
import MainLayout from '../components/common/layout/MainLayout';
import NotFound from '../components/error/NotFound';

//import {MapContainer} from '../containers/maps/MapsContainer';

const AsyncLoginForm = loadable(() => import('../containers/auth/LoginContainer'));
const AsyncSignUpForm = loadable(() => import('../containers/auth/SignUpContainer'));
const AsyncDashboard = loadable(() => import('../containers/dashboard/DashboardContainer'));
const AsyncVehicle = loadable(() => import('../containers/vehicle/VehicleContainer'));
const AsyncVehicleRegistration = loadable(() => import('../containers/vehicle/VehicleRegistrationContainer'));
const AsyncUsers = loadable(() => import('../containers/users/UsersContainer'));
const AsyncMaps = loadable(() => import('../containers/maps/MapsContainer'));

const Router = () => (
  <Fragment>
    <Switch>
      <RestrictRoute exact path="/" component={AsyncLoginForm} />
      <RestrictRoute exact path="/signup" component={AsyncSignUpForm} />

      <PrivateRoute exact path="/dashboard" layout={MainLayout} component={AsyncDashboard} />
      <PrivateRoute exact path="/vehicle" layout={MainLayout} component={AsyncVehicle} />
      <PrivateRoute exact path="/users" layout={MainLayout} component={AsyncUsers} />
      <PrivateRoute exact path="/map" layout={MainLayout} component={AsyncMaps} />
      <PrivateRoute exect path="/vehicleregistration" layout={MainLayout} component={AsyncVehicleRegistration} />

      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default Router;
