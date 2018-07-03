/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/Legend"],function(e,i,t){return e([t],{startup:function(){this.inherited(arguments),this.map.on("update-end",i.hitch(this,function(){this.refresh()}))}})});
//# sourceMappingURL=Legend.js.map