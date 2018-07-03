/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","esri/kernel","dojo/cookie","dojo/json","dojo/_base/unload","dojo/_base/lang"],function(t,a,o,i,e,n){return t(null,{constructor:function(t){this.idStateName=t||"esri_jsapi_id_manager_data",e.addOnUnload(n.hitch(this,"storeCredentials")),this.loadCredentials()},loadCredentials:function(){var t,e;(t=this._supportsLocalStorage()?window.localStorage.getItem(this.idStateName):o(this.idStateName))&&"null"!==t&&4<t.length&&(e=i.parse(t),a.id.initialize(e))},storeCredentials:function(){if(0!==a.id.credentials.length){var t=i.stringify(a.id.toJson());this._supportsLocalStorage()?window.localStorage.setItem(this.idStateName,t):o(this.idStateName,t,{expires:1})}},_supportsLocalStorage:function(){try{return"localStorage"in window&&null!==window.localStorage}catch(t){return!1}}})});
//# sourceMappingURL=Vim.js.map