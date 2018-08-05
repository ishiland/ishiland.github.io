/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/dom-construct","dojo/text!./MyInfo/templates/MyInfo.html","dijit/layout/ContentPane","xstyle/css!./MyInfo/css/MyInfo.css"],function(t,i,e,s,n,o){return t([i,e,s],{href:null,widgetsInTemplate:!0,templateString:o,content:"",baseClass:"cmvMyInfoWidget",postCreate:function(){this.inherited(arguments),this.initialize()},initialize:function(){this.params.href?(this.myInfoNode.set("href",this.params.href),n.place(this.myInfoNode.domNode,this.params.attachTo,this.position)):this.params.content&&n.place(this.params.content,this.params.attachTo,this.position)}})});
//# sourceMappingURL=MyInfo.js.map