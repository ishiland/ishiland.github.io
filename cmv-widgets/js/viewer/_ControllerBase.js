/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred"],function(t,i,r){return t(null,{constructor:function(t){i.mixin(this,t)},loadConfig:function(){return this.inherited(arguments)},postConfig:function(){return this.inherited(arguments)},startup:function(){var t=this.getInherited(arguments);this.startupDeferred=this.executeSync([this.loadConfig,this.postConfig]),this.startupDeferred.then(i.hitch(this,function(){t.apply(this)}))},executeSync:function(t,e){if(e=e||new r,!t||!t.length)return e.resolve(),e;var n=i.hitch(this,t.splice(0,1)[0])();return n?n.then(i.hitch(this,"executeSync",t,e)):this.executeSync(t,e),e},handleError:function(t){if(this.config.isDebug&&"object"==typeof console)for(var e in t)t.hasOwnProperty(e)},mixinDeep:function(e,n){var t={};for(var i in n)if(!(i in e&&(e[i]===n[i]||i in t&&t[i]===n[i])))try{n[i].constructor===Object?e[i]=this.mixinDeep(e[i],n[i]):e[i]=n[i]}catch(t){e[i]=n[i]}return e}})});
//# sourceMappingURL=_ControllerBase.js.map