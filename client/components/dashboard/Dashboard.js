
import React from 'react';
import { cyan, pink, purple, orange } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';
import {  Assessment, Face, AirportShuttle } from '@material-ui/icons';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';

import SummaryBox from './SummaryBox';
import RecentRegistration from './RecentRegistration';

//import 'ol/ol.css';
import Feature from 'ol/Feature';
import Geolocation from 'ol/Geolocation';
import {Map, View} from 'ol';
import Point from 'ol/geom/Point';
import {transform} from 'ol/proj';
import {Circle as CircleStyle, Fill, Stroke, Style, Icon} from 'ol/style';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';


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
/*
//Base Layer with Open Street Maps
const baseMapLayer = new TileLayer({
  source: new OSM()
});
//Construct the Map Object
const map = new Map({
  target: 'map',
  layers: [ baseMapLayer],
  view: new View({
          center: lonlat,
          zoom: 15 //Initial Zoom Level
        })
});
//Set up an  Style for the marker note the image used for marker
const iconStyle = new Style({
    image: new Icon( ({
      anchor: [0.5, 16],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: 'image/icon.png'
    }))
});
//Adding a marker on the map
const marker = new Feature({
  geometry: new Point(lonlat)

});
marker.setStyle(iconStyle);
const vectorSource = new VectorSource({
  features: [marker]
});
const markerVectorLayer = new VectorLayer({
  source: vectorSource,
});
// add style to Vector layer style map
map.addLayer(markerVectorLayer);

const updateCoordinate =  (item) => { 
    // Structure of the input Item
    // {"Coordinate":{"Longitude":80.2244,"Latitude":12.97784}}    var featureToUpdate = marker;
    const coord = [item.Coordinate.Longitude, item.Coordinate.Latitude];
    featureToUpdate.getGeometry().setCoordinates(coord);
};
*/

//Base Layer with Open Street Maps
const baseMapLayer = new ol.layer.Tile({
  source: new ol.source.OSM()
});
//Construct the Map Object
const map = new ol.Map({
  target: 'map',
  layers: [ baseMapLayer],
  view: new ol.View({
          center: ol.proj.fromLonLat(lonlat),
          zoom: 15 //Initial Zoom Level
        })
});
//Set up an  Style for the marker note the image used for marker
const iconStyle = new ol.style.Style({
    image: new ol.style.Icon(/** @type {module:ol/style/Icon~Options} */ ({
      anchor: [0.5, 16],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: 'image/icon.png'
    }))
});
//Adding a marker on the map
const marker = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat(lonlat)
  )
});
marker.setStyle(iconStyle);
const vectorSource = new ol.source.Vector({
  features: [marker]
});
const markerVectorLayer = new ol.layer.Vector({
  source: vectorSource,
});
// add style to Vector layer style map
map.addLayer(markerVectorLayer);

const updateCoordinate =  (item) => { 
    // Structure of the input Item
    // {"Coordinate":{"Longitude":80.2244,"Latitude":12.97784}}    var featureToUpdate = marker;
    const coord = ol.proj.fromLonLat([item.Coordinate.Longitude, item.Coordinate.Latitude]);
    featureToUpdate.getGeometry().setCoordinates(coord);
} 


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
