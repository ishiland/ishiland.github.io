/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/number","dojo/date/locale"],function(t,o){return{formatInt:function(o){return t.format(o)},formatFloat:function(o){return t.format(o,{places:3})},formatDate:function(t){var r=new Date(t);return o.format(r,{formatLength:"short"})}}});
//# sourceMappingURL=Formatters.js.map