/* eslint-disable */
define([
    'esri/units',
    'esri/config',
    'esri/tasks/GeometryService',
    'dojo/i18n!./nls/main',
    'esri/dijit/Basemap',
    'esri/dijit/BasemapLayer',
    'esri/geometry/Point'
], function (units, esriConfig, GeometryService, i18n, Basemap, BasemapLayer, Point) {

    // url to your proxy page, must be on same machine hosting you app. See proxy folder for readme.
    esriConfig.defaults.io.proxyUrl = 'proxy/proxy.ashx';
    esriConfig.defaults.io.alwaysUseProxy = false;

    // url to your geometry server.
    esriConfig.defaults.geometryService = new GeometryService('https://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer');


    return {
        // used for debugging your app
        isDebug: true,

        //default mapClick mode, mapClickMode lets widgets know what mode the map is in to avoid multipult map click actions from taking place (ie identify while drawing).
        defaultMapClickMode: 'identify',
        // map options, passed to map constructor. see: https://developers.arcgis.com/javascript/jsapi/map-amd.html#map1
        mapOptions: {

            // // for custom start basemap:
            // basemap: new Basemap({
            //     layers: [new BasemapLayer({
            //         url: 'http://services.arcgisonline.com/arcgis/rest/services/ESRI_StreetMap_World_2D/MapServer'
            //     })]
            // }),
            // center: new Point({
            //     x: -74.4,
            //     y: 40.2,
            //     spatialReference: {
            //         wkid: 4326
            //     }
            // }),

            basemap:'hybrid',
            center: [-74.4, 40.2],
            zoom: 10,
            sliderStyle: 'small'
        },

        panes: {
            left: {
                open: false,
                splitter: true
            },
        },


        // custom titles
        titles: {
            header: i18n.viewer.titles.header,
            subHeader: 'WMS Basemaps Example',
            pageTitle: i18n.viewer.titles.pageTitle + ' - WMS Basemaps Example',
        },


        layout: {},

        operationalLayers: [],

        widgets: {
            wmsBasemaps: {
                include: true,
                id: 'wmsBasemaps',
                type: 'domNode',
                path: 'gis/plugins/WMSBasemaps',
                srcNodeRef: 'basemapsDijit',
                options: 'config/wmsBasemaps'
            },

            // other widgets here...
        }
    };
});
