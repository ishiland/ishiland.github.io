/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred"],function(i,n,t){return i(null,{defaultConfig:"viewer",loadConfig:function(i){var o;return i?(o=new t,i.then(n.hitch(this,function(){this.initConfigAsync().then(n.hitch(this,function(){this.initConfigSuccess(arguments),o.resolve()}),n.hitch(this,"initConfigError"))}))):(o=this.initConfigAsync()).then(n.hitch(this,"initConfigSuccess"),n.hitch(this,"initConfigError")),this.inherited(arguments,[o])||o},initConfigAsync:function(){var i=new t,n="config/"+this.defaultConfig,o=window.location.search.match(/config=([^&]*)/i);return o&&o.length>0&&(n=o[1]).indexOf("/")<0&&(n="config/"+n),require([n],function(n){i.resolve(n)}),i},initConfigSuccess:function(i){this.config=i,i.isDebug&&(window.app=this),this.mapClickMode={current:i.defaultMapClickMode,defaultMode:i.defaultMapClickMode}},initConfigError:function(i){this.handleError({source:"Controller",error:i})}})});
//# sourceMappingURL=_ConfigMixin.js.map