/**
 * Created by ishiland on 7/2/18.
 */
define([
    'esri/layers/WMSLayer',
    'esri/layers/WMSLayerInfo'
], function (WMSLayer, WMSLayerInfo) {

    var wmsBaseUrl = 'https://geodata.state.nj.us/imagerywms/';

    // Configure State of New Jersey's WMS Server
    var resourceInfo = {
        extent: {},
        layerInfos: [new WMSLayerInfo({
            title: 'State of NJ, Office of Information Technology'
        })],
        version: ['1.1.1']
    };

    // Possible to Configure additional WMS Servers. Set resourceInfo and baseURL variables. Add them to `basemaps` below.
    // var resourceInfoUSGS = {  // this server no longer available ?
    //     extent: {},
    //     layerInfos: [new WMSLayerInfo({
    //         title: 'U.S. Geological Survey Mineral Resources Program'
    //     })],
    //     version: ['1.3.0']
    // };

    return {
        map: true, // needs a refrence to the map
        mode: 'agol', //must be either 'agol' or 'custom'
        title: 'WMS Basemaps', // title for widget
        mapStartBasemap: 'hybrid', // must match one of the basemap keys below

        //basemaps to show in menu. define in basemaps object below and reference by name here
        basemapsToShow: ['hybrid', 'topo', 'Natural2017', 'Infrared2015', 'Natural2013'],


        // define all valid custom basemaps here. Object of Basemap objects. For custom & wms basemaps, the key name and basemap id must match.
        basemaps: {

            // agol basemaps
            hybrid: {
                title: 'Hybrid - AGOL'
            },
            topo: {
                title: 'Topo - AGOL'
            },

            // wms layers
            Natural2017: {
                title: '2017 Leaf On - WMS',
                basemap: new WMSLayer(wmsBaseUrl + 'Natural2017?', {
                    id: 'Natural2017',
                    format: 'png',
                    resourceInfo: resourceInfo,
                    visibleLayers: ['Natural2017']
                })
            },

            Infrared2015: {
                title: '2015 Infrared - WMS',
                basemap: new WMSLayer(wmsBaseUrl + 'Infrared2015?', {
                    id: 'Infrared2015',
                    format: 'png',
                    resourceInfo: resourceInfo,
                    visibleLayers: ['Infrared2015']
                })
            },

            Natural2013: {
                title: '2013 Leaf On - WMS',
                basemap: new WMSLayer(wmsBaseUrl + 'Natural2013?', {
                    id: 'Natural2013',
                    format: 'png',
                    resourceInfo: resourceInfo,
                    visibleLayers: ['Natural2013']
                })
            }
        }
    };
});