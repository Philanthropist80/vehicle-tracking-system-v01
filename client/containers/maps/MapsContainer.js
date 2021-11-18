import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import custom components
import Maps from '../../components/maps/maps';

import * as mapsService from '../../services/mapsService';

class MapsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Maps />;
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
  actions: bindActionCreators(Object.assign({}, mapsService), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapsContainer);


