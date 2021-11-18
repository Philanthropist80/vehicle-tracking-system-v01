import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import custom components
import Vehicle from '../../components/vehicle/Vehicle';

import * as vehicleService from '../../services/vehicleService';

class VehicleContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Vehicle />;
  }
}

//export default VehicleContainer;
/**
 * Map the state to props.
 */
 const mapStateToProps = (state) => ({
  user: state.auth.user,
  token: state.auth.token,
  isAuthenticated: state.auth.isAuthenticated,
  errorMessage: state.auth.errorMessage,
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign({}, vehicleService), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleContainer);


