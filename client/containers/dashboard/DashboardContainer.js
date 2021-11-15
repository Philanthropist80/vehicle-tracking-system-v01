import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Import custom components
import Dashboard from '../../components/dashboard/Dashboard';

import * as dashboardService from '../../services/dashboardService';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Dashboard />;
  }
}

//export default DashboardContainer;
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
  actions: bindActionCreators(Object.assign({}, dashboardService), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);


