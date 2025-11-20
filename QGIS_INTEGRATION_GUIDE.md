# Panduan Integrasi Peta QGIS ke Web Pemetaan Gempa

## Cara Menggunakan Data GeoJSON dari QGIS

### Langkah 1: Export Data dari QGIS ke Format GeoJSON

1. **Buka QGIS dan load layer peta Sulteng Anda**
   - File → Open → Pilih file shapefile atau raster map Anda

2. **Export layer ke GeoJSON**
   - Right-click layer → Export As...
   - Format: GeoJSON
   - Nama file: `sulteng.geojson`
   - Simpan ke folder: `/data/` dalam project web ini

### Langkah 2: Persiapkan Struktur Properties di GeoJSON

File GeoJSON harus memiliki properties seperti ini:

\`\`\`json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Palu",
        "risk": "Tinggi",
        "description": "Deskripsi Palu...",
        "population": "~380,000 jiwa",
        "image": "images/palu.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [119.8587, -0.8935]
      }
    }
  ]
}
\`\`\`

### Langkah 3: Update File JavaScript untuk Load GeoJSON

Buka file `js/map.js` dan tambahkan kode ini untuk load GeoJSON dari QGIS:

\`\`\`javascript
// Load GeoJSON dari QGIS
fetch('data/sulteng.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            pointToLayer: function(feature, latlng) {
                const risk = feature.properties.risk;
                const color = getRiskColor(risk);
                const radius = getMarkerRadius(risk);
                
                return L.circleMarker(latlng, {
                    radius: radius,
                    fillColor: color,
                    color: '#fff',
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            },
            onEachFeature: function(feature, layer) {
                layer.bindPopup(createPopupContent(feature.properties));
                layer.on('click', function() {
                    updateInfoSidebar(feature.properties);
                    map.setView([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], 12);
                });
            }
        }).addTo(map);
    })
    .catch(error => console.error('Error loading GeoJSON:', error));
\`\`\`

### Langkah 4: Untuk Polygon/Multipolygon (Batas Administratif)

Jika Anda ingin menampilkan batas kabupaten (polygon dari QGIS):

\`\`\`javascript
fetch('data/sulteng_boundaries.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: function(feature) {
                return {
                    color: '#667eea',
                    weight: 2,
                    opacity: 0.7,
                    fillOpacity: 0.1
                };
            },
            onEachFeature: function(feature, layer) {
                layer.bindPopup(feature.properties.name);
            }
        }).addTo(map);
    });
\`\`\`

## Struktur File yang Dibutuhkan

\`\`\`
project-root/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── map.js
│   └── data.js
├── data/                 ← FOLDER DATA QGIS
│   ├── sulteng.geojson   ← Export dari QGIS (points)
│   └── sulteng_boundaries.geojson ← Export dari QGIS (polygons)
├── images/
│   ├── palu.jpg
│   ├── donggala.jpg
│   └── ...
└── README.md
\`\`\`

## Tips & Tricks

### Tip 1: Export Shapefile ke GeoJSON Menggunakan Tools Lain
Jika QGIS bermasalah, gunakan `ogr2ogr` (command line):
\`\`\`bash
ogr2ogr -f GeoJSON sulteng.geojson sulteng.shp
\`\`\`

### Tip 2: Validasi GeoJSON
Gunakan website: https://geojson.io/
- Upload file GeoJSON Anda untuk memvalidasi format dan preview visual

### Tip 3: Styling Properties dari GeoJSON
Tambahkan properties `color` dan `stroke` dalam GeoJSON untuk styling otomatis:
\`\`\`json
"properties": {
  "name": "Palu",
  "color": "#ff6b6b",
  "stroke": "#ff6b6b"
}
\`\`\`

### Tip 4: Performance untuk Data Besar
Jika GeoJSON sangat besar (>5MB):
- Gunakan TopoJSON format (ukuran lebih kecil)
- Atau split menjadi beberapa file per kabupaten

### Tip 5: Membaca Koordinat dari QGIS
QGIS biasanya menggunakan format [longitude, latitude]
- Pastikan Anda menggunakan order yang benar dalam GeoJSON
- Leaflet menggunakan [latitude, longitude] untuk `L.latlng()`

## Contoh Kode Lengkap untuk Load GeoJSON + Data Daerah

\`\`\`javascript
let geoJsonLayer;

// Load GeoJSON + Gabung dengan data daerah
function loadGeoJsonData() {
    fetch('data/sulteng.geojson')
        .then(response => response.json())
        .then(data => {
            geoJsonLayer = L.geoJSON(data, {
                pointToLayer: function(feature, latlng) {
                    const region = regionsData.find(r => 
                        r.name.toLowerCase() === feature.properties.name.toLowerCase()
                    );
                    
                    if (region) {
                        const color = getRiskColor(region.risk);
                        const radius = getMarkerRadius(region.risk);
                        
                        return L.circleMarker(latlng, {
                            radius: radius,
                            fillColor: color,
                            color: '#fff',
                            weight: 2,
                            opacity: 1,
                            fillOpacity: 0.8
                        });
                    }
                },
                onEachFeature: function(feature, layer) {
                    const region = regionsData.find(r => 
                        r.name.toLowerCase() === feature.properties.name.toLowerCase()
                    );
                    
                    if (region) {
                        layer.bindPopup(createPopupContent(region));
                        layer.on('click', function() {
                            updateInfoSidebar(region);
                            map.setView(region.coords, 12);
                        });
                    }
                }
            }).addTo(map);
        });
}

// Call function saat map initialized
map.on('load', loadGeoJsonData);
\`\`\`

Sekarang peta Anda bisa menggunakan data real dari QGIS! 🗺️
</parameter>
