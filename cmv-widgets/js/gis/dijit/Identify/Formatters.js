/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/number","dojo/date/locale"],function(o,r){return{formatInt:function(t){return o.format(t)},formatFloat:function(t){return o.format(t,{places:3})},formatDate:function(t){var o=new Date(t);return r.format(o,{formatLength:"short"})}}});
//# sourceMappingURL=Formatters.js.map