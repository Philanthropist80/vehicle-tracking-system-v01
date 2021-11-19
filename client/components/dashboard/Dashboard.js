
import React from 'react';
import { cyan, pink, purple, orange } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';
import {  Assessment, Face, AirportShuttle } from '@material-ui/icons';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';

import SummaryBox from './SummaryBox';
import RecentRegistration from './RecentRegistration';


const recentRegistration = [
  { id: 1, code: 'TRK704', description: 'VTS Fleet - Truck 704' },
  { id: 2, code: 'BAY884', description: 'Motor Car - Registration Number BAY 884' },
  { id: 3, code: 'CAD444', description: 'HTV 22 Wheeler' },
  { id: 4, code: 'UBL999', description: 'Double Dekker Bus - Code UBL 999' },
];
/*
const mapStyle = () => ({
  map : {
    position: absolute,
    top: 0,
    bottom: 0,
    width: '100%',
  },
});
*/






const lonlat = [73.0479, 33.6844] // Islamabad, Pakistan.


const Dashboard = (props) => {
  const { user, onSubmit, classes, errorMessage } = props;

    return (
      <div>
        <h2 style={{ paddingBottom: '15px' }}>Dashboard</h2>
  
        <Grid container spacing={4} style={{ marginBottom: '15px' }}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <SummaryBox Icon={LocalTaxiIcon} color={pink[600]} title="Active Vehicles" value="721" />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <SummaryBox Icon={Face} color={orange[600]} title="New Members" value="248" />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <SummaryBox Icon={AirportShuttle} color={cyan[600]} title="Registration" value="4231" />
          </Grid>
  
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <SummaryBox Icon={Assessment} color={purple[600]} title="Revenue" value="460" />
          </Grid>
  
         
        </Grid>
        
        <Grid container  style={{ marginBottom: '15px' }}>
          <Grid item xs>
            <RecentRegistration data={recentRegistration} />
          </Grid>
        </Grid>
  
        <div>
        
          <div id="map" className="map">MAP HERE</div>
         
        </div>
      </div>
    )

 
};

export default Dashboard;
