/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/query","dojo/dom-style","dijit/PopupMenuItem","dijit/TooltipDialog","dijit/form/HorizontalSlider","dijit/form/HorizontalRuleLabels"],function(t,e,i,o,n,a,s,r,l){return t(a,{layer:null,constructor:function(t){t=t||{},e.mixin(this,t)},postCreate:function(){this.inherited(arguments);var t=new r({value:this.layer.opacity,minimum:0,maximum:1,discreteValues:21,intermediateChanges:!0,showButtons:!1,onChange:e.hitch(this,function(e){this.layer.setOpacity(e),i.forEach(o("."+this.layer.id+"-layerLegendImage"),function(t){n.set(t,"opacity",e)})})});new l({labels:["100%","50%","0%"],style:"height:1em;font-size:75%;"},t.bottomDecoration).startup(),t.startup(),this.popup=new s({style:"width:200px;",content:t}),n.set(this.popup.connectorNode,"display","none"),this.popup.startup()}})});
//# sourceMappingURL=Transparency.js.map