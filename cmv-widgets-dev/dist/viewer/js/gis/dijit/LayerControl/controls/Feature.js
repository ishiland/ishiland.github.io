/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_Contained","./_Control","./../plugins/legendUtil"],function(e,i,n,t,d,o){return e([i,n,t,d],{_layerType:"vector",_esriLayerType:"feature",_layerTypeInit:function(){o.isLegend(this.controlOptions.noLegend,this.controller.noLegend)?(this._expandClick(),o.vectorLegend(this.layer,this.expandNode)):this._expandRemove()}})});
//# sourceMappingURL=Feature.js.map