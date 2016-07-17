define([
    'esri/layers/WMSLayer',
    'esri/layers/WMSLayerInfo',
    'esri/geometry/Extent'
], function (WMSLayer, WMSLayerInfo, Extent) {
    return {
        map: true, // needs a refrence to the map
        mode: 'agol', //must be either 'agol' or 'custom'
        title: 'Basemaps', // title for widget
        mapStartBasemap: 'hybrid', // must match one of the basemap keys below
        //basemaps to show in menu. define in basemaps object below and reference by name here
        // TODO Is this array necessary when the same keys are explicitly included/excluded below?

        basemapsToShow: ['hybrid','streets','topo', 'Natural2015', 'Infrared2015', 'Natural2013', 'Natural2012', 'Infrared2012', 'Natural2010', 'Natural2007', 'Infrared2007'],

        // a WMS configuration (WMSLayer). The service where WMS basemaps below will be pulled from.
        wmsConfig: new WMSLayer('http://geodata.state.nj.us/imagerywms/Natural2015?', {
            id: 'wmslayer',
            format: 'png',
            resourceInfo: {
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
            },
            visibleLayers: []
        }),

        // define all valid custom basemaps here. Object of Basemap objects. For custom & wms basemaps, the key name and basemap id must match.
        basemaps: {

            // agol basemaps
            streets: {
                title: 'Streets'
            },
            hybrid: {
                title: 'Hybrid'
            },
            topo: {
                title: 'Topo'
            },

            
            // examples of WMS layers
            Natural2015: {
                title: '2015 - Leaf Off (WMS)',
                wms: true,
                basemap :{
                    id: 'Natural2015'
                }
            },

            Infrared2015: {
                title: '2015 - Infrared (WMS)',
                wms: true,
                basemap :{
                    id: 'Infrared2015'
                }
            },

            Natural2013: {
                title: '2013 - Leaf On (WMS)',
                wms: true,
                basemap :{
                    id: 'Natural2013'
                }
            },

            Natural2012: {
                title: '2012 - Leaf Off (WMS)',
                wms: true,
                basemap :{
                    id: 'Natural2012'
                }
            },

            Infrared2012: {
                title: '2012 - Infrared (WMS)',
                wms: true,
                basemap :{
                    id: 'Infrared2012'
                }
            },

            Natural2010: {
                title: '2010 - Leaf On (WMS)',
                wms: true,
                basemap :{
                    id: 'Natural2010'
                }
            },

            Natural2007: {
                title: '2007 - Leaf Off (WMS)',
                wms: true,
                basemap :{
                    id: 'Natural2007'
                }
            },

            Infrared2007: {
                title: '2007 - Infrared (WMS)',
                wms: true,
                basemap :{
                    id: 'Infrared2007'
                }
            }

        }
    };
});