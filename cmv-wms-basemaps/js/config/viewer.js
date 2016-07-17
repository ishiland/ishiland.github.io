define([
   // 'esri/units',
   'esri/config',
   'esri/tasks/GeometryService',
   'esri/layers/ImageParameters'
], function (esriConfig, GeometryService, ImageParameters) {

    // url to your proxy page, must be on same machine hosting you app. See proxy folder for readme.
    esriConfig.defaults.io.proxyUrl = 'proxy/proxy.ashx';
    esriConfig.defaults.io.alwaysUseProxy = false;
    // url to your geometry server.
    esriConfig.defaults.geometryService = new GeometryService('http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer');

    //image parameters for dynamic services, set to png32 for higher quality exports.
    var imageParameters = new ImageParameters();
    imageParameters.format = 'png32';

    return {
        // used for debugging your app
        isDebug: true,

        //default mapClick mode, mapClickMode lets widgets know what mode the map is in to avoid multipult map click actions from taking place (ie identify while drawing).
        defaultMapClickMode: 'identify',
        // map options, passed to map constructor. see: https://developers.arcgis.com/javascript/jsapi/map-amd.html#map1
        mapOptions: {
            basemap: 'hybrid',
            center: [-74.4, 40.2],
            zoom: 8,
            sliderStyle: 'small'
        },

        titles: {
            header: 'CMV WMS Basemaps',
            subHeader: 'CMV WMS Basemaps Widget Example',
            pageTitle: 'CMV WMS Basemaps Example'
        },
        panes: {
        	left: {
        		// splitter: false,
                // collapsible: false,
                open: false
        	}
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
        },
        // collapseButtonsPane: 'center', //center or outer

        // operationalLayers: Array of Layers to load on top of the basemap: valid 'type' options: 'dynamic', 'tiled', 'feature'.
        // The 'options' object is passed as the layers options for constructor. Title will be used in the legend only. id's must be unique and have no spaces.
        // 3 'mode' options: MODE_SNAPSHOT = 0, MODE_ONDEMAND = 1, MODE_SELECTION = 2

        // set include:true to load. For titlePane type set position the the desired order in the sidebar

        widgets: {

            wmsBasemaps: {
                include: true,
                id: 'wmsBasemaps',
                type: 'domNode',
                path: 'gis/dijit/WMSBasemaps',
                srcNodeRef: 'basemapsDijit',
                options: 'config/wmsBasemaps'
            }

        }
    };
});
