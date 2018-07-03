/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo","dojo/text!./MyInfo/templates/MyInfo.html","dijit/layout/ContentPane","xstyle/css!./MyInfo/css/MyInfo.css"],function(t,e,i,s,n,o){return t([e,i,s],{name:"MyInfo",href:null,widgetsInTemplate:!0,templateString:o,content:"",baseClass:"cmvMyInfoWidget",attachTo:"sidebarLeft",postCreate:function(){this.inherited(arguments),this.params.href?(this.myInfoNode.set("href",this.params.href),n.place(this.myInfoNode.domNode,this.attachTo,this.position)):this.params.content&&n.place(this.params.content,this.attachTo,this.position)}})});
//# sourceMappingURL=MyInfo.js.map