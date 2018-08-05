define([
    'esri/layers/WMSLayer',
    'esri/layers/WMSLayerInfo',
    'esri/geometry/Extent',
    'esri/dijit/Basemap',
    'esri/dijit/BasemapLayer'
], function (WMSLayer, WMSLayerInfo, Extent, Basemap, BasemapLayer) {

    var wmsBaseUrl = 'https://geodata.state.nj.us/imagerywms/';

    var resourceInfo = {
        extent: new Extent({
            'xmin': -8415837.926295,
            'ymin': 4708913.980133,
            'xmax': -8223182.925376,
            'ymax': 5067478.812879,
            'spatialReference': {
                'wkid': 3857
            }
        }),
        layerInfos: [new WMSLayerInfo({
            title: 'Imagery'
        })],
        version: ['1.1.1']
    };

    return {
        map: true, // needs a refrence to the map
        mode: 'custom', //must be either 'agol' or 'custom'
        title: 'WMS Basemaps', // title for widget
        mapStartBasemap: 'HCGIS', // must match one of the basemap keys below
        //basemaps to show in menu. define in basemaps object below and reference by name here
        // TODO Is this array necessary when the same keys are explicitly included/excluded below?

        basemapsToShow: ['HCGIS', 'OGIS', 'Natural2017', 'Infrared2015', 'Natural2013'],


        // define all valid custom basemaps here. Object of Basemap objects. For custom & wms basemaps, the key name and basemap id must match.
        basemaps: {

            HCGIS: {
                title: 'NJ Highlands Basemap',
                basemap: new Basemap({
                    id: 'HCGIS',
                    layers: [new BasemapLayer({
                        url: 'https://geodata.state.nj.us/arcgis/rest/services/Basemap/Highlands_NJ/MapServer'
                    })]
                })
            },

            OGIS: {
                title: 'NJ OGIS Basemap',
                basemap: new Basemap({
                    id: 'OGIS',
                    layers: [new BasemapLayer({
                        url: 'https://geodata.state.nj.us/arcgis/rest/services/Basemap/Color_NJ/MapServer'
                    })]
                })
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