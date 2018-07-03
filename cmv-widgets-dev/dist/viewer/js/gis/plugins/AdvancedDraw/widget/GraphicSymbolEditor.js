/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","dijit/form/Button","dijit/layout/ContentPane","dijit/Dialog","esri/symbols/jsonUtils","./SMSEditor","./SLSEditor","./SFSEditor","../undo/editSymbolGraphicOp","dojo/i18n!../nls/resource","xstyle/css!./css/GraphicSymbolEditor.css"],function(t,o,i,e,n,r,s,a,h,c,d){return t(n,{title:d.widgets.graphicSymbolEditor.title,id:"graphicSymbolEditor",i18n:d,undoOp:null,colorPickerOptions:{type:"simple",simple:{paletteSize:"7x10"},closeOnChange:!0},constructor:function(t){t=t||{},o.mixin(this,t),this.editors={point:{control:s,editorLabel:d.widgets.smsEditor.graphicEditorLabel},polyline:{control:a,editorLabel:d.widgets.slsEditor.graphicEditorLabel},polygon:{control:h,editorLabel:d.widgets.sfsEditor.graphicEditorLabel}}},_getGraphicAttr:function(){var t=this.editor.get("symbol");return this._updateGraphicWithSymbol(t),this.graphic},_setGraphicAttr:function(t){this.graphic=t,this._initialGraphicSymbol=o.clone(t.symbol.toJson()),this.undoOp=new c({graphic:t,startSym:this._initialGraphicSymbol}),this._loadEditor()},_loadEditor:function(){if(this.graphic){this.editor&&this.editor.destroy();var t=this.editors[this.graphic.attributes.draw_type];t&&this._createEditor(t)}},_createEditor:function(t){var i=t.control;this.editor=new i({editorLabel:t.editorLabel,colorPickerOptions:this.colorPickerOptions}),this.editor.set("symbol",this.graphic.symbol.toJson()),this.editor.watch("symbol",o.hitch(this,function(){var t=arguments[2];this._updateGraphicWithSymbol(t)})),this._createContainers(),this.editorPane.addChild(this.editor),this.resize()},_updateGraphicWithSymbol:function(t){this.graphic&&(this.graphic.setSymbol(r.fromJson(t)),this._updateUndoOpEndSym(t))},_updateUndoOpEndSym:function(t){this.undoOp&&(this.undoOp.endSym=t)},_createContainers:function(){this._createEditorPane(),this._createActionBar()},_createEditorPane:function(){this.editorPane||(this.editorPane=new e,this.editorPane.id="graphicSymbolEditorEditorsPane",this.addChild(this.editorPane))},_createActionBar:function(){this.actionBar||(this.actionBar=new e({id:"graphicSymbolEditorActionBar"}),this.addChild(this.actionBar)),this._createApplyButton(),this._createCancelButton()},_createApplyButton:function(){this.applyButton=new i({label:"Apply",onClick:o.hitch(this,function(){this.hide()})}),this.actionBar.addChild(this.applyButton)},_createCancelButton:function(){this.cancelButton=new i({label:"Cancel",onClick:o.hitch(this,function(){this._cancelUpdates()})}),this.actionBar.addChild(this.cancelButton)},_cancelUpdates:function(){this._rollBackSymbolUpdates(),this.hide()},_rollBackSymbolUpdates:function(){this.graphic&&(this.editor.set("symbol",this._initialGraphicSymbol),this.undoOp=null)},destroy:function(){this.editorPane.destroy(),this.actionBar.destroy(),this.inherited(arguments)}})});
//# sourceMappingURL=GraphicSymbolEditor.js.map