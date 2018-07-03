/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","esri/OperationBase","esri/symbols/jsonUtils","dojo/i18n!./../nls/resource"],function(o,n,e,s,i){return o(e,{label:i.undoManager.editSymbol,constructor:function(o){n.mixin(this,o)},performUndo:function(){this.graphic.setSymbol(s.fromJson(this.startSym))},performRedo:function(){this.graphic.setSymbol(s.fromJson(this.endSym))}})});
//# sourceMappingURL=editSymbolGraphicOp.js.map