/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/form/Select","dojo/text!./templates/StylePicker.html","dojo/i18n!../nls/resource","xstyle/css!./css/StylePicker.css"],function(e,i,s,l,t,S,r,a){return e([s,l,t],{widgetsInTemplate:!0,templateString:r,style:"",i18n:a,label:"Select style:",styleSet:"marker",constructor:function(e){e=e||{options:[]},i.mixin(this,e),this._initializeStyles()},_initializeStyles:function(){this.styles={marker:[{value:"esriSMSCircle",label:this.i18n.esriStyles.marker.esriSMSCircle},{value:"esriSMSCross",label:this.i18n.esriStyles.marker.esriSMSCross},{value:"esriSMSDiamond",label:this.i18n.esriStyles.marker.esriSMSDiamond},{value:"esriSMSSquare",label:this.i18n.esriStyles.marker.esriSMSSquare},{value:"esriSMSX",label:this.i18n.esriStyles.marker.esriSMSX}],line:[{value:"esriSLSSolid",label:this.i18n.esriStyles.line.esriSLSSolid},{value:"esriSLSDash",label:this.i18n.esriStyles.line.esriSLSDash},{value:"esriSLSDashDot",label:this.i18n.esriStyles.line.esriSLSDashDot},{value:"esriSLSDashDotDot",label:this.i18n.esriStyles.line.esriSLSDashDotDot},{value:"esriSLSDot",label:this.i18n.esriStyles.line.esriSLSDot}],fill:[{value:"esriSFSSolid",label:this.i18n.esriStyles.fill.esriSFSSolid},{value:"esriSFSBackwardDiagonal",label:this.i18n.esriStyles.fill.esriSFSBackwardDiagonal},{value:"esriSFSCross",label:this.i18n.esriStyles.fill.esriSFSCross},{value:"esriSFSDiagonalCross",label:this.i18n.esriStyles.fill.esriSFSDiagonalCross},{value:"esriSFSForwardDiagonal",label:this.i18n.esriStyles.fill.esriSFSForwardDiagonal},{value:"esriSFSHorizontal",label:this.i18n.esriStyles.fill.esriSFSHorizontal},{value:"esriSFSVertical",label:this.i18n.esriStyles.fill.esriSFSVertical},{value:"esriSFSNull",label:this.i18n.esriStyles.fill.esriSFSNull}]}},postCreate:function(){this.inherited(arguments),this.selectDijit=new S({options:this.styles[this.styleSet]},this.selectNode),this.selectDijit.watch("value",i.hitch(this,function(){this._set("style",arguments[2])})),this.selectDijit.startup(),this._set("style",this.styles[this.styleSet][0].value)}})});
//# sourceMappingURL=StylePicker.js.map