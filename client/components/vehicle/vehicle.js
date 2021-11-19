import React from 'react';
import { Link } from 'react-router-dom';
import { cyan, pink, purple, orange } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';
import {  Assessment, Face, AirportShuttle } from '@material-ui/icons';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';



const Vehicle = (props) => {
  const { user, onSubmit, classes, errorMessage } = props;

    return (
      <div>
        <Grid container spacing={4} style={{marginBottom: 15}}>
            <Grid item xs={6}>
                <h2 style={{ paddingBottom: '15px' }}>Vehicles</h2>
            </Grid>
            <Grid item xs={6}>
                <p style={{}}>
                    Register and track your vehicle online. <Link to={'/vehicleregistration'}>Register Now!</Link>.
                </p>
            </Grid>
        </Grid>
        
  
        <Grid container spacing={4} style={{ marginBottom: '15px' }}>
          <Grid item lg={3} sm={3} xl={3} xs={3}>
            Code
          </Grid>
          <Grid item lg={3} sm={3} xl={3} xs={3}>
            Description
          </Grid>
          <Grid item lg={3} sm={3} xl={3} xs={3}>
            Registration Year
          </Grid>
          <Grid item lg={3} sm={3} xl={3} xs={3}>
            Model
          </Grid>
        </Grid>
        
        <Grid container  style={{ marginBottom: '15px' }}>
          <Grid item xs>
            Other Details
          </Grid>
        </Grid>
  
        
      </div>
    )

 
};

export default Vehicle;
