/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/on","dojo/topic","dojo/html","dojo/dom-class","dojo/dom-style","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_Contained","./_Control"],function(e,i,t,s,a,l,o,r,n,h,c,y,d){return e([h,c,y,d],{layerDetails:null,_layerType:"grouped",_esriLayerType:null,_layerTypePreInit:function(){t.forEach(this.layerDetails,i.hitch(this,function(e){n.place(e.layerControl.domNode,this.expandNode,"first")}))},_layerTypeInit:function(){this._expandClick()},hasAnyVisibleLayer:function(){return t.some(this.layerDetails,function(e){return e.layerInfo.layer.visible})},hasAnyInvisibleLayer:function(){return t.some(this.layerDetails,function(e){return!e.layerInfo.layer.visible})},_initialize:function(){this._layerTypePreInit&&this._layerTypePreInit();var e=this.layer,t=this.controlOptions,n=this.layerDetails;this._setLayerCheckbox(e,this.checkNode),s(this.checkNode,"click",i.hitch(this,"_setLayerVisibility",n,this.checkNode)),l.set(this.labelNode,this.layerTitle),o.remove(this.menuNode,"fa, layerControlMenuIcon, "+this.icons.menu),r.set(this.menuClickNode,"cursor","default"),0===e.minScale&&0===e.maxScale||(this._checkboxScaleRange(),this._scaleRangeHandler=e.getMap().on("zoom-end",i.hitch(this,"_checkboxScaleRange"))),this._layerTypeInit(),t.expanded&&this.expandClickNode.click(),a.subscribe("layerControl/layerToggle",i.hitch(this,function(i){if(i.params&&!i.forced&&i.id!==e.id&&i.params.groupID===this.layerTitle){var t=this.layer.visible;t&&!this.hasAnyVisibleLayer()?this.toggleVisibility():t||this.hasAnyInvisibleLayer()||this.toggleVisibility()}this._setLayerCheckbox()}))},toggleVisibility:function(){var e=this.layer;e.visible=!e.visible,this.hasAnyVisibleLayer()&&this.hasAnyInvisibleLayer()&&(e.visible=!0),this._setLayerCheckbox(e,this.checkNode),a.publish("layerControl/layerToggle",{id:e.id,visible:e.visible,forced:!0})},_setLayerVisibility:function(e,s,a){this.toggleVisibility();var l=arguments;t.forEach(e,i.hitch(this,function(e){this.layer.visible!==e.layerInfo.layer.visible&&this.inherited(l,[e.layerInfo.layer,e.layerControl.checkNode,a])})),this._setLayerCheckbox()},_setLayerCheckbox:function(){var e=this.checkNode,i=this.icons;o.remove(e,i.checked),o.remove(e,i.unchecked),o.remove(e,i.indeterminate);var t=this.hasAnyVisibleLayer(),s=this.hasAnyInvisibleLayer();t&&s?o.add(e,i.indeterminate):t?o.add(e,i.checked):o.add(e,i.unchecked)}})});
//# sourceMappingURL=Grouped.js.map