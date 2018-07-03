/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/Color"],function(o,r){return o(null,{_esriColorArrayToDojoColor:function(o){return o[3]=o[3]/255,r.fromArray(o)},_dojoColorToEsriColorArray:function(o){var r=o.toRgba();return r[3]=Math.round(255*r[3]),r}})});
//# sourceMappingURL=_ColorMixin.js.map