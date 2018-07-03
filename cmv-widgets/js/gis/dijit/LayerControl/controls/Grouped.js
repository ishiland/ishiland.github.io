/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/on","dojo/topic","dojo/html","dojo/dom-class","dojo/dom-style","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_Contained","./_Control"],function(e,o,a,s,n,l,r,h,i,t,c,y,d){return e([t,c,y,d],{layerDetails:null,_layerType:"grouped",_esriLayerType:null,constructor:function(){this.inherited(arguments),this.icons.expand=this.icons.groupFolder||this.icons.folder,this.icons.collapse=this.icons.groupFolderOpen||this.icons.folderOpen},_layerTypePreInit:function(){a.forEach(this.layerDetails,o.hitch(this,function(e){i.place(e.layerControl.domNode,this.expandNode,"first")}))},_layerTypeInit:function(){this._expandClick()},hasAnyVisibleLayer:function(){return a.some(this.layerDetails,function(e){return e.layerInfo.layer.visible})},hasAnyInvisibleLayer:function(){return a.some(this.layerDetails,function(e){return!e.layerInfo.layer.visible})},_initialize:function(){this._layerTypePreInit&&this._layerTypePreInit();var t=this.layer,e=this.controlOptions,i=this.layerDetails;this._setLayerCheckbox(t,this.checkNode),s(this.checkNode,"click",o.hitch(this,"_setLayerVisibility",i,this.checkNode)),l.set(this.labelNode,this.layerTitle),r.remove(this.menuNode,"fa, layerControlMenuIcon, "+this.icons.menu),h.set(this.menuClickNode,"cursor","default"),0===t.minScale&&0===t.maxScale||(this._checkboxScaleRange(),this._scaleRangeHandler=t.getMap().on("zoom-end",o.hitch(this,"_checkboxScaleRange"))),this._layerTypeInit(),e.expanded&&this.expandClickNode.click(),n.subscribe("layerControl/layerToggle",o.hitch(this,function(e){if(e.params&&!e.forced&&e.id!==t.id&&e.params.groupID===this.layerTitle){var i=this.layer.visible;i&&!this.hasAnyVisibleLayer()?this.toggleVisibility():i||this.hasAnyInvisibleLayer()||this.toggleVisibility()}this._setLayerCheckbox()}))},toggleVisibility:function(){var e=this.layer;e.visible=!e.visible,this.hasAnyVisibleLayer()&&this.hasAnyInvisibleLayer()&&(e.visible=!0),this._setLayerCheckbox(e,this.checkNode),n.publish("layerControl/layerToggle",{id:e.id,visible:e.visible,forced:!0})},_setLayerVisibility:function(e,i,t){this.toggleVisibility();var s=arguments;a.forEach(e,o.hitch(this,function(e){this.layer.visible!==e.layerInfo.layer.visible&&this.inherited(s,[e.layerInfo.layer,e.layerControl.checkNode,t])})),this._setLayerCheckbox()},_setLayerCheckbox:function(){var e=this.checkNode,i=this.icons;r.remove(e,i.checked),r.remove(e,i.unchecked),r.remove(e,i.indeterminate);var t=this.hasAnyVisibleLayer(),s=this.hasAnyInvisibleLayer();t&&s?r.add(e,i.indeterminate):t?r.add(e,i.checked):r.add(e,i.unchecked)}})});
//# sourceMappingURL=Grouped.js.map