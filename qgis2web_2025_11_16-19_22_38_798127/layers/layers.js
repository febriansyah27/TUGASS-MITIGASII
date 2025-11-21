var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RBI_50K_2023_SulawesiTengah_1 = new ol.format.GeoJSON();
var features_RBI_50K_2023_SulawesiTengah_1 = format_RBI_50K_2023_SulawesiTengah_1.readFeatures(json_RBI_50K_2023_SulawesiTengah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI_50K_2023_SulawesiTengah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI_50K_2023_SulawesiTengah_1.addFeatures(features_RBI_50K_2023_SulawesiTengah_1);
var lyr_RBI_50K_2023_SulawesiTengah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBI_50K_2023_SulawesiTengah_1, 
                style: style_RBI_50K_2023_SulawesiTengah_1,
                popuplayertitle: 'RBI_50K_2023_Sulawesi Tengah',
                interactive: false,
    title: 'RBI_50K_2023_Sulawesi Tengah<br />\
    <img src="styles/legend/RBI_50K_2023_SulawesiTengah_1_0.png" /> Banggai<br />\
    <img src="styles/legend/RBI_50K_2023_SulawesiTengah_1_1.png" /> Banggai Kepulauan<br />\
    <img src="styles/legend/RBI_50K_2023_SulawesiTengah_1_2.png" /> Banggai Laut<br />\
    <img src="styles/legend/RBI_50K_2023_SulawesiTengah_1_3.png" /> Buol<br />\
    <img src="styles/legend/RBI_50K_2023_SulawesiTengah_1_4.png" /> Donggala<br />\
    <img src="styles/legend/RBI_50K_2023_SulawesiTengah_1_5.png" /> Kota Palu<br />\
    <img src="styles/legend/RBI_50K_2023_SulawesiTengah_1_6.png" /> Morowali<br />\
    <img src="styles/legend/RBI_50K_2023_SulawesiTengah_1_7.png" /> Morowali Utara<br />\
    <img src="styles/legend/RBI_50K_2023_SulawesiTengah_1_8.png" /> Parigi Moutong<br />\
    <img src="styles/legend/RBI_50K_2023_SulawesiTengah_1_9.png" /> Poso<br />\
    <img src="styles/legend/RBI_50K_2023_SulawesiTengah_1_10.png" /> Sigi<br />\
    <img src="styles/legend/RBI_50K_2023_SulawesiTengah_1_11.png" /> Tojo Una Una<br />\
    <img src="styles/legend/RBI_50K_2023_SulawesiTengah_1_12.png" /> Toli Toli<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_RBI_50K_2023_SulawesiTengah_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RBI_50K_2023_SulawesiTengah_1];
lyr_RBI_50K_2023_SulawesiTengah_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RBI_50K_2023_SulawesiTengah_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RBI_50K_2023_SulawesiTengah_1.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RBI_50K_2023_SulawesiTengah_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});