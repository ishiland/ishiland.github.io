/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom","esri/arcgis/utils","esri/units"],function(e,r,a,n,s,o){return e(null,{startup:function(){this.inherited(arguments)},createMap:function(){var e=this.config.webMapOptions||{};!e.mapOptions&&this.config.mapOptions&&(e.mapOptions=this.config.mapOptions);var i=n.byId(this.config.layout.map)||"mapCenter",t=s.createMap(this.config.webMapId,i,e);return t.then(r.hitch(this,function(e){this.webMap={clickEventHandle:e.clickEventHandle,clickEventListener:e.clickEventListener,itemInfo:e.itemInfo},this.map=e.map,this._initWebMapLayerInfos(e),this._initWebMapWidgets(e)})),t},_initWebMapLayerInfos:function(e){if(this.config.layerControlLayerInfos)this.layerControlLayerInfos=this.config.layerControlLayerInfos;else if(e.itemInfo&&e.itemInfo.itemData){var t={CSV:"csv",ArcGISMapServiceLayer:"dynamic",ArcGISFeatureLayer:"feature",GeoRSSLayer:"georss",ArcGISImageServiceLayer:"image","esri/layers/ArcGISImageServiceVectorLayer":"imagevector",KML:"kml",ArcGISStreamLayer:"stream",ArcGISTiledMapServiceLayer:"tiled",VectorTileLayer:"vectortile",WebTiledLayer:"webtiled",WMS:"wms"},i=e.itemInfo.itemData.operationalLayers;a.forEach(i,r.hitch(this,function(e){var i=t[e.layerType];i&&this.layerControlLayerInfos.push({layer:e.layerObject,type:i,title:e.title})}))}this.config.legendLayerInfos?this.legendLayerInfos=this.config.legendLayerInfos:this.legendLayerInfos=s.getLegendLayers(e)},_initWebMapWidgets:function(e){if(e.itemInfo&&e.itemInfo.itemData){var i=this.config.widgets,t=e.itemInfo.itemData.bookmarks;if(t&&0<t.length&&(i.bookmarks=this.mixinDeep({include:!0,id:"bookmarks",type:"titlePane",path:"gis/dijit/Bookmarks",title:"Bookmarks",open:!1,position:999,options:{map:!0,editable:!1,bookmarks:t}},i.bookmarks||{})),e.itemInfo.itemData.applicationProperties){var a=e.itemInfo.itemData.applicationProperties.viewing;a.basemapGallery&&a.basemapGallery.enabled&&(i.basemaps&&i.basemaps.include||(i.basemapGallery=this.mixinDeep({include:!0,id:"basemapGallery",type:"domNode",path:"gis/dijit/BasemapGallery",srcNodeRef:"basemapsDijit",options:{map:!0}},i.basemapGallery||{}))),a.routing&&a.routing.enabled&&(i.directions=this.mixinDeep({include:!0,id:"directions",type:"titlePane",path:"gis/dijit/Directions",title:"Directions",open:!1,position:999,options:{map:!0,mapRightClickMenu:!0,options:{routeTaskUrl:"https://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Network/USA/NAServer/Route",routeParams:{directionsLanguage:"en-US",directionsLengthUnits:o.MILES},active:!1}}},i.directions||{})),a.measure&&a.measure.enabled&&(i.measure=this.mixinDeep({include:!0,id:"measurement",type:"titlePane",path:"gis/dijit/Measurement",title:"Measurement",open:!1,position:999,options:{map:!0,mapClickMode:!0,defaultAreaUnit:o.SQUARE_MILES,defaultLengthUnit:o.MILES}},i.measure||{})),a.search&&a.search.enabled&&(i.search=this.mixinDeep({include:!0,type:"domNode",path:"esri/dijit/Search",srcNodeRef:"geocoderButton",options:{map:!0,visible:!0,enableButtonMode:!0,expanded:!0,disablePlaceFinder:a.search.disablePlaceFinder,hintText:a.search.hintText,layers:a.search.layers}},i.search||{}))}if(e.itemInfo.itemData.widgets){var n=e.itemInfo.itemData.widgets.timeSlider;n&&(i.timeSlider=this.mixinDeep({include:!0,type:"domNode",path:"esri/dijit/TimeSlider",srcNodeRef:"geocoderButton",options:r.mixin({map:!0},n)},i.slider||{}))}}}})});
//# sourceMappingURL=_WebMapMixin.js.map