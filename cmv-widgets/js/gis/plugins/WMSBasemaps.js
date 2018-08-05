define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'dojo/_base/lang',
    'dijit/DropDownMenu',
    'dijit/MenuItem',
    'dojo/_base/array',
    'dojo/topic',

    'dojox/lang/functional',
    'dojo/text!./WMSBasemaps/templates/WMSBasemaps.html',
    'esri/dijit/BasemapGallery',
    'dojo/i18n!./WMSBasemaps/nls/resource',
    'dijit/form/DropDownButton',
    'xstyle/css!./WMSBasemaps/css/WMSBasemaps.css'
], function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, lang, DropDownMenu, MenuItem, array, topic, functional, template, BasemapGallery, i18n) {

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
            this.initializeBasemaps();
            // topic.subscribe('basemaps/updateBasemap', lang.hitch(this, 'updateBasemap'));
        },


        initializeBasemaps: function () {

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

            this.buildMenu();
        },

        buildMenu: function () {

            array.forEach(this.basemapsToShow, function (basemap) {

                if (this.basemaps.hasOwnProperty(basemap)) {
                    var menuItem = new MenuItem({
                        id: basemap,
                        label: this.basemaps[basemap].title,
                        iconClass: (basemap === this.mapStartBasemap) ? 'selectedIcon' : 'emptyIcon',
                        onClick: lang.hitch(this, function () {

                            var selected = this.basemaps[basemap];

                            if (this.mode === 'agol') {

                                // set selected basemap if WMS
                                if (selected.basemap) {
                                    this.addWMSLayer(selected);
                                } else { // set selected AGO layer
                                    this.map.setBasemap(basemap);
                                }
                                // remove previous basemap layer if WMS
                                if (this.currentBasemap.basemap) {
                                    var layer = this.map.getLayer(this.currentBasemap.basemap.id);
                                    if (!selected.basemap && this.currentBasemap.basemap) {
                                        this.map.removeLayer(layer);
                                    } else if (selected.basemap && this.currentBasemap.basemap) {
                                        if (selected.basemap.id !== this.currentBasemap.basemap.id) {
                                            this.map.removeLayer(layer);
                                        }
                                    }
                                }

                            } else if (this.mode === 'custom') {

                                // set selected basemap if WMS
                                if (selected.basemap.layerInfos) {
                                    this.addWMSLayer(selected);
                                } else { // set selected Custom Arcgis layer
                                    this.gallery.select(basemap);
                                }

                                // remove previous basemap layer if WMS
                                if (this.currentBasemap.basemap) {
                                    var removeLayer = this.map.getLayer(this.currentBasemap.basemap.id);
                                    if (removeLayer) {
                                        if (removeLayer.id !== selected.basemap.id) {
                                            this.map.removeLayer(removeLayer);
                                        }
                                    }
                                }
                            }

                            this.currentBasemap = selected;

                            var ch = this.menu.getChildren();
                            array.forEach(ch, function (c) {
                                if (c.id === basemap) {
                                    c.set('iconClass', 'selectedIcon');
                                } else {
                                    c.set('iconClass', 'emptyIcon');
                                }
                            });
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
                if (this.map.getBasemap() !== this.mapStartBasemap) {
                    this.gallery.select(this.mapStartBasemap);
                }
            } else if (this.mapStartBasemap) {
                if (this.map.getBasemap() !== this.mapStartBasemap) {
                    this.map.setBasemap(this.mapStartBasemap);
                }
            }
        },


        addWMSLayer: function (selected) {

            this.map.addLayer(selected.basemap, 1);

            var newLayer = this.map.getLayer(selected.basemap.id);

            newLayer.on('update-start', lang.hitch(this, function () {
                this.dropDownButton.set('iconClass', 'fa fa-sync fa-spin');
            }));

            newLayer.on('update-end', lang.hitch(this, function () {
                this.dropDownButton.set('iconClass', 'basemapsIcon');
            }));

            newLayer.on('error', function (e) {
                console.log('WMS Basemap Error: ', e); // eslint-disable-line
            });

        }

    });
});