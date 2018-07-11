/**
 * Created by ishiland on 7/2/18.
 */
define([
    'esri/layers/WMSLayer',
    'esri/layers/WMSLayerInfo'
    // 'esri/dijit/Basemap',
    // 'esri/dijit/BasemapLayer'
], function (WMSLayer, WMSLayerInfo) { //, Basemap, BasemapLayer) {


    // Configure State of New Jersey's WMS Server
    var resourceInfoStateOfNJ = {
        extent: {},
        layerInfos: [new WMSLayerInfo({
            title: 'State of NJ, Office of Information Technology'
        })],
        version: ['1.1.1']
    };


    // Configure USGS's WMS Server
    var resourceInfoUSGS = {
        extent: {},
        layerInfos: [new WMSLayerInfo({
            title: 'U.S. Geological Survey Mineral Resources Program'
        })],
        version: ['1.3.0']
    };

    return {
        map: true, // needs a refrence to the map
        mode: 'agol', //must be either 'agol' or 'custom'
        title: 'WMS Basemaps', // title for widget
        mapStartBasemap: 'hybrid', // must match one of the basemap keys below

        //basemaps to show in menu. define in basemaps object below and reference by name here
        basemapsToShow: ['hybrid', 'topo', 'Natural2015', 'Infrared2015', 'Geology'],


        // define all valid custom basemaps here. Object of Basemap objects. For custom & wms basemaps, the key name and basemap id must match.
        basemaps: {

            // custom basemap
            // streets: {
            //     title: 'Streets - Custom',
            //     basemap: new Basemap({
            //         id: 'streets',
            //         layers: [new BasemapLayer({
            //             url: 'https://services.arcgisonline.com/arcgis/rest/services/ESRI_StreetMap_World_2D/MapServer'
            //         })]
            //     })
            // },

            // agol basemaps
            hybrid: {
                title: 'Hybrid - AGOL'
            },
            topo: {
                title: 'Topo - AGOL'
            },

            Natural2015: {
                title: 'NJ 2015 Leaf Off - WMS',
                basemap: new WMSLayer('https://geodata.state.nj.us/imagerywms/Natural2015?', {
                    id: 'Natural2015',
                    format: 'png',
                    resourceInfo: resourceInfoStateOfNJ,
                    visibleLayers: ['Natural2015']
                })
            },

            Infrared2015: {
                title: 'NJ 2015 Infrared - WMS',
                basemap: new WMSLayer('https://geodata.state.nj.us/imagerywms/Infrared2015?', {
                    id: 'Infrared2015',
                    format: 'png',
                    resourceInfo: resourceInfoStateOfNJ,
                    visibleLayers: ['Infrared2015']
                })
            },

            Geology: {
                title: 'NJ Geology - WMS',
                basemap: new WMSLayer('https://mrdata.usgs.gov/services/nj?', {
                    id: 'Geology',
                    format: 'png',
                    resourceInfo: resourceInfoUSGS,
                    visibleLayers: ['New_Jersey_Geology']
                })
            }
        }
    };
});