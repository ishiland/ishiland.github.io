/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/on","dojo/topic","dojo/dom-construct","dojo/dom-style","dojo/dom-class","dojo/dom-attr","dojo/fx","dojo/html","dijit/MenuItem","./../plugins/LayerMenu","dojo/text!./templates/Control.html"],function(e,i,t,n,a,l,o,s,h,r,c,d,u,p){return e([],{templateString:p,controller:null,layer:null,layerTitle:"Layer Title",controlOptions:null,layerMenu:null,icons:null,_reorderUp:null,_reorderDown:null,_scaleRangeHandler:null,_expandClickHandler:null,constructor:function(e){e.controller&&(this.icons=e.controller.icons),this._handlers=[]},postCreate:function(){return this.inherited(arguments),this.controller?this.layer?void(this.layer.loaded?this._initialize():this._handlers.push(this.layer.on("load",i.hitch(this,"_initialize")))):(a.publish("viewer/handleError",{source:"LayerControl/_Control",error:"layer option is required"}),void this.destroy()):(a.publish("viewer/handleError",{source:"LayerControl/_Control",error:"controller option is required"}),void this.destroy())},_initialize:function(){this._layerTypePreInit&&this._layerTypePreInit();var e=this.layer,t=this.controlOptions;this._setLayerCheckbox(e,this.checkNode),c.set(this.labelNode,this.layerTitle),!0!==t.noMenu&&!0!==this.controller.noMenu||!0===this.controller.noMenu&&!1===t.noMenu?(this.layerMenu=new u({control:this,contextMenuForWindow:!1,targetNodeIds:[this.menuNode],leftClickToOpen:!0}),this.layerMenu.startup(),this._initCustomMenu()):(s.remove(this.menuNode,"fa, layerControlMenuIcon, "+this.icons.menu),o.set(this.menuClickNode,"cursor","default")),0===e.minScale&&0===e.maxScale||(this._checkboxScaleRange(),this._scaleRangeHandler=e.getMap().on("zoom-end",i.hitch(this,"_checkboxScaleRange"))),this._layerTypeInit(),t.expanded&&t.sublayers&&this.expandClickNode.click(),this._handlers.push(n(this.checkNode,"click",i.hitch(this,"_setLayerVisibility",e,this.checkNode)),e.on("scale-range-change",i.hitch(this,"_scaleRangeChange")),e.on("update-start",i.hitch(this,"_updateStart")),e.on("update-end",i.hitch(this,"_updateEnd")),e.on("visibility-change",i.hitch(this,"_visibilityChange")))},_initCustomMenu:function(){t.forEach(this.controlOptions.menu,i.hitch(this,"_addCustomMenuItem",this.layerMenu))},_addCustomMenuItem:function(e,t){var n=new d(t);n.set("onClick",i.hitch(this,function(){a.publish("layerControl/"+t.topic,{layer:this.layer,iconNode:this.iconNode,menuItem:n})})),e.addChild(n)},_expandClick:function(){this._expandClickHandler=n(this.expandClickNode,"click",i.hitch(this,"_expandClicked")),this._handlers.push(this._expandClickHandler)},_expandClicked:function(){var e=this.icons,i=this.expandNode,t=this.expandIconNode;"none"===o.get(i,"display")?(r.wipeIn({node:i,duration:300}).play(),s.replace(t,e.collapse,e.expand)):(r.wipeOut({node:i,duration:300}).play(),s.replace(t,e.expand,e.collapse))},_expandRemove:function(){s.remove(this.expandIconNode,["fa",this.icons.expand,"layerControlToggleIcon"]),o.set(this.expandClickNode,"cursor","default"),l.destroy(this.expandNode)},_setLayerVisibility:function(e,i,t){t.stopPropagation&&t.stopPropagation(),e.visible?(this._setLayerCheckbox(e,i),e.hide(),a.publish("layerControl/layerToggle",{id:e.id,visible:e.visible,params:e._params})):(this._setLayerCheckbox(e,i),e.show(),a.publish("layerControl/layerToggle",{id:e.id,visible:e.visible,params:e._params})),0===e.minScale&&0===e.maxScale||this._checkboxScaleRange()},_setLayerCheckbox:function(e,i){var t=this.icons;e.visible?(h.set(i,"data-checked","checked"),s.replace(i,t.checked,t.unchecked)):(h.set(i,"data-checked","unchecked"),s.replace(i,t.unchecked,t.checked))},_checkboxScaleRange:function(){var e=this.checkNode,i=this.layer,t=i.getMap().getScale(),n=i.minScale,a=i.maxScale;s.remove(e,"layerControlCheckIconOutScale"),(0!==n&&t>n||0!==a&&t<a)&&s.add(e,"layerControlCheckIconOutScale")},_scaleRangeChange:function(){if(0!==this.layer.minScale||0!==this.layer.maxScale){if(this._checkboxScaleRange(),this._scaleRangeHandler){var e=t.indexOf(this._handlers,this._scaleRangeHandler);-1!==e&&(this._handlers[e].remove(),this._handlers.splice(e,1))}this._scaleRangeHandler=this.layer.getMap().on("zoom-end",i.hitch(this,"_checkboxScaleRange")),this._handlers.push(this._scaleRangeHandler)}else if(this._checkboxScaleRange(),this._scaleRangeHandler){var n=t.indexOf(this._handlers,this._scaleRangeHandler);-1!==n&&(this._handlers[n].remove(),this._handlers.splice(n,1)),this._scaleRangeHandler=null}},_updateStart:function(){o.set(this.layerUpdateNode,"display","inline-block"),this._layerState=i.clone({visible:this.layer.visible,visibleLayers:this.layer.visibleLayers||null})},_updateEnd:function(){o.set(this.layerUpdateNode,"display","none"),this._layerState||(this._layerState=null)},_visibilityChange:function(e){(e.visible&&"unchecked"===h.get(this.checkNode,"data-checked")||!e.visible&&"checked"===h.get(this.checkNode,"data-checked"))&&this._setLayerCheckbox(this.layer,this.checkNode)},destroy:function(){this.inherited(arguments),this._handlers.forEach(function(e){e.remove()})}})});
//# sourceMappingURL=_Control.js.map