/*  ConfigurableMapViewerCMV
 *  version 2.0.0-beta.2
 *  Project: https://cmv.io/
 */

define(["dojo/_base/declare","./FloatingTitlePane","dojo/dom-class","xstyle/css!./ExpandPane/css/ExpandPane.css"],function(s,a,e){return s([a],{paneClass:"cmvExpandPane",postCreate:function(){this.canFloat=!1,this.inherited(arguments),this.domNode&&this.paneClass&&e.add(this.domNode,this.paneClass)}})});
//# sourceMappingURL=ExpandPane.js.map