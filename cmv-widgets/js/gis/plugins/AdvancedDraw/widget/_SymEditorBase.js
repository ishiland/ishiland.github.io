define([
    'dojo/_base/declare',
    'dojo/dom-construct',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/i18n!../nls/resource',
    'dojo/text!./templates/_SymbolEditorBase.html',
    'xstyle/css!./css/_SymbolEditorBase.css',
    'xstyle/css!./css/SymbolEditor.css'
], function (declare,
    domConstruct,
    _WidgetBase,
    _TemplatedMixin,
    i18n,
    template) {

    return declare([_WidgetBase, _TemplatedMixin], {

        templateString: template,
        i18n: i18n,
        baseClass: 'symbolEditorBase',
        leftHandControlsLabel: 'Fill',
        rightHandControlsLabel: 'Outline',
        editorLabel: 'Symbol Editor',

        colorPickerOptions: {
            type: 'simple',
            simple: {
                paletteSize: '7x10'
            },
            closeOnChange: false
        },

        removeLeftHandControls: function () {

            domConstruct.destroy(this.leftHandControlsLI);

        },

        removeRightHandControls: function () {

            domConstruct.destroy(this.rightHandControlsLI);

        },

        createLeftHandControlsDiv: function () {

            return domConstruct.create('div', {}, this.leftHandControls, 'last');

        },

        createRightHandControlsDiv: function () {

            return domConstruct.create('div', {}, this.rightHandControls, 'last');

        }

    });
});