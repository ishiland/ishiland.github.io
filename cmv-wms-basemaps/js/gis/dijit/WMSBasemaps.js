define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/_base/lang',
    'dijit/DropDownMenu',
    'dijit/MenuItem',
    'dojo/_base/array',
    'dojox/lang/functional',
    'dojo/text!./WMSBasemaps/templates/WMSBasemaps.html',
    'esri/dijit/BasemapGallery',
    'dojo/i18n!./WMSBasemaps/nls/resource',

    'dijit/form/DropDownButton',
    'xstyle/css!./WMSBasemaps/css/WMSBasemaps.css'
], function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, lang, DropDownMenu, MenuItem, array, functional, template, BasemapGallery, i18n) {

    // main basemap widget
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        widgetsInTemplate: true,
        i18n: i18n,
        mode: '',
        title: i18n.title,
        mapStartBasemap: '',
        basemapsToShow: [],
        validBasemaps: [],
        postCreate: function () {

            this.inherited(arguments);
            this.currentBasemap = this.mapStartBasemap || null;

            var WMSLayer = this.wmsConfig;

            //WMS loading indicator for basemaps DropDownButton
            WMSLayer.on('update-start', lang.hitch(this, function () {
                this.dropDownButton.set('iconClass', 'fa fa-refresh fa-spin');
            }));

            WMSLayer.on('update-end', lang.hitch(this, function () {
                this.dropDownButton.set('iconClass', 'basemapsIcon');
            }));

            WMSLayer.on('error', function (e) {
                console.log('WMS Basemap Error: ', e);
            });

            if (this.mode === 'custom') {
                this.gallery = new BasemapGallery({
                    map: this.map,
                    showArcGISBasemaps: false,
                    basemaps: functional.map(this.basemaps, function (map) {
                        return map.basemap;
                    })
                });
                this.gallery.startup();
            }

            this.menu = new DropDownMenu({
                style: 'display: none;' 
            });

            array.forEach(this.basemapsToShow, function (basemap) {

                if (this.basemaps.hasOwnProperty(basemap)) {
                    var menuItem = new MenuItem({
                        id: basemap,
                        label: this.basemaps[basemap].title,
                        iconClass: (basemap == this.mapStartBasemap) ? 'selectedIcon' : 'emptyIcon',
                        onClick: lang.hitch(this, function () {
                            var wms = this.basemaps[basemap].wms;
                            if (basemap !== this.currentBasemap) {
                                this.currentBasemap = basemap;
                                if (this.mode === 'custom' && !wms) {
                                    this.map.removeLayer(WMSLayer);
                                    this.gallery.select(basemap);
                                }
                                else if (this.mode === 'agol' && !wms) {
                                    this.map.removeLayer(WMSLayer);
                                    this.map.setBasemap(basemap);
                                }
                                else if (this.mode === 'custom' && wms){
                                    this.wmsConfig.spatialReferences = [this.wmsConfig.extent.spatialReference.wkid];
                                    this.map.addLayer(WMSLayer, 1);
                                    this.wmsConfig.setVisibleLayers(this.basemaps[basemap].basemap.id);
                                }
                                else if (this.mode === 'agol' && wms){
                                    this.wmsConfig.spatialReferences = [this.wmsConfig.extent.spatialReference.wkid];
                                    this.map.addLayer(WMSLayer, 1);
                                    this.wmsConfig.setVisibleLayers(this.basemaps[basemap].basemap.id);
                                }

                                var ch = this.menu.getChildren();
                                array.forEach(ch, function (c) {
                                    if (c.id == basemap) {
                                        c.set('iconClass', 'selectedIcon');
                                    } else {
                                        c.set('iconClass', 'emptyIcon');
                                    }
                                });
                            }
                        })
                    });
                    this.menu.addChild(menuItem);
                }
            }, this);

            this.dropDownButton.set('dropDown', this.menu);
        },
        startup: function () {
            this.inherited(arguments);
            if (this.mode === 'custom') {
                if (this.map.getBasemap() !== this.mapStartBasemap) { //based off the title of custom basemaps in viewer.js config
                    this.gallery.select(this.mapStartBasemap);
                }
            } else {
                if (this.mapStartBasemap) {
                    if (this.map.getBasemap() !== this.mapStartBasemap) { //based off the agol basemap name
                        this.map.setBasemap(this.mapStartBasemap);
                    }
                }
            }
        }
    });
});