# WMS Basemaps


## Purpose
Uses WMS Layers as a basemaps for the [Configurable Map Viewer (CMV)](http://cmv.io/). This works in place of the core CMV basemap widget.

## Features
- updated for CMV 2.0.0
- Supports multiple WMS Servers
- Works in both 'agol' and 'custom' modes
- WMS basemap loading notification

## Notes
see the sample config files for using `custom` and `agol` modes.
- the `mapStartBasemap` must be a custom supported or AGOL basemap, not a wms layer.
- the wms layer spatial reference must match the `mapStartBasemap` basemap
[See Here](http://docs.cmv.io/en/1.3.4/configure/basemaps/) for more info on supported starting basemaps.

## [Demo](http://ishiland.github.io/cmv-wms-basemaps)
