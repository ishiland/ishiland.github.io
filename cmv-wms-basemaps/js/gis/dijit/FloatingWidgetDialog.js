/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dijit/Dialog","dojo/_base/lang","dojo/on","dojo/dom-construct","xstyle/css!./FloatingWidgetDialog/css/FloatingWidgetDialog.css"],function(i,t,s,o,e){return i([t],{declaredClass:"gis.dijit.FloatingWidget",title:"Floating Widget",draggable:!0,class:"floatingWidget",postCreate:function(){if(this.iconClass&&(this.iconNode=e.create("span",{class:"titlePaneIcon fa fa-fw "+this.iconClass},this.titleNode,"before")),this.html&&this.domTarget){var i=e.place(this.html,this.domTarget);this.own(o(i,"click",s.hitch(this,"show")))}this.inherited(arguments)},close:function(){this.hide()},focus:function(){}})});
//# sourceMappingURL=FloatingWidgetDialog.js.map