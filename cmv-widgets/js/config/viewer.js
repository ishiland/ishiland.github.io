define([
    'esri/units',
    'esri/geometry/Extent',
    'esri/config',
    /*'esri/urlUtils',*/
    'esri/tasks/GeometryService',
    'esri/layers/ImageParameters',
    'gis/plugins/Google',
    'dojo/i18n!./nls/main',
    'dojo/topic',
    'dojo/sniff'
], function (units, Extent, esriConfig, /*urlUtils,*/ GeometryService, ImageParameters, GoogleMapsLoader, i18n, topic, has) {

    // url to your proxy page, must be on same machine hosting you app. See proxy folder for readme.
    esriConfig.defaults.io.proxyUrl = 'proxy/proxy.ashx';
    esriConfig.defaults.io.alwaysUseProxy = false;

    // add a proxy rule to force specific domain requests through proxy
    // be sure the domain is added in proxy.config
    /*urlUtils.addProxyRule({
        urlPrefix: 'www.example.com',
        proxyUrl: 'proxy/proxy.ashx'
    });*/

    // url to your geometry server.
    esriConfig.defaults.geometryService = new GeometryService('https://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer');

    // Use your own Google Maps API Key.
    // https://developers.google.com/maps/documentation/javascript/get-api-key
    GoogleMapsLoader.KEY = 'NOT-A-REAL-API-KEY';

    // helper function returning ImageParameters for dynamic layers
    // example:
    // imageParameters: buildImageParameters({
    //     layerIds: [0],
    //     layerOption: 'show'
    // })
    // function buildImageParameters (config) {
    //     config = config || {};
    //     var ip = new ImageParameters();
    //     //image parameters for dynamic services, set to png32 for higher quality exports
    //     ip.format = 'png32';
    //     for (var key in config) {
    //         if (config.hasOwnProperty(key)) {
    //             ip[key] = config[key];
    //         }
    //     }
    //     return ip;
    // }

    //some example topics for listening to menu item clicks
    //these topics publish a simple message to the growler
    //in a real world example, these topics would be used
    //in their own widget to listen for layer menu click events
    // topic.subscribe('layerControl/hello', function (event) {
    //     topic.publish('growler/growl', {
    //         title: 'Hello!',
    //         message: event.layer._titleForLegend + ' ' +
    //             (event.subLayer ? event.subLayer.name : '') +
    //             ' says hello'
    //     });
    // });
    // topic.subscribe('layerControl/goodbye', function (event) {
    //     topic.publish('growler/growl', {
    //         title: 'Goodbye!',
    //         message: event.layer._titleForLegend + ' ' +
    //             (event.subLayer ? event.subLayer.name : '') +
    //             ' says goodbye'
    //     });
    // });

    // simple clustering example now. should be replaced with a layerControl plugin
    // topic.subscribe('layerControl/toggleClustering', function (event) {
    //     var layer = event.layer;
    //     if (layer.getFeatureReduction()) {
    //         if (layer.isFeatureReductionEnabled()) {
    //             layer.disableFeatureReduction();
    //         } else {
    //             layer.enableFeatureReduction();
    //         }
    //     }
    // });

    return {
        // used for debugging your app
        isDebug: true,

        //default mapClick mode, mapClickMode lets widgets know what mode the map is in to avoid multipult map click actions from taking place (ie identify while drawing).
        defaultMapClickMode: 'identify',
        // map options, passed to map constructor. see: https://developers.arcgis.com/javascript/jsapi/map-amd.html#map1
        mapOptions: {
            basemap: 'hybrid',
            center: [-74.4, 40.2],
            zoom: 14,
            sliderStyle: 'small'
        },

        //webMapId: 'ef9c7fbda731474d98647bebb4b33c20',  // High Cost Mortgage
        // webMapOptions: {},

        // panes: {
        // 	left: {
        // 		splitter: true
        // 	},
        // 	right: {
        // 		id: 'sidebarRight',
        // 		placeAt: 'outer',
        // 		region: 'right',
        // 		splitter: true,
        // 		collapsible: true
        // 	},
        // 	bottom: {
        // 		id: 'sidebarBottom',
        // 		placeAt: 'outer',
        // 		splitter: true,
        // 		collapsible: true,
        // 		region: 'bottom'
        // 	},
        // 	top: {
        // 		id: 'sidebarTop',
        // 		placeAt: 'outer',
        // 		collapsible: true,
        // 		splitter: true,
        // 		region: 'top'
        // 	}
        // },
        // collapseButtonsPane: 'center', //center or outer

        // custom titles
        titles: {
            header: i18n.viewer.titles.header,
            subHeader: i18n.viewer.titles.subHeader,
            pageTitle: i18n.viewer.titles.pageTitle
        },

        layout: {
            /*  possible options for sidebar layout:
                    true - always use mobile sidebar, false - never use mobile sidebar,
                    'mobile' - use sidebar for phones and tablets, 'phone' - use sidebar for phones,
                    'touch' - use sidebar for all touch devices, 'tablet' - use sidebar for tablets only (not sure why you'd do this?),
                    other feature detection supported by dojo/sniff and dojo/has- http://dojotoolkit.org/reference-guide/1.10/dojo/sniff.html

                default value is 'phone'
            */
            //sidebar: 'phone'
        },

        // user-defined layer types
        /*
        layerTypes: {
            myCustomLayer: 'widgets/MyCustomLayer'
        },
        */

        // user-defined widget types
        /*
        widgetTypes: [
            'myWidgetType'
        ],
        */

        // ignore the visibility of group layers in dynamic layers? default = true
        //ignoreDynamicGroupVisibility: false,

        // operationalLayers: Array of Layers to load on top of the basemap: valid 'type' options: 'dynamic', 'tiled', 'feature'.
        // The 'options' object is passed as the layers options for constructor. Title will be used in the legend only. id's must be unique and have no spaces.
        // 3 'mode' options: MODE_SNAPSHOT = 0, MODE_ONDEMAND = 1, MODE_SELECTION = 2
        operationalLayers: [],
        // set include:true to load. For titlePane type set position the the desired order in the sidebar
        widgets: {
            wmsBasemaps: {
                include: true,
                id: 'wmsBasemaps',
                type: 'domNode',
                path: 'gis/plugins/WMSBasemaps',
                srcNodeRef: 'basemapsDijit',
                options: 'config/wmsBasemaps',
            },
            advancedDraw: {
                include: true,
                open: false,
                position: 1,
                id: 'advancedDraw',
                title: i18n.viewer.widgets.advancedDraw,
                iconClass: 'fas fa-fw fa-pencil-alt',
                type: 'titlePane',
                path: 'gis/plugins/AdvancedDraw',
                options: 'config/advancedDraw'
            },
            // myInfo: {
            //     include: false,
            //     id: 'myInfo',
            //     // type: 'floating',
            //     title: 'MyInfo',
            //     preload: false,
            //     path: 'gis/plugins/myInfo',
            //     options: {
            //         attachTo: 'sidebarLeft', // the dom node to place MyInfo
            //         position: 'last', // first, last
            //         href: 'js/config/my-info.html'
            //         // content: '<div>My Content</div>' // pass in a string as an alternative to href
            //     }
            // }
        }
    };
});
