/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/on","dojo/keys","dijit/TooltipDialog","dijit/_WidgetsInTemplateMixin","dojo/text!./templates/TextTooltipDialog.html","dijit/popup","esri/symbols/jsonUtils","dijit/form/TextBox","dijit/form/Button"],function(t,e,i,s,o,a,h,n,r,l){return t([a,h],{templateString:n,baseClass:"AdvancedDrawTextTooltipDialog",_graphic:null,_isNewText:!0,_originalText:"New Text",i18n:null,postCreate:function(){this.inherited(arguments),s(this,"show",e.hitch(this,"_show")),s(this.textNode,"change",e.hitch(this,"_textChange")),this.on("keypress",e.hitch(this,"_keyPress"))},_show:function(){this.textNode.focus(),this._originalText=this._graphic.symbol.toJson().text;var t=this._graphic.getLayer().getMap();t.disableMapNavigation(),t._slider&&i.set(t._slider,"display","none")},_textChange:function(t){var e=this._graphic.symbol.toJson();e.text=""!==t?t:"New Text",this._graphic.setSymbol(l.fromJson(e))},_keyPress:function(t){t.keyCode===o.ENTER&&this._add(),t.keyCode===o.ESCAPE&&this._cancel()},_add:function(){r.close(),this._resetMapNav();var t=this._graphic.symbol.toJson();this._graphic.setSymbol(l.fromJson(t)),this._isNewText=!1},_cancel:function(){r.close(),this._resetMapNav(),this._isNewText&&(this._graphic.getLayer().remove(this._graphic),this.destroy())},_resetMapNav:function(){var t=this._graphic.getLayer().getMap();t.enableMapNavigation(),t._slider&&i.set(t._slider,"display","block")}})});
//# sourceMappingURL=TextTooltipDialog.js.map