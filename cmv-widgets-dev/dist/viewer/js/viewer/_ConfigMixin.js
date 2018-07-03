/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred"],function(i,t,o){return i(null,{defaultConfig:"viewer",loadConfig:function(i){var n;return i?(n=new o,i.then(t.hitch(this,function(){this.initConfigAsync().then(t.hitch(this,function(){this.initConfigSuccess(arguments),n.resolve()}),t.hitch(this,"initConfigError"))}))):(n=this.initConfigAsync()).then(t.hitch(this,"initConfigSuccess"),t.hitch(this,"initConfigError")),this.inherited(arguments,[n])||n},initConfigAsync:function(){var n=new o,i="config/"+this.defaultConfig,t=window.location.search.match(/config=([^&]*)/i);return t&&0<t.length&&(i=t[1]).indexOf("/")<0&&(i="config/"+i),require([i],function(i){n.resolve(i)}),n},initConfigSuccess:function(i){(this.config=i).isDebug&&(window.app=this),this.mapClickMode={current:i.defaultMapClickMode,defaultMode:i.defaultMapClickMode}},initConfigError:function(i){this.handleError({source:"Controller",error:i})}})});
//# sourceMappingURL=_ConfigMixin.js.map