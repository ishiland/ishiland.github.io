/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/_base/lang","dojo/aspect","dojo/topic","esri/layers/GraphicsLayer","esri/graphic","esri/renderers/SimpleRenderer","dojo/text!./StreetView/templates/StreetView.html","esri/symbols/PictureMarkerSymbol","dojo/dom-style","dojo/dom-geometry","esri/geometry/Point","esri/SpatialReference","dijit/MenuItem","proj4js/proj4","dojo/i18n!./StreetView/nls/resource","gis/plugins/Google","dijit/form/ToggleButton","xstyle/css!./StreetView/css/StreetView.css"],function(t,e,i,s,n,a,o,r,h,c,p,l,d,m,u,g,w,C,k,f){var S;return t([e,i,s],{widgetsInTemplate:!0,templateString:p,i18n:k,mapClickMode:null,panoOptions:null,proj4BaseURL:"https://epsg.io/",proj4Catalog:"EPSG",proj4CustomURL:null,postCreate:function(){this.inherited(arguments),f.load(n.hitch(this,function(t){S=t,this.panoOptions={addressControlOptions:{position:S.maps.ControlPosition.TOP_RIGHT},linksControl:!1,panControl:!1,zoomControlOptions:{style:S.maps.ZoomControlStyle.SMALL},enableCloseButton:!1},this.createGraphicsLayer(),this.map.on("click",n.hitch(this,"getStreetView")),this.own(o.subscribe("mapClickMode/currentSet",n.hitch(this,"setMapClickMode"))),this.parentWidget&&(this.parentWidget.toggleable&&(this.own(a.after(this.parentWidget,"toggle",n.hitch(this,function(){this.onLayoutChange(this.parentWidget.open)}))),this.onLayoutChange(this.parentWidget.open)),this.own(a.after(this.parentWidget,"resize",n.hitch(this,"resize"))),this.own(o.subscribe(this.parentWidget.id+"/resize/resize",n.hitch(this,"resize")))),window.proj4||(window.proj4=C),this.mapRightClickMenu&&this.addRightClickMenu()}))},createGraphicsLayer:function(){this.pointSymbol=new l(require.toUrl("gis/dijit/StreetView/images/blueArrow.png"),30,30),this.pointGraphics=new r({id:"streetview_graphics",title:"Street View"}),this.pointRenderer=new c(this.pointSymbol),this.pointRenderer.label="Street View",this.pointRenderer.description="Street View",this.pointGraphics.setRenderer(this.pointRenderer),this.map.addLayer(this.pointGraphics)},addRightClickMenu:function(){this.map.on("MouseDown",n.hitch(this,function(t){this.mapRightClickPoint=t.mapPoint})),this.mapRightClickMenu.addChild(new w({label:this.i18n.rightClickMenuItem.label,onClick:n.hitch(this,"streetViewFromMapRightClick")}))},onOpen:function(){this.pointGraphics.show(),this.panorama&&this.panoramaService||(this.panorama=new S.maps.StreetViewPanorama(this.panoNode,this.panoOptions),this.panoramaService=new S.maps.StreetViewService)},onClose:function(){this.pointGraphics.hide(),"streetview"===this.mapClickMode&&this.connectMapClick()},onLayoutChange:function(t){t?this.onOpen():this.onClose()},placePoint:function(){this.streetViewButtonDijit.get("checked")?this.disconnectMapClick():this.connectMapClick()},disconnectMapClick:function(){this.streetViewButtonDijit.set("checked",!0),this.map.setMapCursor("crosshair"),o.publish("mapClickMode/setCurrent","streetview")},connectMapClick:function(){this.streetViewButtonDijit.set("checked",!1),this.map.setMapCursor("auto"),o.publish("mapClickMode/setDefault")},clearGraphics:function(){this.pointGraphics.clear(),d.set(this.noStreetViewResults,"display","block")},enableStreetViewClick:function(){this.disconnectMapClick()},disableStreetViewClick:function(){this.connectMapClick()},getStreetView:function(t,e){if("streetview"===this.mapClickMode||e){var i=t.mapPoint;if(!i)return;this.parentWidget&&!this.parentWidget.open&&this.parentWidget.toggle();var s=null,a=i.spatialReference.wkid;102100===a&&(a=3857);var o=this.proj4Catalog+":"+String(a);if(!C.defs[o]){var r=this.proj4CustomURL||this.proj4BaseURL+String(a)+".js";return void require([r],n.hitch(this,"getStreetView",t,!0))}var h=C(C.defs[o]).inverse([i.x,i.y]);h&&(s={x:h[0],y:h[1]}),d.set(this.streetViewInstructions,"display","none"),s?(d.set(this.noStreetViewResults,"display","none"),this.getPanoramaLocation(s)):(this.setPanoPlace=null,this.clearGraphics(),d.set(this.noStreetViewResults,"display","block"))}},getPanoramaLocation:function(t){var e=new S.maps.LatLng(t.y,t.x);this.panoramaService.getPanoramaByLocation(e,50,n.hitch(this,"getPanoramaByLocationComplete",t)),S.maps.event.addListener(this.panorama,"position_changed",n.hitch(this,"setPlaceMarkerPosition")),S.maps.event.addListener(this.panorama,"pov_changed",n.hitch(this,"setPlaceMarkerRotation"))},getPanoramaByLocationComplete:function(t,e,i){if("OK"===i){this.disableStreetViewClick();var s=new S.maps.LatLng(t.y,t.x);this.setPanoPlace=s,this.firstSet=!0,this.panorama.setPosition(s)}else"ZERO_RESULTS"===i?(this.setPanoPlace=null,this.clearGraphics(),this.connectMapClick(),d.set(this.noStreetViewResults,"display","block")):(this.setPanoPlace=null,this.clearGraphics(),o.publish("viewer/handleError",{source:"StreetView",error:"Unknown."}))},resize:function(t){t&&t.h&&m.setContentSize(this.containerNode,{h:t.h-2}),this.panorama&&S.maps.event.trigger(this.panorama,"resize")},setPlaceMarkerPosition:function(){this.placeMarker&&0!==this.pointGraphics.graphics.length||(this.placeMarker=new h,this.pointGraphics.add(this.placeMarker));var t=this.panorama.getPosition(),e=t.lat(),i=t.lng();if(!isNaN(e)&&!isNaN(i)){var s=null,a=this.map.spatialReference.wkid;102100===a&&(a=3857);var o=this.proj4Catalog+":"+String(a);if(!C.defs[o]){var r=this.proj4CustomURL||this.proj4BaseURL+String(a)+".js";return void require([r],n.hitch(this,"setPlaceMarkerPosition"))}if(s=C(C.defs[o]).forward([i,e])){var c=new u(s,new g({wkid:a}));if(this.placeMarker.setGeometry(c),this.setPanoPlace&&!this.firstSet){var p=S.maps.geometry.spherical.computeHeading(t,this.setPanoPlace);this.panorama.setPov({heading:p,pitch:0}),setTimeout(n.hitch(this,function(){this.setPanoPlace=null}),1e3)}else this.firstSet=!1}}},setPlaceMarkerRotation:function(){if(this.placeMarker){var t=this.panorama.getPov();this.pointSymbol.setAngle(t.heading),this.pointGraphics.refresh()}},streetViewFromMapRightClick:function(){var t={mapPoint:this.mapRightClickPoint};this.getStreetView(t,!0)},setMapClickMode:function(t){this.mapClickMode=t}})});
//# sourceMappingURL=StreetView.js.map