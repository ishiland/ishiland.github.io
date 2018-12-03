define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/query',
    './_SymEditorBase',
    './SymColorPicker',
    './StylePicker',
    './NumericSlider',
    'dojo/i18n!../nls/resource'
], function (declare,
             lang,
             query,
             _SymEditorBase,
             SymColorPicker,
             StylePicker,
             NumericSlider,
             i18n) {

    return declare(_SymEditorBase, {
        symbol: null,
        initialized: false,
        editorLabel: i18n.widgets.smsEditor.defaultEditorLabel,
        leftHandControlsLabel: i18n.widgets.smsEditor.leftHandControlsLabel,

        postCreate: function () {
            this.inherited(arguments);

            if (!this.symbol) {
                this.symbol = this.params.config.defaultPolylineSymbol;
            }
            this._set('symbol', this.symbol);


            this._initOutlineStylePicker();
            this._initOutlineColorPicker();
            this._initOutlineWidthSlider();

            this.removeRightHandControls();

            this.initialized = true;

        },

        _initOutlineStylePicker: function () {

            this.outlineStylePicker = new StylePicker({
                lineStyle: this.symbol.style,
                baseClass: 'symbolEditorControl',
                label: this.i18n.widgets.symbolStylePicker.label,
                styleSet: 'line'
            }, this.createLeftHandControlsDiv());

            this.outlineStylePicker.watch('style', lang.hitch(this, function () {

                this._updateSymbolAtt();

            }));

            this.outlineStylePicker.startup();

        },

        _initOutlineColorPicker: function () {

            this.outlineColorPicker = new SymColorPicker({
                color: this.symbol.color,
                baseClass: 'symbolEditorControl',
                buttonLabel: this.i18n.widgets.symbolColorPicker.buttonLabel,
                sliderLabel: this.i18n.widgets.symbolColorPicker.sliderLabel,
                colorPickerOptions: this.colorPickerOptions
            }, this.createLeftHandControlsDiv());

            this.outlineColorPicker.watch('color', lang.hitch(this, function () {

                this._updateSymbolAtt();

            }));

            this.outlineColorPicker.startup();

        },

        _initOutlineWidthSlider: function () {

            this.outlineWidthSlider = new NumericSlider({
                value: this.symbol.width,
                minimum: 1,
                maximum: 10,
                baseClass: 'symbolEditorControl',
                label: this.i18n.widgets.symbolWidthPicker.label + ' (' + this.symbol.width + ')'
            }, this.createLeftHandControlsDiv());

            this.outlineWidthSlider.watch('value', lang.hitch(this, function () {
                this.outlineWidthSlider.value = Math.round(this.outlineWidthSlider.value * 10) / 10; // set to 1dp
                query('label', this.outlineWidthSlider.domNode)[0].innerHTML = this.i18n.widgets.symbolWidthPicker.label + ' (' + this.symbol.width + ')';
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

            symbol.style = this.outlineStylePicker.get('style');

            symbol.color = this.outlineColorPicker.get('color');

            symbol.width = this.outlineWidthSlider.get('value');

            return symbol;
        },

        _getSymbolAttr: function () {

            return this._getSymbol();

        },

        _setSymbolAttr: function (value) {

            if (this.initialized) {

                this.outlineColorPicker.set('color', value.color);
                this.outlineWidthSlider.set('value', value.width);
                this.outlineStylePicker.set('style', value.style);

            }

            this.symbol = value;

        }

    });
});