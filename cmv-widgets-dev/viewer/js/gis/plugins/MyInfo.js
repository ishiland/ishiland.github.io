define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',

    'dojo',

    'dojo/text!./MyInfo/templates/MyInfo.html',

    'dijit/layout/ContentPane',

    'xstyle/css!./MyInfo/css/MyInfo.css'
], function (declare,
             _WidgetBase,
             _TemplatedMixin,
             _WidgetsInTemplateMixin,
             dojo,
             template) {
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        name: 'MyInfo',
        href: null,
        widgetsInTemplate: true,
        templateString: template,
        content: '',
        baseClass: 'cmvMyInfoWidget',
        attachTo: 'sidebarLeft',

        postCreate: function () {

            this.inherited(arguments);

            if (this.params.href) {
                this.myInfoNode.set('href', this.params.href);
                dojo.place(this.myInfoNode.domNode, this.attachTo, this.position);
            } else if (this.params.content) {
                dojo.place(this.params.content, this.attachTo, this.position);
            } else {
                console.log('No href or content param specified!');
            }
        }
    });
});