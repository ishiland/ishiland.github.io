define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dijit/layout/StackContainer',
    './SMSEditor',
    './SLSEditor',
    './SFSEditor',
    './TextEditor',
    'dojo/i18n!../nls/resource',
    'esri/symbols/jsonUtils',
    'xstyle/css!./css/DefaultSymbolEditors.css'
], function (declare,
             lang,
             StackContainer,
             SMSEditor,
             SLSEditor,
             SFSEditor,
             TextEditor,
             i18n,
             symUtil) {
    return declare(StackContainer, {
        doLayout: false,
        baseClass: 'defaultSymbolEditors',
        symbols: null,
        i18n: i18n,
        colorPickerOptions: {
            type: 'simple',
            simple: {
                paletteSize: '7x10'
            },
            closeOnChange: true
        },

        startup: function () {
            this.inherited(arguments);
            this._createSMSEditor();
            this._createSLSEditor();
            this._createSFSEditor();
            this._createTextEditor();
        },

        _createSMSEditor: function () {
            this.smsEditor = new SMSEditor({
                colorPickerOptions: this.colorPickerOptions,
                config: this.config
            });
            this.smsEditor.watch('symbol', lang.hitch(this, function () {
                var value = arguments[2];
                if (this.symbols) {
                    this.symbols.point = symUtil.fromJson(value);
                }
            }));
            this.addChild(this.smsEditor);
            this.smsEditor.set('symbol', this.symbols.point.toJson());
        },

        _createTextEditor: function () {
            this.textEditor = new TextEditor({
                colorPickerOptions: this.colorPickerOptions,
                config: this.config
            });
            this.textEditor.watch('symbol', lang.hitch(this, function () {
                var value = arguments[2];
                if (this.symbols.text) {
                    this.symbols.text = symUtil.fromJson(value);
                }
            }));
            this.addChild(this.textEditor);
            this.textEditor.set('symbol', this.symbols.text.toJson());
        },

        _createSLSEditor: function () {

            this.slsEditor = new SLSEditor({
                colorPickerOptions: this.colorPickerOptions,
                config: this.config
            });
            this.slsEditor.watch('symbol', lang.hitch(this, function () {
                var value = arguments[2];
                if (this.symbols) {
                    this.symbols.polyline = symUtil.fromJson(value);
                }
            }));
            this.addChild(this.slsEditor);
            this.slsEditor.set('symbol', this.symbols.polyline.toJson());
        },

        _createSFSEditor: function () {

            this.sfsEditor = new SFSEditor({
                colorPickerOptions: this.colorPickerOptions,
                config: this.config
            });
            this.sfsEditor.watch('symbol', lang.hitch(this, function () {
                var value = arguments[2];
                if (this.symbols) {
                    this.symbols.polygon = symUtil.fromJson(value);
                }
            }));
            this.addChild(this.sfsEditor);
            this.sfsEditor.set('symbol', this.symbols.polygon.toJson());
        },

        showSMSEditor: function () {
            this.selectChild(this.smsEditor);
        },

        showSLSEditor: function () {
            this.selectChild(this.slsEditor);
        },

        showSFSEditor: function () {
            this.selectChild(this.sfsEditor);
        },

        showTextEditor: function () {
            this.selectChild(this.textEditor);
        }
    });
});