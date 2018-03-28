/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_Contained","./_Control","./../plugins/legendUtil"],function(e,i,n,t,d,o){return e([i,n,t,d],{_layerType:"vector",_esriLayerType:"kml",_layerTypeInit:function(){this._expandClick(),o.isLegend(this.controlOptions.noLegend,this.controller.noLegend)&&o.layerLegend(this.layer,this.expandNode)}})});
//# sourceMappingURL=KML.js.map