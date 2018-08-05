define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/dom-style',
    'dojo/query',
    './_SymEditorBase',
    './SymColorPicker',
    './StylePicker',
    './NumericSlider'
], function (declare,
    lang,
    domStyle,
    query,
    _SymEditorBase,
    SymColorPicker,
    StylePicker,
    NumericSlider) {

    return declare(_SymEditorBase, {

        constructor: function (options) {

            options = options || {};

            if (!options.symbol) {
                options.symbol = this.advancedDrawConfig.defaultPolygonSymbol;
            }
            lang.mixin(this, options);

            this.initialized = false;
            this.editorLabel = this.i18n.widgets.sfsEditor.defaultEditorLabel;
            this.leftHandControlsLabel = this.i18n.widgets.sfsEditor.leftHandControlsLabel;
            this.rightHandControlsLabel = this.i18n.widgets.sfsEditor.rightHandControlsLabel;

            this._set('symbol', this.symbol);

        },

        postCreate: function () {

            this.inherited(arguments);

            this._initFillStylePicker();
            this._initFillColorPicker();

            this._initOutlineStylePicker();
            this._initOutlineColorPicker();
            this._initOutlineWidthSlider();

            this.initialized = true;

        },

        _initFillStylePicker: function () {

            this.fillStylePicker = new StylePicker({
                fillStyle: this.symbol.style,
                baseClass: 'symbolEditorControl',
                label: this.i18n.widgets.symbolStylePicker.label,
                styleSet: 'fill'
            }, this.createLeftHandControlsDiv());

            this.fillStylePicker.watch('style', lang.hitch(this, function () {

                this._updateSymbolAtt();

                if (!this._symbolStyleHasFill(arguments[2])) {
                    this._toggleSymbolColorControl(false);
                } else {
                    this._toggleSymbolColorControl(true);
                }

            }));

            this.fillStylePicker.startup();

        },

        _toggleSymbolColorControl: function (show) {

            var display = show ? 'block' : 'none';
            domStyle.set(this.fillColorPicker.domNode, 'display', display);

        },

        _symbolStyleHasFill: function (style) {

            // if (style === 'esriSFSSolid') {
            //     return true;
            // }
            //
            // return false;
            return style === 'esriSFSSolid';
        },

        _initFillColorPicker: function () {

            this.fillColorPicker = new SymColorPicker({
                color: this.symbol.color,
                baseClass: 'symbolEditorControl',
                buttonLabel: this.i18n.widgets.symbolColorPicker.buttonLabel,
                sliderLabel: this.i18n.widgets.symbolColorPicker.sliderLabel,
                colorPickerOptions: this.colorPickerOptions
            }, this.createLeftHandControlsDiv());

            this.fillColorPicker.watch('color', lang.hitch(this, function () {

                this._updateSymbolAtt();

            }));

            this.fillColorPicker.startup();

        },

        _initOutlineStylePicker: function () {

            this.outlineStylePicker = new StylePicker({
                lineStyle: this.symbol.outline.style,
                baseClass: 'symbolEditorControl',
                label: this.i18n.widgets.symbolStylePicker.label,
                styleSet: 'line'
            }, this.createRightHandControlsDiv());

            this.outlineStylePicker.watch('style', lang.hitch(this, function () {

                this._updateSymbolAtt();

            }));

            this.outlineStylePicker.startup();

        },

        _initOutlineColorPicker: function () {

            this.outlineColorPicker = new SymColorPicker({
                color: this.symbol.outline.color,
                baseClass: 'symbolEditorControl',
                buttonLabel: this.i18n.widgets.symbolColorPicker.buttonLabel,
                sliderLabel: this.i18n.widgets.symbolColorPicker.sliderLabel,
                colorPickerOptions: this.colorPickerOptions
            }, this.createRightHandControlsDiv());

            this.outlineColorPicker.watch('color', lang.hitch(this, function () {

                this._updateSymbolAtt();

            }));

            this.outlineColorPicker.startup();

        },

        _initOutlineWidthSlider: function () {

            this.outlineWidthSlider = new NumericSlider({
                value: this.symbol.outline.width,
                minimum: 1,
                maximum: 10,
                baseClass: 'symbolEditorControl',
                label: this.i18n.widgets.symbolWidthPicker.label + ' (' + this.symbol.outline.width + ')'
            }, this.createRightHandControlsDiv());

            this.outlineWidthSlider.watch('value', lang.hitch(this, function () {
                this.outlineWidthSlider.value = Math.round(this.outlineWidthSlider.value * 10) / 10; // set to 1dp
                query('label', this.outlineWidthSlider.domNode)[0].innerHTML = this.i18n.widgets.symbolWidthPicker.label + ' (' + this.outlineWidthSlider.value + ')';
                this._updateSymbolAtt();

            }));

            this.outlineWidthSlider.startup();

        },

        _updateSymbolAtt: function () {

            if (!this.initialized) {
                return;
            }

            var symbol = this._getSymbol();
            this._set('symbol', symbol);

        },

        _getSymbol: function () {

            var symbol = lang.clone(this.symbol);

            symbol.style = this.fillStylePicker.get('style');

            symbol.color = this.fillColorPicker.get('color');

            symbol.outline.style = this.outlineStylePicker.get('style');

            symbol.outline.color = this.outlineColorPicker.get('color');

            symbol.outline.width = this.outlineWidthSlider.get('value');

            return symbol;

        },

        _getSymbolAttr: function () {

            return this._getSymbol();

        },

        _setSymbolAttr: function (value) {

            if (this.initialized) {

                this.fillColorPicker.set('color', value.color);
                this.fillStylePicker.set('style', value.style);
                this.outlineColorPicker.set('color', value.outline.color);
                this.outlineWidthSlider.set('value', value.outline.width);
                this.outlineStylePicker.set('style', value.outline.style);

            }

            this.symbol = value;

        }

    });
});