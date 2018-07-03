/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","dojo/number","dijit/form/HorizontalSlider","dojo/text!./templates/NumericSlider.html","dojo/i18n!../nls/resource","xstyle/css!./css/NumericSlider.css"],function(i,t,e,s,n,o){return i(s,{templateString:n,constructor:function(i){this.value=0,this.minimum=0,this.maximum=1,this.discreteValues=2*(i.maximum-i.minimum)+1,this.showButtons=!1,this.intermediateChanges=!0,this.i18n=o,this.label="Line width:",i=i||{},t.mixin(this,i)},_getValueAttr:function(){return e.round(this.value,1)}})});
//# sourceMappingURL=NumericSlider.js.map