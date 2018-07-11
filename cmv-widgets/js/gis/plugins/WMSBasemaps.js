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
        baseClass: 'basemapWidget',
        i18n: i18n,
        mode: '',
        title: i18n.title,
        mapStartBasemap: '',
        basemapsToShow: [],
        validBasemaps: [],
        postCreate: function () {

            this.inherited(arguments);

            this.currentBasemap = this.mapStartBasemap || null;

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
                class: this.baseClass + '-menu',
                style: 'display: none;'
            });

            array.forEach(this.basemapsToShow, function (basemap) {

                if (this.basemaps.hasOwnProperty(basemap)) {
                    var menuItem = new MenuItem({
                        id: basemap,
                        label: this.basemaps[basemap].title,
                        iconClass: (basemap === this.mapStartBasemap) ? 'selectedIcon' : 'emptyIcon',
                        onClick: lang.hitch(this, function () {
                            var wms = this.basemaps[basemap].basemap.layerInfos;
                            var previousLayer = this.map.getLayer(this.currentBasemap);
                            if (basemap !== this.currentBasemap) {
                                if (this.mode === 'custom' && !wms) {
                                    if (this.basemaps[this.currentBasemap].basemap.layerInfos) {
                                        previousLayer = this.map.getLayer(this.currentBasemap);
                                        this.map.removeLayer(previousLayer);
                                    }
                                    this.gallery.select(basemap);
                                }
                                else if (this.mode === 'agol' && !wms) {
                                    if (this.basemaps[this.currentBasemap].basemap.layerInfos) {
                                        previousLayer = this.map.getLayer(this.currentBasemap);
                                        this.map.removeLayer(previousLayer);
                                    }
                                    this.map.setBasemap(basemap);
                                }
                                else if (wms) {

                                    if (this.basemaps[this.currentBasemap].basemap.layerInfos) {
                                        previousLayer = this.map.getLayer(this.currentBasemap);
                                        this.map.removeLayer(previousLayer);
                                    }
                                    this.map.addLayer(this.basemaps[basemap].basemap, 1);
                                    var newLayer = this.map.getLayer(this.basemaps[basemap].basemap.id);

                                    newLayer.on('update-start', lang.hitch(this, function () {
                                        this.dropDownButton.set('iconClass', 'fa fa-sync fa-spin');
                                    }));

                                    newLayer.on('update-end', lang.hitch(this, function () {
                                        this.dropDownButton.set('iconClass', 'basemapsIcon');
                                    }));

                                    newLayer.on('error', function (e) {
                                        console.log('WMS Basemap Error: ', e);
                                    });
                                }

                                this.currentBasemap = basemap;


                                var ch = this.menu.getChildren();
                                array.forEach(ch, function (c) {
                                    if (c.id === basemap) {
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