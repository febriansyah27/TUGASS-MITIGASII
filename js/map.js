// Menyimpan marker global untuk interaksi
let allMarkers = [];
let currentSelectedRegion = null;

const map = L.map('map').setView([-1.4, 120.7], 8);

// Tambah Tile Layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

// Fungsi untuk membuat popup content dengan gambar
function createPopupContent(region) {
    const popupHTML = `
        <div class="popup-content">
            <div class="popup-header">
                <img src="${region.image}" alt="${region.name}" class="popup-image" onerror="this.src='https://via.placeholder.com/80?text=${region.name.replace(/\s+/g, '+')}'">
                <div class="popup-title">
                    <h3>${region.name}</h3>
                    <span class="popup-risk ${getRiskClass(region.risk)}">
                        ${region.risk}
                    </span>
                </div>
            </div>
            
            <hr class="popup-divider">
            
            <div class="popup-section">
                <span class="popup-label">Deskripsi</span>
                <p class="popup-text">${region.description}</p>
            </div>
            
            <div class="popup-section">
                <span class="popup-label">Statistik</span>
                <p class="popup-stat">Populasi: ${region.population}</p>
                <p class="popup-stat">${region.infrastructure}</p>
                <p class="popup-stat">${region.facilities}</p>
            </div>
        </div>
    `;
    return popupHTML;
}

function displayRegionInfo(region) {
    currentSelectedRegion = region;
    
    const earthquakeHTML = region.earthquakes.map(eq => `
        <div class="earthquake-item">
            <div class="earthquake-date">${eq.date}</div>
            <div class="earthquake-stat"><strong>Magnitudo:</strong> ${eq.magnitude}</div>
            <div class="earthquake-stat"><strong>Kedalaman:</strong> ${eq.depth}</div>
            <div class="earthquake-stat"><strong>Korban Jiwa:</strong> ${eq.deaths}</div>
            <div class="earthquake-stat"><strong>Luka-Luka:</strong> ${eq.injuries}</div>
            <div class="earthquake-damage"><strong>Kerugian:</strong> ${eq.damage}</div>
        </div>
    `).join('');

    const infoHTML = `
        <div class="region-detail-header">
            <img src="${region.image}" alt="${region.name}" class="region-detail-image" onerror="this.src='https://via.placeholder.com/60?text=${region.name.replace(/\s+/g, '+')}'">
            <div class="region-detail-title">
                <h4>${region.name}</h4>
                <span class="region-detail-risk ${getRiskClass(region.risk)}">${region.risk}</span>
            </div>
        </div>

        <div class="region-detail-section">
            <div class="region-detail-section-label">Deskripsi</div>
            <div class="region-detail-section-value">${region.description}</div>
        </div>

        <div class="region-detail-section">
            <div class="region-detail-section-label">Populasi</div>
            <div class="region-detail-section-value">${region.population}</div>
        </div>

        <div class="region-detail-section">
            <div class="region-detail-section-label">Riwayat Gempa</div>
            <div class="region-detail-section-value">
                ${earthquakeHTML}
            </div>
        </div>
    `;

    document.getElementById('region-info').innerHTML = infoHTML;
}

