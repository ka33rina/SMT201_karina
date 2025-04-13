var wms_layers = [];

var lyr_Tengah20250203_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Tengah-20250203<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Tengah20250203_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11544529.816449, 149857.985119, 11549223.764192, 153516.511914]
        })
    });
var format_Tengah_1 = new ol.format.GeoJSON();
var features_Tengah_1 = format_Tengah_1.readFeatures(json_Tengah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tengah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tengah_1.addFeatures(features_Tengah_1);
var lyr_Tengah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tengah_1, 
                style: style_Tengah_1,
                popuplayertitle: 'Tengah',
                interactive: true,
                title: '<img src="styles/legend/Tengah_1.png" /> Tengah'
            });

lyr_Tengah20250203_0.setVisible(true);lyr_Tengah_1.setVisible(true);
var layersList = [lyr_Tengah20250203_0,lyr_Tengah_1];
lyr_Tengah_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'snippet': 'snippet', });
lyr_Tengah_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'SUBZONE_NO': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'SUBZONE_C': 'TextEdit', 'CA_IND': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'PLN_AREA_C': 'TextEdit', 'REGION_N': 'TextEdit', 'REGION_C': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Tengah_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'no label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'snippet': 'no label', });
lyr_Tengah_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});