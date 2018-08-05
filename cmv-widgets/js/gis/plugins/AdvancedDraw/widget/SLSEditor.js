/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","dojo/query","./_SymEditorBase","./SymColorPicker","./StylePicker","./NumericSlider"],function(t,i,e,l,o,s,n){return t(l,{constructor:function(t){(t=t||{}).symbol||(t.symbol=this.advancedDrawConfig.defaultPolylineSymbol),i.mixin(this,t),this.initialized=!1,this.editorLabel=this.i18n.widgets.slsEditor.defaultEditorLabel,this.leftHandControlsLabel=this.i18n.widgets.slsEditor.leftHandControlsLabel,this._set("symbol",this.symbol)},postCreate:function(){this.inherited(arguments),this._initOutlineStylePicker(),this._initOutlineColorPicker(),this._initOutlineWidthSlider(),this.removeRightHandControls(),this.initialized=!0},_initOutlineStylePicker:function(){this.outlineStylePicker=new s({lineStyle:this.symbol.style,baseClass:"symbolEditorControl",label:this.i18n.widgets.symbolStylePicker.label,styleSet:"line"},this.createLeftHandControlsDiv()),this.outlineStylePicker.watch("style",i.hitch(this,function(){this._updateSymbolAtt()})),this.outlineStylePicker.startup()},_initOutlineColorPicker:function(){this.outlineColorPicker=new o({color:this.symbol.color,baseClass:"symbolEditorControl",buttonLabel:this.i18n.widgets.symbolColorPicker.buttonLabel,sliderLabel:this.i18n.widgets.symbolColorPicker.sliderLabel,colorPickerOptions:this.colorPickerOptions},this.createLeftHandControlsDiv()),this.outlineColorPicker.watch("color",i.hitch(this,function(){this._updateSymbolAtt()})),this.outlineColorPicker.startup()},_initOutlineWidthSlider:function(){this.outlineWidthSlider=new n({value:this.symbol.width,minimum:1,maximum:10,baseClass:"symbolEditorControl",label:this.i18n.widgets.symbolWidthPicker.label+" ("+this.symbol.width+")"},this.createLeftHandControlsDiv()),this.outlineWidthSlider.watch("value",i.hitch(this,function(){this.outlineWidthSlider.value=Math.round(10*this.outlineWidthSlider.value)/10,e("label",this.outlineWidthSlider.domNode)[0].innerHTML=this.i18n.widgets.symbolWidthPicker.label+" ("+this.symbol.width+")",this._updateSymbolAtt()})),this.outlineWidthSlider.startup()},_updateSymbolAtt:function(){if(this.initialized){var t=this._getSymbol();this._set("symbol",t)}},_getSymbol:function(){var t=i.clone(this.symbol);return t.style=this.outlineStylePicker.get("style"),t.color=this.outlineColorPicker.get("color"),t.width=this.outlineWidthSlider.get("value"),t},_getSymbolAttr:function(){return this._getSymbol()},_setSymbolAttr:function(t){this.initialized&&(this.outlineColorPicker.set("color",t.color),this.outlineWidthSlider.set("value",t.width),this.outlineStylePicker.set("style",t.style)),this.symbol=t}})});
//# sourceMappingURL=SLSEditor.js.map