function initializeRegionsList() {
    const regionsList = document.getElementById('regions-list');
    
    regionsData.forEach(region => {
        const regionItem = document.createElement('div');
        regionItem.className = 'region-item';
        regionItem.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: space-between;">
                <span>${region.name}</span>
                <span class="region-item-risk ${getRiskClass(region.risk)}">${region.risk}</span>
            </div>
        `;
        
        regionItem.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.region-item').forEach(item => item.classList.remove('active'));
            regionItem.classList.add('active');
            
            // Display info
            displayRegionInfo(region);
            
            // Zoom ke lokasi
            map.setView(region.coords, 13);
            
            // Highlight marker
            allMarkers.forEach(marker => {
                if (marker.regionId === region.id) {
                    marker.setStyle({
                        weight: 5,
                        radius: getMarkerRadius(region.risk) + 2,
                        fillOpacity: 0.9
                    });
                    marker.bringToFront();
                    setTimeout(() => marker.openPopup(), 300);
                } else {
                    marker.setStyle({
                        weight: 3,
                        radius: getMarkerRadius(marker.region.risk),
                        fillOpacity: 0.7
                    });
                }
            });
        });
        
        regionsList.appendChild(regionItem);
    });
}

function createMarker(region) {
    const marker = L.circleMarker(region.coords, {
        radius: getMarkerRadius(region.risk),
        fillColor: getRiskColor(region.risk),
        color: '#fff',
        weight: 3,
        opacity: 0.8,
        fillOpacity: 0.7
    }).addTo(map);

    marker.regionId = region.id;
    marker.region = region;
    allMarkers.push(marker);

    // Bind popup dengan konten yang sudah dibuat
    marker.bindPopup(createPopupContent(region), {
        maxWidth: 350,
        className: 'custom-popup'
    });

    // Event: Klik marker
    marker.on('click', function() {
        // Update active state di sidebar
        document.querySelectorAll('.region-item').forEach((item, idx) => {
            if (regionsData[idx].id === region.id) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        map.setView(region.coords, 13);
        displayRegionInfo(region);
        setTimeout(() => this.openPopup(), 300);
    });

    // Event: Hover effect
    marker.on('mouseover', function() {
        this.setStyle({
            weight: 5,
            radius: getMarkerRadius(region.risk) + 2,
            fillOpacity: 0.9
        });
        this.bringToFront();
    });

    marker.on('mouseout', function() {
        this.setStyle({
            weight: 3,
            radius: getMarkerRadius(region.risk),
            fillOpacity: 0.7
        });
    });
}

// Tambah marker untuk setiap daerah dari data.js
regionsData.forEach(region => {
    createMarker(region);
});

function loadGeoJsonFromQGIS(geojsonPath) {
    console.log("[v0] Loading GeoJSON dari QGIS: " + geojsonPath);
    
    fetch(geojsonPath)
        .then(response => response.json())
        .then(data => {
            console.log("[v0] GeoJSON loaded successfully, features: " + data.features.length);
            
            // Bersihkan marker lama
            allMarkers.forEach(marker => map.removeLayer(marker));
            allMarkers = [];
            
            // Process setiap feature dari GeoJSON
            data.features.forEach(feature => {
                const props = feature.properties;
                const coords = feature.geometry.coordinates;
                
                // Cari region data yang matching
                let regionData = regionsData.find(r => 
                    r.name.toLowerCase() === props.name.toLowerCase()
                );
                
                // Jika tidak ada, buat object baru dari GeoJSON properties
                if (!regionData) {
                    regionData = {
                        id: regionsData.length + 1,
                        name: props.name || 'Unknown',
                        coords: [coords[1], coords[0]], // Convert dari [lng, lat] ke [lat, lng]
                        risk: props.risk || 'Sedang',
                        image: props.image || 'images/placeholder.jpg',
                        description: props.description || 'Tidak ada deskripsi',
                        population: props.population || '-',
                        infrastructure: props.infrastructure || '-',
                        facilities: props.facilities || '-',
                        earthquakes: props.earthquakes || [{
                            date: 'Tidak ada data',
                            magnitude: '-',
                            depth: '-',
                            deaths: '0',
                            injuries: '0',
                            damage: 'Tidak ada data'
                        }]
                    };
                } else {
                    // Update coords dari GeoJSON jika berbeda
                    regionData.coords = [coords[1], coords[0]];
                }
                
                // Tambah marker baru
                createMarker(regionData);
            });
            
            console.log("[v0] GeoJSON markers created: " + allMarkers.length);
            
            // Re-inisialisasi regions list
            initializeRegionsList();
        })
        .catch(error => {
            console.error("[v0] Error loading GeoJSON:", error);
            console.log("[v0] Menggunakan data default dari data.js");
            
            // Jika error, gunakan data default yang sudah ada
            initializeRegionsList();
        });
}

// Uncomment baris di bawah ini untuk load GeoJSON dari QGIS
// Pastikan file GeoJSON sudah ada di path yang benar!
// loadGeoJsonFromQGIS('data/sulteng.geojson');

// Jika tidak load GeoJSON, gunakan data default dari data.js
initializeRegionsList();

// Tambah info control untuk zoom level
const infoControl = L.control();
infoControl.onAdd = function(map) {
    const div = L.DomUtil.create('div', 'info');
    div.innerHTML = '<strong>Zoom Level:</strong> ' + map.getZoom();
    map.on('zoomend', () => {
        div.innerHTML = '<strong>Zoom Level:</strong> ' + map.getZoom();
    });
    div.style.padding = '10px';
    div.style.background = 'rgba(255,255,255,0.95)';
    div.style.borderRadius = '5px';
    div.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    return div;
};
infoControl.addTo(map);
