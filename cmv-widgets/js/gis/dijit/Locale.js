/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/_base/lang","dojo/on","dojo/dom-style","dojo/_base/array","dojo/_base/kernel","dojo/io-query","dijit/form/DropDownButton","dijit/DropDownMenu","dijit/MenuItem","./Locale/countries","dojo/text!./Locale/templates/Locale.html","dojo/i18n!./Locale/nls/resource","xstyle/css!flag-icon-css/css/flag-icon.min.css","xstyle/css!./Locale/css/Locale.css"],function(e,s,o,c,a,n,t,r,i,d,u,h,g,l,p){return e([s,o],{templateString:l,i18n:p,baseClass:"cmvLocaleDijit",currentLocale:null,includeFlag:!0,includeCountry:!0,includeLanguage:!0,languages:{en:"English",es:"Español",fr:"Français",pt:"Português"},locales:["es-ar","es-bo","pt-br","en-ca","fr-ca","es-cl","es-co","es-cr","es-do","es-ec","es-sv","fr-FR","es-gt","fr-ht","es-hn","en-in","es-mx","es-pa","es-pe","es-pr","pt-pt","es-py","es-es","en-gb","en-us","es-us","es-uy","es-ve"],postCreate:function(){this.inherited(arguments),this.currentLocale=r.locale,this.parentWidget&&this.parentWidget.toggleable&&n.set(this.localeLabelContainer,"display","block");var l=new u({baseClass:"localeMenu"});t.forEach(this.locales,c.hitch(this,function(e){var s=e.split("-"),o=this.languages[s[0]];if(o){var a="",i=null,n=null;s[1]&&(this.includeFlag&&(n="flag-icon flag-icon-"+s[1].toLowerCase()),(i=g[s[1].toUpperCase()])&&this.includeCountry&&(a=i)),this.includeLanguage&&(0<a.length&&(a+=" - "),a+=o);var t=new h({id:e,label:a,iconClass:n,onClick:c.hitch(this,"switchLocale",e)});l.addChild(t)}})),l.startup();var e=this.currentLocale.split("-"),s=this.languages[e[0]],o="",a=null;e[1]&&(this.includeFlag&&(o='<div class="flag-icon flag-icon-'+e[1].toLowerCase()+'"></div>'),(a=g[e[1].toUpperCase()])&&this.includeCountry&&(o+=a),this.includeLanguage&&(a&&this.includeCountry&&(o+=" - "),o+=s));var i=new d({label:o,dropDown:l});this.localeDropDownContainer.appendChild(i.domNode)},switchLocale:function(e){if(e!==this.currentLocale){var s=window.location.href,o={};if(-1<s.indexOf("?")){var a=s.substring(s.indexOf("?")+1,s.length);o=i.queryToObject(a)}o.locale=e,window.location=window.location.pathname+"?"+i.objectToQuery(o)}}})});
//# sourceMappingURL=Locale.js.map