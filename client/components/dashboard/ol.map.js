



const lonlat = [73.0479, 33.6844] // Islamabad, Pakistan.

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

