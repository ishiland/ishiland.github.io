/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/i18n!../nls/resource","./../advancedDrawConfig","dojo/text!./templates/_SymbolEditorBase.html","xstyle/css!./css/_SymbolEditorBase.css","xstyle/css!./css/SymbolEditor.css"],function(t,e,o,s,n,i,r){return t([o,s],{templateString:r,i18n:n,baseClass:"symbolEditorBase",advancedDrawConfig:i,colorPickerOptions:{type:"simple",simple:{paletteSize:"7x10"},closeOnChange:!1},constructor:function(){this.leftHandControlsLabel="Fill",this.rightHandControlsLabel="Outline",this.editorLabel="Symbol Editor"},removeLeftHandControls:function(){e.destroy(this.leftHandControlsLI)},removeRightHandControls:function(){e.destroy(this.rightHandControlsLI)},createLeftHandControlsDiv:function(){return e.create("div",{},this.leftHandControls,"last")},createRightHandControlsDiv:function(){return e.create("div",{},this.rightHandControls,"last")}})});
//# sourceMappingURL=_SymEditorBase.js.map