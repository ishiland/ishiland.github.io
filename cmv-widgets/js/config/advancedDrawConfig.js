// the default configuration of symbols, layers, etc
define([], function () {
    return {
        map: true,
        mapClickMode: true,
        mapRightClickMenu: true,
        // default symbols
        defaultPolygonSymbol: {
            color: [0, 0, 0, 64],
            outline: {
                color: [0, 0, 0, 255],
                width: 2,
                type: 'esriSLS',
                style: 'esriSLSSolid'
            },
            type: 'esriSFS',
            style: 'esriSFSSolid'
        },
        defaultPolylineSymbol: {
            color: [0, 0, 0, 255],
            width: 2,
            type: 'esriSLS',
            style: 'esriSLSSolid'
        },
        defaultPointSymbol: {
            color: [0, 0, 0, 255],
            size: 10.5,
            type: 'esriSMS',
            style: 'esriSMSCircle',
            outline: {
                color: [255, 255, 255, 255],
                width: 1.5, //2 pixels when it becomes graphic symbol / .75 factor
                type: 'esriSLS',
                style: 'esriSLSSolid'
            }
        },
        defaultTextSymbol: {
            color: [0, 0, 0, 255],
            type: 'esriTS',
            verticalAlignment: 'middle',
            horizontalAlignment: 'center',
            text: 'New Text',
            angle: 0,
            rotated: false,
            kerning: true,
            haloSize: 1,
            haloColor: [255, 255, 255, 255],
            font: {
                size: 12,
                style: 'normal', // oblique, italic, normal
                weight: 'normal', // bolder, bold, normal, lighter
                family: 'sans-serif',
                decoration: 'none' // underline | line-through | none
            }
        },
        // the map overlay when identifying a graphic
        defaultTempSymbol: {
            color: [255, 255, 255, 128],
            type: 'esriSFS',
            style: 'esriSFSSolid'
        },
        // color picker options
        colorPickerOptions: {
            type: 'simple', // 'simple' | 'advanced'
            simple: {
                paletteSize: '3x4' // '3x4' | '7x10'
            },
            closeOnChange: true //close color picker on selection of new color?
        },

        // advanced settings
        // default layer definition
        _layerDefinition: {
            objectIdField: 'OBJECTID',
            type: 'Feature Layer',
            hasAttachments: false,
            capabilities: 'Query,Editing',
            fields: [{
                name: 'OBJECTID',
                type: 'esriFieldTypeOID'
            }, {
                name: 'draw_type',
                type: 'esriFieldTypeString'
            }, {
                name: 'draw_text_string',
                type: 'esriFieldTypeString'
            }]
        },
        // screen offsets for text tooltip dialog
        _textTooltipDialogOffset: {
            x: -12,
            y: 12
        },
        // snapping manager options
        _snappingOptions: {
            snapPointSymbol: {
                color: null,
                size: 11.25,
                type: 'esriSMS',
                style: 'esriSMSCross',
                outline: {
                    color: [255, 0, 0, 192],
                    width: 3.75,
                    type: 'esriSLS',
                    style: 'esriSLSSolid'
                }
            },
            alwaysSnap: true,
            //snapKey: 'CTRL', // key string ==> keys['CTRL']
            tolerance: 15
        },
        // geom editing edit toolbar options
        _editGeometryOptions: {
            allowAddVertices: true,
            allowDeleteVertices: true,
            uniformScaling: false
        }
    };
});