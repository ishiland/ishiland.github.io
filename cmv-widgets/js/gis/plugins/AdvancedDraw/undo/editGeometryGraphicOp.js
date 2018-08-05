/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","esri/OperationBase","dojo/i18n!./../nls/resource"],function(e,o,t,n){return e(t,{label:n.undoManager.editGeometry,constructor:function(e){o.mixin(this,e)},performUndo:function(){this.graphic.setGeometry(this.startGeom)},performRedo:function(){this.graphic.setGeometry(this.endGeom)}})});
//# sourceMappingURL=editGeometryGraphicOp.js.map