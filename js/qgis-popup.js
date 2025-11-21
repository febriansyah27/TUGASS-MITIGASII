// Integrasi Popup Data dengan Peta QGIS
// File ini menambahkan popup deskripsi dari data.js ke peta QGIS

// Fungsi untuk mendapatkan warna berdasarkan risiko
function getRiskColor(risk) {
    const colors = {
        "Tinggi": "#e74c3c",
        "Sedang": "#f39c12",
        "Rendah": "#27ae60"
    };
    return colors[risk] || "#95a5a6";
}

// Fungsi untuk mendapatkan class CSS berdasarkan risiko
function getRiskClass(risk) {
    const classes = {
        "Tinggi": "risk-high",
        "Sedang": "risk-medium",
        "Rendah": "risk-low"
    };
    return classes[risk] || "risk-unknown";
}

// Fungsi untuk membuat konten popup dengan data deskripsi
function createRegionPopupContent(region) {
    const earthquakeHTML = region.earthquakes.map(eq => `
        <div style="margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid #ddd;">
            <div style="font-weight: bold; color: #333;">${eq.date}</div>
            <div style="font-size: 0.9em; color: #666;">
                <div>Magnitudo: ${eq.magnitude}</div>
                <div>Kedalaman: ${eq.depth}</div>
                <div>Korban Jiwa: ${eq.deaths}</div>
                <div>Luka-Luka: ${eq.injuries}</div>
                <div style="margin-top: 5px; color: #e74c3c;">${eq.damage}</div>
            </div>
        </div>
    `).join('');

    const popupHTML = `
        <div style="font-family: Arial, sans-serif; max-width: 350px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px; border-radius: 4px 4px 0 0; margin-bottom: 12px;">
                <h3 style="margin: 0 0 5px 0; font-size: 1.3em;">${region.name}</h3>
                <span style="display: inline-block; padding: 4px 8px; background: rgba(255,255,255,0.3); border-radius: 3px; font-weight: bold; font-size: 0.9em;">Risiko: ${region.risk}</span>
            </div>
            
            <div style="padding: 0 12px;">
                <div style="margin-bottom: 12px;">
                    <div style="font-weight: bold; color: #667eea; margin-bottom: 5px; font-size: 0.95em;">DESKRIPSI</div>
                    <p style="margin: 0; font-size: 0.9em; color: #555; line-height: 1.4;">${region.description}</p>
                </div>
                
                <div style="margin-bottom: 12px;">
                    <div style="font-weight: bold; color: #667eea; margin-bottom: 5px; font-size: 0.95em;">STATISTIK</div>
                    <div style="font-size: 0.9em; color: #666; line-height: 1.5;">
                        <div><strong>Populasi:</strong> ${region.population}</div>
                        <div><strong>Infrastruktur:</strong> ${region.infrastructure}</div>
                        <div><strong>Fasilitas:</strong> ${region.facilities}</div>
                    </div>
                </div>
                
                <div style="margin-bottom: 12px;">
                    <div style="font-weight: bold; color: #667eea; margin-bottom: 8px; font-size: 0.95em;">RIWAYAT GEMPA</div>
                    <div style="font-size: 0.85em; max-height: 250px; overflow-y: auto;">
                        ${earthquakeHTML}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return popupHTML;
}

// Fungsi untuk menambahkan popup ke fitur pada peta QGIS
function addPopupsToFeatures() {
    // Tunggu hingga peta dan layer sudah dimuat
    if (typeof map === 'undefined' || !map) {
        setTimeout(addPopupsToFeatures, 500);
        return;
    }

    // Iterasi melalui semua layer pada peta
    map.getLayers().forEach(layer => {
        if (layer.get('type') === 'base') return;
        
        // Cek jika layer memiliki fitur (feature collection)
        if (layer.getSource && layer.getSource() instanceof ol.source.Vector) {
            const features = layer.getSource().getFeatures();
            
            features.forEach(feature => {
                // Cek nama fitur untuk menemukan wilayah yang sesuai
                const featureName = feature.get('name') || feature.get('Name') || '';
                
                // Cari region yang sesuai dalam data
                const matchingRegion = regionsData.find(region => 
                    region.name.toLowerCase() === featureName.toLowerCase() ||
                    featureName.toLowerCase().includes(region.name.toLowerCase())
                );
                
                if (matchingRegion) {
                    feature.set('regionData', matchingRegion);
                }
            });
        }
    });

    // Setup event listener untuk klik fitur
    map.on('click', function(evt) {
        let foundFeature = false;
        
        map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
            if (feature.get('regionData')) {
                foundFeature = true;
                const regionData = feature.get('regionData');
                const popupContent = createRegionPopupContent(regionData);
                
                // Tampilkan popup
                document.getElementById('popup-content').innerHTML = popupContent;
                const popup = document.getElementById('popup');
                popup.style.display = 'block';
                
                // Posisikan popup di lokasi klik
                const coordinates = evt.coordinate;
                const popupOffset = [0, -15];
                popup.style.left = (evt.pixel[0] + popupOffset[0]) + 'px';
                popup.style.top = (evt.pixel[1] + popupOffset[1]) + 'px';
                
                return true;
            }
        });
        
        // Tutup popup jika klik di area kosong
        if (!foundFeature) {
            document.getElementById('popup').style.display = 'none';
        }
    });
}

// Inisialisasi popup saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addPopupsToFeatures, 1000);
});

// Setup event listener untuk popup closer
document.getElementById('popup-closer').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
