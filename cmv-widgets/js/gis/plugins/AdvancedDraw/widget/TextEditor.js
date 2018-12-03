define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/dom-style',
    'dojo/query',
    'dojo/dom-construct',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/form/NumberSpinner',
    'dijit/form/Select',
    'dijit/form/ToggleButton',
    'dijit/registry',
    './NumericSlider',
    './SymColorPicker',
    'dojo/i18n!../nls/resource',
    'dojo/text!./templates/TextEditor.html'


], function (declare,
             lang,
             domStyle,
             query,
             domConstruct,
             _WidgetBase,
             _TemplatedMixin,
             NumberSpinner,
             Select,
             ToggleButton,
             registry,
             NumericSlider,
             SymColorPicker,
             i18n,
             template) {

    return declare([_WidgetBase, _TemplatedMixin], {

        templateString: template,
        i18n: i18n,
        symbol: null,
        initialized: false,
        textEditorHeaderLabel: i18n.widgets.textEditor.defaultEditorLabel,

        baseClass: 'symbolEditorBase',

        postCreate: function () {
            this.inherited(arguments);
            if (!this.symbol) {
                this.symbol = this.params.config.defaultTextSymbol;
            }
            this._set('symbol', this.symbol);
            this.init();
            this.initialized = true;
        },


        init: function () {
            this.createItalicButton();
            this.createBoldButton();
            this.createUnderlineButton();
            this.createLinethroughButton();
            this.createFontSpinner();
            this.createAngleSpinner();
            this.createHaloWidthSpinner();
            this.createTextColorPicker();
            this.createHaloColorPicker();
        },


        createFontSpinner: function () {

            this.sizeSpinner = new NumberSpinner({
                value: this.symbol.font.size,
                constraints: {min: 1, max: 100, places: 1},
                style: 'width:100%',
                intermediateChanges: true,
                onChange: lang.hitch(this, this.onValueChange)
            }, this.fontSizeNode);

            this.sizeSpinner.startup();
        },


        createAngleSpinner: function () {

            this.angleSpinner = new NumberSpinner({
                value: this.symbol.angle,
                constraints: {min: -360, max: 360, places: 0},
                style: 'width:100%',
                intermediateChanges: true,
                onChange: lang.hitch(this, this.onValueChange)
            }, this.fontAngleSpinnerNode);

            this.angleSpinner.startup();
        },

        createHaloWidthSpinner: function () {

            this.haloWidthSpinner = new NumberSpinner({
                value: this.symbol.haloSize,
                constraints: {min: 0, max: 20, places: 1},
                style: 'width:100%',
                intermediateChanges: true,
                onChange: lang.hitch(this, this.onValueChange)
            }, this.haloWidthSpinnerNode);

            this.haloWidthSpinner.startup();
        },

        createTextColorPicker: function () {

            this.textColorPicker = new SymColorPicker({
                color: this.symbol.color,
                baseClass: 'symbolEditorControl',
                buttonLabel: this.i18n.widgets.symbolColorPicker.buttonLabel,
                sliderLabel: this.i18n.widgets.symbolColorPicker.sliderLabel,
                colorPickerOptions: this.colorPickerOptions
            }, this.textColorPickerNode);

            this.textColorPicker.watch('color', lang.hitch(this, function () {
                this.onValueChange();
            }));

            this.textColorPicker.startup();

        },

        createHaloColorPicker: function () {

            this.haloColorPicker = new SymColorPicker({
                color: this.symbol.haloColor,
                baseClass: 'symbolEditorControl',
                buttonLabel: this.i18n.widgets.symbolColorPicker.buttonLabel,
                sliderLabel: this.i18n.widgets.symbolColorPicker.sliderLabel,
                colorPickerOptions: this.colorPickerOptions
            }, this.haloColorPickerNode);

            this.haloColorPicker.watch('color', lang.hitch(this, function () {
                this.onValueChange();
            }));
            this.haloColorPicker.startup();
        },


        createItalicButton: function () {
            this.italicButton = new ToggleButton({
                showLabel: false,
                class: 'textStyleButton',
                iconClass: 'fas fa-italic fa-xs',
                checked: this.symbol.font.style === 'italic',
                onClick: lang.hitch(this, this.onValueChange)
            }, this.italicButtonNode);
            this.italicButton.startup();
        },


        createBoldButton: function () {
            this.boldButton = new ToggleButton({
                showLabel: false,
                class: 'textStyleButton',
                iconClass: 'fas fa-bold',
                checked: this.symbol.font.weight === 'bold' || 'bolder',
                onClick: lang.hitch(this, this.onValueChange)
            }, this.boldButtonNode);
            this.boldButton.startup();
        },


        createUnderlineButton: function () {
            this.underlineButton = new ToggleButton({
                showLabel: false,
                class: 'textStyleButton',
                iconClass: 'fas fa-underline',
                style: 'font-size:10px',
                checked: this.symbol.decoration === 'underline',
                onClick: lang.hitch(this, function () {
                    this.linethroughButton.set('checked', false)
                    this.onValueChange();
                })
            }, this.underlineButtonNode);
            this.underlineButton.startup();
        },


        createLinethroughButton: function () {
            this.linethroughButton = new ToggleButton({
                showLabel: false,
                class: 'textStyleButton',
                iconClass: 'fas fa-strikethrough',
                style: 'font-size:10px',
                checked: this.symbol.decoration === 'line-through',
                onClick: lang.hitch(this, function () {
                    this.underlineButton.set('checked', false)
                    this.onValueChange();
                })
            }, this.linethroughButtonNode);
            this.linethroughButton.startup();
        },

        onValueChange: function () {
            if (!this.initialized) {
                return;
            }
            var symbol = this.getSymbol();

            this._set('symbol', symbol);
        },


        getFontDecoration: function () {
            if (this.underlineButton.checked) {
                return 'underline';
            } else if (this.linethroughButton.checked) {
                return 'line-through';
            }
            return 'none';
        },

        getSymbol: function () {

            var symbol = lang.clone(this.symbol);

            symbol.font.size = this.sizeSpinner.get('value');
            symbol.color = this.textColorPicker.get('color');
            symbol.haloColor = this.haloColorPicker.get('color');
            symbol.haloSize = this.haloWidthSpinner.get('value');
            symbol.angle = this.angleSpinner.get('value');
            symbol.font.style = this.italicButton.checked ? 'italic' : 'normal';
            symbol.font.weight = this.boldButton.checked ? 'bold' : 'normal';
            symbol.font.decoration = this.getFontDecoration();
            return symbol;
        }

    });
});