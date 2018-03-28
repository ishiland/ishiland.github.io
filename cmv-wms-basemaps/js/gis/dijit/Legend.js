/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dijit/_WidgetBase","dojo/_base/lang","esri/dijit/Legend"],function(e,t,i,n){return e([t],{startup:function(){this.inherited(arguments),this.legend=new n({arrangement:this.arrangement||n.ALIGN_LEFT,autoUpdate:this.autoUpdate||!0,id:this.id+"_legend",layerInfos:this.layerInfos,map:this.map,respectCurrentMapScale:this.respectCurrentMapScale||!0},this.domNode),this.legend.startup(),this.map.on("update-end",i.hitch(this,function(){this.legend.refresh()}))}})});
//# sourceMappingURL=Legend.js.map