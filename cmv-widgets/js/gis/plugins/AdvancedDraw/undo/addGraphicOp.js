/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","esri/OperationBase","dojo/i18n!./../nls/resource"],function(e,o,r,n){return e(r,{label:n.undoManager.addGraphic,constructor:function(e){o.mixin(this,e)},performUndo:function(){this.layer.remove(this.graphic)},performRedo:function(){this.layer.add(this.graphic)}})});
//# sourceMappingURL=addGraphicOp.js.map