/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dijit/_WidgetBase","esri/dijit/Bookmarks","dojo/json","dojo/cookie","dojo/_base/lang","xstyle/css!./Bookmarks/css/Bookmarks.css"],function(o,s,t,i,e,k){return o([s],{declaredClass:"gis.digit.Bookmarks",postCreate:function(){this.inherited(arguments);var o=this.bookmarks;this.bookmarkItems=e("bookmarkItems"),void 0===this.bookmarkItems?this.bookmarkItems=[]:this.bookmarkItems=i.parse(this.bookmarkItems),this.bookmarks=new t({map:this.map,id:this.id+"_esri",editable:this.editable,bookmarks:k.mixin(this.bookmarkItems,o)},this.domNode),this.connect(this.bookmarks,"onEdit","setBookmarks"),this.connect(this.bookmarks,"onRemove","setBookmarks")},setBookmarks:function(){e("bookmarkItems",i.stringify(this.bookmarks.toJson()),{expires:365})},_export:function(){return i.stringify(this.bookmarks.toJson())}})});
//# sourceMappingURL=Bookmarks.js.map