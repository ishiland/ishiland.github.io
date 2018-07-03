/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/on","dojo/_base/lang"],function(t,i,e){return t(null,{startup:function(){this.parentWidget&&"gis.dijit.FloatingWidget"===this.parentWidget.declaredClass&&this.onOpen&&i(this.parentWidget,"show",e.hitch(this,"onOpen")),this.parentWidget&&"gis.dijit.FloatingWidget"===this.parentWidget.declaredClass&&this.onClose&&i(this.parentWidget,"hide",e.hitch(this,"onClose")),this.parentWidget&&"gis.dijit.FloatingWidget"===this.parentWidget.declaredClass&&this.openOnStartup&&this.parentWidget.show(),this.inherited(arguments)}})});
//# sourceMappingURL=_FloatingWidgetMixin.js.map