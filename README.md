# Pemetaan Mitigasi Bencana Gempa - Sulawesi Tengah

-DI BUAT OLEH KELOMPOK 1-
1. Febriansyah H - F52124044
2. Muh. ikhram - F52124050
3. Vanissa Azzahra Nggiu -F521240
4. Sahra Anshar - F521240
5. Ellen Tri Alfiana - F52124049

Aplikasi web interaktif untuk visualisasi peta zona risiko gempa dan kesiapsiagaan di Sulawesi Tengah menggunakan HTML, CSS, dan JavaScript murni.

## 📁 Struktur Folder

\`\`\`
gempa-mitigation-map/
├── index.html           # File utama HTML
├── css/
│   └── styles.css      # File CSS terpisah
├── js/
│   ├── data.js         # Data region dan helper functions
│   └── map.js          # Logika map utama
├── images/             # Folder untuk gambar daerah
│   ├── palu.jpg
│   ├── donggala.jpg
│   ├── sigi.jpg
│   ├── parigi.jpg
│   ├── buol.jpg
│   └── tolitoli.jpg
└── README.md           # Dokumentasi ini
\`\`\`

## 🚀 Fitur Utama

- ✨ **Peta Interaktif Leaflet.js** - Peta OpenStreetMap yang responsif
- 🎯 **Marker Dinamis** - Berbagai ukuran berdasarkan level risiko
- 📍 **Popup Deskripsi** - Popup dengan gambar, statistik, dan fasilitas
- 🔍 **Zoom Otomatis** - Zoom ke area saat marker diklik
- 🎨 **Color Coding** - Warna berbeda untuk level risiko (Tinggi/Sedang/Rendah)
- 📊 **Sidebar Legenda** - Panel informasi dan statistik Sulteng
- 📱 **Responsive Design** - Cocok untuk desktop, tablet, dan mobile
- 🖱️ **Hover Effects** - Highlight pada marker saat hover

## 🖼️ Memasukkan Gambar

1. Buat folder `images` di root directory
2. Masukkan gambar dengan nama sesuai data:
   - `palu.jpg`
   - `donggala.jpg`
   - `sigi.jpg`
   - `parigi.jpg`
   - `buol.jpg`
   - `tolitoli.jpg`

3. Ukuran gambar optimal: 400x300px atau lebih
4. Format: JPG, PNG, atau WebP

## 📝 Menggunakan Data GeoJSON Dari QGIS

Untuk menggunakan data dari folder GIS Anda:

### Opsi 1: Menambah Layer GeoJSON

Edit `js/map.js` dan tambahkan sebelum `infoControl.addTo(map);`:

\`\`\`javascript
// Load GeoJSON dari file lokal
fetch('path/ke/data/sulteng.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: function(feature) {
                return {
                    color: getRiskColor(feature.properties.risk),
                    weight: 2,
                    opacity: 0.8,
                    fillOpacity: 0.5
                };
            },
            onEachFeature: function(feature, layer) {
                layer.bindPopup(createPopupContent({
                    name: feature.properties.name,
                    description: feature.properties.description,
                    risk: feature.properties.risk,
                    image: feature.properties.image || 'images/default.jpg'
                }));
            }
        }).addTo(map);
    });
\`\`\`

### Opsi 2: Update Data Region

Edit `js/data.js` dan ganti `regionsData` dengan data dari QGIS Anda dalam format GeoJSON.

## 🎨 Kustomisasi Warna

Edit `css/styles.css` dan ubah warna di bagian ini:

\`\`\`css
.legend-color (tinggi): #ff6b6b /* Merah */
.legend-color (sedang): #ffa94d /* Oranye */
.legend-color (rendah): #ffd43b /* Kuning */
\`\`\`

## 🌐 Libraries yang Digunakan

- **Leaflet.js v1.9.4** - Mapping library
- **OpenStreetMap** - Tile provider gratis
- **CSS3** - Styling modern dengan grid dan flexbox
- **JavaScript ES6** - Vanilla JavaScript tanpa dependencies

## 🔧 Development

Untuk development lokal, Anda dapat menggunakan simple HTTP server:

\`\`\`bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
\`\`\`

Kemudian buka di browser: `http://localhost:8000`

## 📌 Tips Penggunaan

1. **Zoom**: Gunakan scroll mouse atau tombol +/- di pojok kanan
2. **Pan**: Drag peta dengan klik dan drag
3. **Klik Marker**: Zoom otomatis ke area dan buka popup
4. **Hover Marker**: Highlight marker untuk melihat informasi
5. **Mobile**: Swipe untuk pan, pinch untuk zoom

## 📊 Data Structure

Setiap region memiliki struktur:

\`\`\`javascript
{
    id: 1,
    name: "Nama Daerah",
    coords: [latitude, longitude],
    risk: "Tinggi|Sedang|Rendah",
    image: "path/ke/gambar",
    description: "Deskripsi detail...",
    population: "Jumlah populasi",
    infrastructure: "Info infrastruktur",
    facilities: "Fasilitas mitigasi"
}
\`\`\`

## ⚠️ Notes Penting

- File GeoJSON dari QGIS harus dalam format GeoJSON yang valid
- Coordinate system harus WGS84 (EPSG:4326)
- Ukuran file GeoJSON besar mungkin memerlukan optimisasi
- Semua gambar harus di-upload ke folder `images/`

## 📄 Lisensi

Data menggunakan OpenStreetMap (ODbL License)
Code: MIT License

---

**Last Updated**: November 2025
**Version**: 1.0
**Made with ❤️ for Sulawesi Tengah**
