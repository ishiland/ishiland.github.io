/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred"],function(t,e,n){return t(null,{constructor:function(t){e.mixin(this,t)},loadConfig:function(){return this.inherited(arguments)},postConfig:function(){return this.inherited(arguments)},startup:function(){var t=this.getInherited(arguments);this.startupDeferred=this.executeSync([this.loadConfig,this.postConfig]),this.startupDeferred.then(e.hitch(this,function(){t.apply(this)}))},executeSync:function(t,i){if(i=i||new n,!t||!t.length)return i.resolve(),i;var r=e.hitch(this,t.splice(0,1)[0])();return r?r.then(e.hitch(this,"executeSync",t,i)):this.executeSync(t,i),i},handleError:function(t){if(this.config.isDebug&&"object"==typeof console)for(var e in t)t.hasOwnProperty(e)},mixinDeep:function(t,e){var n={};for(var i in e)if(!(i in t&&(t[i]===e[i]||i in n&&n[i]===e[i])))try{e[i].constructor===Object?t[i]=this.mixinDeep(t[i],e[i]):t[i]=e[i]}catch(n){t[i]=e[i]}return t}})});
//# sourceMappingURL=_ControllerBase.js.map