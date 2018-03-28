/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","esri/kernel","dojo/cookie","dojo/json","dojo/_base/unload","dojo/_base/lang"],function(t,e,a,o,i,n){return t(null,{constructor:function(t){this.idStateName=t||"esri_jsapi_id_manager_data",i.addOnUnload(n.hitch(this,"storeCredentials")),this.loadCredentials()},loadCredentials:function(){var t,i;(t=this._supportsLocalStorage()?window.localStorage.getItem(this.idStateName):a(this.idStateName))&&"null"!==t&&t.length>4&&(i=o.parse(t),e.id.initialize(i))},storeCredentials:function(){if(0!==e.id.credentials.length){var t=o.stringify(e.id.toJson());this._supportsLocalStorage()?window.localStorage.setItem(this.idStateName,t):a(this.idStateName,t,{expires:1})}},_supportsLocalStorage:function(){try{return"localStorage"in window&&null!==window.localStorage}catch(t){return!1}}})});
//# sourceMappingURL=Vim.js.map