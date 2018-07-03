/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dijit/_WidgetBase","esri/dijit/Bookmarks","dojo/json","dojo/cookie","dojo/_base/lang","dojo/dom-construct","xstyle/css!./Bookmarks/css/Bookmarks.css"],function(o,s,t,e,i,k,r){return o([s],{declaredClass:"gis.digit.Bookmarks",postCreate:function(){this.inherited(arguments);var o=this.bookmarks;this.bookmarkItems=i("bookmarkItems"),void 0===this.bookmarkItems?this.bookmarkItems=[]:this.bookmarkItems=e.parse(this.bookmarkItems),this.bookmarks=new t({map:this.map,editable:this.editable,bookmarks:k.mixin(this.bookmarkItems,o)},r.create("div")).placeAt(this.domNode),this.connect(this.bookmarks,"onEdit","setBookmarks"),this.connect(this.bookmarks,"onRemove","setBookmarks")},setBookmarks:function(){i("bookmarkItems",e.stringify(this.bookmarks.toJson()),{expires:365})},_export:function(){return e.stringify(this.bookmarks.toJson())}})});
//# sourceMappingURL=Bookmarks.js.map