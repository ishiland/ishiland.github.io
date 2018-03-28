/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","gis/dijit/_FloatingWidgetMixin","dojo/_base/lang","dojo/aspect","dojo/text!./Help/templates/HelpDialog.html","dojo/i18n!./Help/nls/resource","dijit/form/Button","dijit/layout/TabContainer","dijit/layout/ContentPane","xstyle/css!./Help/css/Help.css"],function(t,e,i,n,o,s,a,d,l){return t([e,i,n,o],{widgetsInTemplate:!0,templateString:d,i18n:l,baseClass:"helpDijit",postCreate:function(){this.inherited(arguments),this.parentWidget.toggleable&&this.own(a.after(this.parentWidget,"toggle",s.hitch(this,function(){this.containerNode.resize()})))},onOpen:function(){this.openOnStartup||this.containerNode.resize()},close:function(){this.parentWidget.hide&&this.parentWidget.hide()}})});
//# sourceMappingURL=Help.js.map