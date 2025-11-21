// Menyimpan marker global untuk interaksi
let allMarkers = [];
let currentSelectedRegion = null;

// Fungsi untuk mendapatkan warna berdasarkan risiko
function getRiskColor(risk) {
    const colors = {
        "Tinggi": "#e74c3c",
        "Sedang": "#f39c12",
        "Rendah": "#27ae60"
    };
    return colors[risk] || "#95a5a6";
}

// Fungsi untuk mendapatkan radius marker berdasarkan risiko
function getMarkerRadius(risk) {
    const radii = {
        "Tinggi": 12,
        "Sedang": 10,
        "Rendah": 8
    };
    return radii[risk] || 8;
}

// Fungsi untuk mendapatkan class CSS berdasarkan risiko
function getRiskClass(risk) {
    const classes = {
        "Tinggi": "tinggi",
        "Sedang": "sedang",
        "Rendah": "rendah"
    };
    return classes[risk] || "unknown";
}

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

function showRegionPopup(region) {
    // Ambil deskripsi singkat (maksimal 150 karakter)
    const shortDescription = region.description.substring(0, 150) + (region.description.length > 150 ? '...' : '');

    const popupHTML = `
        <div style="font-family: Arial, sans-serif; width: 280px;">
            <!-- Header dengan nama dan risiko -->
            <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 12px;">
                <div style="flex: 1;">
                    <h3 style="margin: 0 0 5px 0; font-size: 1.2em; color: #333;">${region.name}</h3>
                    <span style="display: inline-block; padding: 4px 10px; background: ${getRiskColor(region.risk)}; color: white; border-radius: 4px; font-weight: bold; font-size: 0.85em;">${region.risk}</span>
                </div>
            </div>
            
            <!-- Deskripsi -->
            <div style="margin-bottom: 12px;">
                <div style="font-weight: bold; color: #333; margin-bottom: 5px; font-size: 0.95em;">Deskripsi</div>
                <p style="margin: 0; font-size: 0.85em; color: #666; line-height: 1.5;">${shortDescription}</p>
            </div>
            
            <!-- Statistik -->
            <div style="margin-bottom: 0;">
                <div style="font-weight: bold; color: #333; margin-bottom: 8px; font-size: 0.95em;">Statistik</div>
                <div style="font-size: 0.85em; color: #666; line-height: 1.8;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 1.2em;">👥</span>
                        <span>Populasi: ${region.population}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 1.2em;">🏫</span>
                        <span>${region.infrastructure}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 1.2em;">🛡️</span>
                        <span>${region.facilities}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('popup-content').innerHTML = popupHTML;
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    
    return popup;
}

function initializeRegionsList() {
    const regionsList = document.getElementById('regions-list');
    if (!regionsList) return;
    
    regionsData.forEach((region, index) => {
        const regionItem = document.createElement('div');
        regionItem.className = 'region-item';
        regionItem.id = `region-item-${region.id}`;
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
            
            // Display info di sidebar kanan
            displayRegionInfo(region);
            
            // Auto zoom ke lokasi
            if (typeof map !== 'undefined' && map) {
                const view = map.getView();
                view.animate({
                    center: ol.proj.fromLonLat([region.coords[1], region.coords[0]]),
                    zoom: 12,
                    duration: 1000
                });
            }
            
            // Tampilkan popup dengan deskripsi
            const popup = showRegionPopup(region);
            
            // Posisikan popup di tengah layar
            popup.style.left = 'calc(50% - 175px)';
            popup.style.top = '100px';
            
            // Highlight overlay label untuk region ini
            if (typeof highlightOverlay === 'function') highlightOverlay(region.id);
        });
        
        regionsList.appendChild(regionItem);
    });
}

// Inisialisasi daftar daerah
initializeRegionsList();

// Setup popup closer untuk QGIS popup
if (document.getElementById('popup-closer')) {
    document.getElementById('popup-closer').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('popup').style.display = 'none';
    });
}

// Tunggu peta QGIS dimuat, kemudian tambahkan popup interaksi
function setupQGISPopups() {
    if (typeof map === 'undefined' || !map) {
        setTimeout(setupQGISPopups, 500);
        return;
    }

    console.log('Setting up QGIS popups and interactions');

    // Setup event listener untuk klik pada peta QGIS
    map.on('click', function(evt) {
        let foundFeature = false;
        
        map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
            const featureName = feature.get('name') || feature.get('Name') || '';
            
            // Cari region yang sesuai dengan nama feature
            const matchingRegion = regionsData.find(region => 
                region.name.toLowerCase() === featureName.toLowerCase() ||
                featureName.toLowerCase().includes(region.name.toLowerCase()) ||
                region.name.toLowerCase().includes(featureName.toLowerCase())
            );
            
            if (matchingRegion) {
                foundFeature = true;
                
                // Update sidebar active state
                document.querySelectorAll('.region-item').forEach((item) => {
                    if (item.id === `region-item-${matchingRegion.id}`) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
                
                // Display info di sidebar kanan
                displayRegionInfo(matchingRegion);
                
                // Auto zoom ke lokasi
                const view = map.getView();
                view.animate({
                    center: ol.proj.fromLonLat([matchingRegion.coords[1], matchingRegion.coords[0]]),
                    zoom: 12,
                    duration: 800
                });
                
                // Tampilkan popup dengan deskripsi
                const popup = showRegionPopup(matchingRegion);
                
                // Hitung posisi popup di pixel klik
                const mapContainer = document.querySelector('.map-container');
                if (mapContainer) {
                    const containerRect = mapContainer.getBoundingClientRect();
                    popup.style.left = (evt.pixel[0] + containerRect.left - 175) + 'px';
                    popup.style.top = (evt.pixel[1] + containerRect.top + 10) + 'px';
                } else {
                    popup.style.left = (evt.pixel[0] - 175) + 'px';
                    popup.style.top = (evt.pixel[1] + 10) + 'px';
                }
                // Highlight overlay label untuk region ini
                if (typeof highlightOverlay === 'function') highlightOverlay(matchingRegion.id);
                
                return true;
            }
        });
        
        // Jika tidak menemukan feature yang cocok, coba cek semua daerah
        if (!foundFeature) {
            // Ini adalah fallback untuk menampilkan popup untuk semua daerah
            // bahkan jika feature di QGIS tidak memiliki nama yang sesuai
            regionsData.forEach(region => {
                // Trigger popup ketika user klik di area daerah tersebut
                // Opsi lain: gunakan coordinate proximity detection
            });
        }
    });

    // Hover effect pada fitur
    map.on('pointermove', function(evt) {
        let hasFeature = false;
        
        map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
            hasFeature = true;
            return true;
        });
        
        map.getTargetElement().style.cursor = hasFeature ? 'pointer' : 'default';
    });

    console.log('QGIS popups and interactions initialized successfully');
}

// Mulai setup popup setelah document siap
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(setupQGISPopups, 1500);
});

// ====== Overlay labels (deskripsi singkat tampil di peta) ======
const regionOverlays = [];

function createRegionOverlays() {
    if (typeof map === 'undefined' || !map) return;

    regionsData.forEach(region => {
        const shortDescription = region.description.substring(0, 80) + (region.description.length > 80 ? '...' : '');
        const el = document.createElement('div');
        el.className = 'map-label';
        el.innerHTML = `
            <div class="map-label-card" data-region-id="${region.id}">
                <div class="map-label-title">${region.name}</div>
                <div class="map-label-desc">${shortDescription}</div>
            </div>
        `;

        const overlay = new ol.Overlay({
            element: el,
            positioning: 'bottom-center',
            stopEvent: false
        });

        // Set position using lon, lat order
        overlay.setPosition(ol.proj.fromLonLat([region.coords[1], region.coords[0]]));
        map.addOverlay(overlay);

        regionOverlays.push({ id: region.id, overlay, element: el });
    });

    // Clicking a label should select the region (sync with sidebar)
    regionOverlays.forEach(item => {
        item.element.addEventListener('click', function(e) {
            e.stopPropagation();
            const rid = item.id;
            const region = regionsData.find(r => r.id === rid);
            if (region) {
                // Trigger the same behavior as clicking the sidebar item
                const sidebarItem = document.getElementById(`region-item-${rid}`);
                if (sidebarItem) sidebarItem.click();
            }
        });
    });
}

function highlightOverlay(regionId) {
    // remove active from all
    regionOverlays.forEach(item => {
        const card = item.element.querySelector('.map-label-card');
        if (card) card.classList.remove('active');
    });

    const found = regionOverlays.find(i => i.id === regionId);
    if (found) {
        const card = found.element.querySelector('.map-label-card');
        if (card) {
            card.classList.add('active');
            // ensure visible (bring to front briefly)
            found.element.style.zIndex = 2000;
            setTimeout(() => { found.element.style.zIndex = ''; }, 2000);
        }
    }
}

// Create overlays after map is ready
document.addEventListener('DOMContentLoaded', function() {
    // create after small delay to ensure qgis layers loaded
    setTimeout(() => {
        if (typeof map !== 'undefined' && map) {
            createRegionOverlays();
        }
    }, 1600);
});
