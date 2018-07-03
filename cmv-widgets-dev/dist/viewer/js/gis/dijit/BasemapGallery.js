/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/_base/lang","dojo/topic","esri/dijit/BasemapGallery","dojo/text!./BasemapGallery/templates/BasemapGallery.html","dojo/i18n!./BasemapGallery/nls/resource","dijit/layout/ContentPane","dijit/TitlePane","xstyle/css!./BasemapGallery/css/BasemapGallery.css"],function(e,a,s,t,i,l,r,n,p){return e([a,s,t],{widgetsInTemplate:!0,templateString:n,i18n:p,baseClass:"cmvBasemapGalleryWidget",galleryOptions:{showArcGISBasemaps:!0},postCreate:function(){this.inherited(arguments);var e=i.mixin({map:this.map},this.galleryOptions||{});this.basemapGallery=new r(e,"basemapGallery"),this.basemapGallery.startup(),this.basemapGallery.on("selection-change",i.hitch(this,"basemapSelected")),this.basemapGallery.on("error",function(e){l.publish("viewer/handleError","basemap gallery error: "+e)})},basemapSelected:function(){this.basemapGalleryTitlePane.set("open",!1)}})});
//# sourceMappingURL=BasemapGallery.js.map