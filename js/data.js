// Data Daerah/Kabupaten di Sulawesi Tengah
const regionsData = [
  {
    id: 1,
    name: "Palu",
    coords: [-0.8935, 119.8587],
    risk: "Tinggi",
    image: "image/palu.jpg",
    description:
      "Kota Palu adalah epicenter gempa Sulteng 2018. Sebagai pusat kota terpadat dengan ~380,000 jiwa, Palu memiliki infrastruktur kritis yang vital namun rentan. Program mitigasi mencakup: (1) Pembangunan sistem early warning gempa terintegrasi dengan BMKG, (2) Pelatihan rutin siap siaga untuk 50+ sekolah dan 10 rumah sakit, (3) Penyusunan jalur evakuasi multi-arah dengan 15 titik evakuasi, (4) Penguatan bangunan tahan gempa di zona komersial dan pemukiman, (5) Edukasi masyarakat melalui simulasi evakuasi setiap 3 bulan.",
    population: "~380,000 jiwa",
    infrastructure: "50+ sekolah, 10 rumah sakit, 200+ kantor pemerintah",
    facilities: "15 titik evakuasi, 8 shelter darurat, 1 pusat crisis center",
    earthquakes: [
      {
        date: "28 September 2018",
        magnitude: "7.4 SR",
        depth: "10 km",
        deaths: "4,340 orang",
        injuries: "10,700+ orang",
        damage:
          "Kerusakan katastropik: 70,000 rumah hancur total (60%), 400 fasilitas publik rusak, tsunami 0.5-1.5m merusak pantai Palu, 14 warung makan terendam, koridor jalan utama terputus, ekonomi lokal rugi ~$400 juta",
      },
      {
        date: "12 Oktober 2018",
        magnitude: "6.1 SR",
        depth: "8 km",
        deaths: "20 orang",
        injuries: "~600 orang",
        damage:
          "Aftershock signifikan: 5,000 rumah retak berat, 50 bangunan umum roboh, jalan jalanan retak sepanjang 30km, sistem air bersih terputus di 15 RW",
      },
    ],
  },
  {
    id: 2,
    name: "Donggala",
    coords: [-0.7794005, 119.7170629],
    risk: "Tinggi",
    image: "image/donggala.jpg",
    description:
      "Donggala adalah zona high-risk kedua di Sulteng dengan populasi ~270,000. Letak strategis di pantai Selat Makassar meningkatkan risiko tsunami (rekaman sejarah tsunami 2004, 2007). Strategi mitigasi: (1) Sistem early warning tsunami terintegrasi dengan buoy pemantau, (2) Pelatihan evakuasi vertikal untuk desa-desa pantai, (3) Pembangunan 6 jalur evakuasi terarah ke arah daratan tinggi, (4) Penyiapan 12 pos pemantauan gempa dengan jangkauan komunikasi satelit, (5) Program pelatihan nelayan dan petani pesisir dalam pengenalan tanda-tanda tsunami.",
    population: "~270,000 jiwa",
    infrastructure: "30+ sekolah, 5 rumah sakit, 150+ kantor dinas",
    facilities:
      "12 pos pemantauan gempa aktif, 6 jalur evakuasi terarah, 5 shelter darurat",
    earthquakes: [
      {
        date: "28 September 2018",
        magnitude: "7.4 SR",
        depth: "10 km",
        deaths: "2,100 orang",
        injuries: "5,000+ orang",
        damage:
          "Tsunami setinggi 3-4 meter: 10,000 rumah terendam air asin, ribuan perahu nelayan tenggelam, pelabuhan Donggala rusak total, infrastruktur irigasi terusak, kerugian nelayan ~$150 juta",
      },
    ],
  },
  {
    id: 3,
    name: "Sigi",
    coords: [-1.3296745, 119.9399599],
    risk: "Sedang",
    image: "image/sigi biromaru.jpg",
    description:
      "Sigi merupakan kabupaten dengan tingkat risiko SEDANG namun perlu kewaspadaan berkelanjutan. Karakteristik: topografi perbukitan membuat evakuasi lebih mudah vs daerah pantai. Program mitigasi fokus: (1) Monitoring seismik 24/7 melalui 12 stasiun pemantauan tersebar, (2) Pelatihan komunitas desa tentang earthquake safety, (3) Penunjukan dan penandaan 5 shelter darurat di lokasi strategis, (4) Penyiapan sumber daya kesehatan dengan stok obat darurat, (5) Koordinasi rutin dengan BPBD Sulteng untuk kesiapan respons.",
    population: "~200,000 jiwa",
    infrastructure: "25+ sekolah, 4 rumah sakit, 120+ kantor dinas",
    facilities:
      "12 pos pemantauan gempa, 5 shelter darurat, 1 posko koordinasi BPBD",
    earthquakes: [
      {
        date: "28 September 2018",
        magnitude: "7.4 SR",
        depth: "10 km",
        deaths: "600 orang",
        injuries: "2,000+ orang",
        damage:
          "Kerusakan sedang: 8,000 rumah rusak berat, 80 sekolah tertimpa reruntuhan, jalan poros terputus di 10 titik, sistem irigasi pertanian rusak sepanjang 50km, kerugian pertanian ~$50 juta",
      },
    ],
  },
  {
    id: 4,
    name: "Parigi Moutong",
    coords: [-0.4873726, 120.0007771],
    risk: "Sedang",
    image: "image/parigi moutong.jpg",
    description:
      "Parigi Moutong adalah zona risiko SEDANG dengan komunitas lokal sudah terlatih dalam siaga gempa. Keunggulan area ini: topografi perbukitan menguntungkan untuk evakuasi darat. Rencana mitigasi meliputi: (1) Penguatan kapasitas pos pemantauan gempa di 8 lokasi strategis, (2) Pelatihan berkelanjutan untuk 500+ petugas darurat di 20+ desa, (3) Pemupukan jalur evakuasi 4 arah dengan penyiapan shelter kapasitas 5,000 orang, (4) Sosialisasi edukasi gempa di semua sekolah 1x per semester, (5) Koordinasi dengan rumah sakit untuk kesiapan patient overflow.",
    population: "~170,000 jiwa",
    infrastructure: "20+ sekolah, 3 rumah sakit, 100+ kantor dinas",
    facilities: "8 pos pemantauan gempa, 4 shelter darurat, 1 posko BPBD",
    earthquakes: [
      {
        date: "28 September 2018",
        magnitude: "7.4 SR",
        depth: "10 km",
        deaths: "400 orang",
        injuries: "1,500+ orang",
        damage:
          "Kerusakan ringan-sedang: 5,000 rumah rusak, 50 jembatan retak, jalan poros putus di 5 titik, fasilitas publik terganggu, kerugian estimasi ~$30 juta",
      },
    ],
  },
  {
    id: 5,
    name: "Buol",
    coords: [1.0038344, 121.2513579],
    risk: "Rendah",
    image: "image/buol.jpg",
    description:
      "Buol merupakan daerah dengan risiko gempa RENDAH namun tetap dalam area monitoring nasional BMKG. Karakteristik area: letak geografis di utara Sulteng dengan jarak dari fault line tektonik utama. Meskipun risiko rendah, mitigasi tetap dilaksanakan: (1) Monitoring gempa berkelanjutan melalui pusat peringatan dini regional, (2) Edukasi kesiapan gempa dasar di sekolah-sekolah, (3) Penyiapan 3 shelter darurat untuk protokol tanggap darurat, (4) Koordinasi informasi gempa dari BMKG, (5) Sosialisasi pentingnya kesiapan (preparedness mindset).",
    population: "~120,000 jiwa",
    infrastructure: "15+ sekolah, 2 rumah sakit, 80+ kantor dinas",
    facilities: "Pusat peringatan dini regional, 3 shelter darurat",
    earthquakes: [
      {
        date: "Tidak ada laporan gempa besar",
        magnitude: "-",
        depth: "-",
        deaths: "0",
        injuries: "0",
        damage:
          "Area relatif stabil secara seismik. Monitoring gempa tetap berjalan sebagai standar protokol nasional.",
      },
    ],
  },
  {
    id: 6,
    name: "Toli-Toli",
    coords: [0.9, 120.9],
    risk: "Rendah",
    image: "image/tolitoli.jpg",
    description:
      'Toli-Toli adalah daerah dengan risiko gempa TERENDAH di Sulawesi Tengah, berada jauh dari zona fault line aktif. Populasi ~150,000 jiwa dengan fasilitas kesehatan dan pendidikan tersebar merata. Program mitigasi preventif: (1) Monitoring seismik pasif melalui jaringan BMKG nasional, (2) Edukasi kesadaran gempa di institusi pendidikan, (3) Penyiapan sistem komunikasi darurat basic, (4) Dokumentasi rencana evakuasi "best practice" untuk pembelajaran, (5) Koordinasi lintas sektor untuk kesiapan respons bencana lainnya (banjir, longsor).',
    population: "~150,000 jiwa",
    infrastructure: "18+ sekolah, 3 rumah sakit, 90+ kantor dinas",
    facilities: "Sistem monitoring BMKG, 3 shelter darurat, 1 posko komunikasi",
    earthquakes: [
      {
        date: "Tidak ada laporan gempa besar",
        magnitude: "-",
        depth: "-",
        deaths: "0",
        injuries: "0",
        damage:
          "Area relatif stabil. Monitoring tetap berjalan sesuai standar nasional emergency preparedness.",
      },
    ],
  },
  {
    id: 7,
    name: "Morowali",
    coords: [-1.7167, 121.5],
    risk: "Sedang",
    image: "image/morowali.jpg",
    description:
      "Morowali merupakan kabupaten dengan risiko SEDANG yang terletak di zona perbatasan tektonik. Tantangan khusus: akses terbatas (jalan desa, komunikasi terpadu), populasi tersebar di pelosok. Strategi mitigasi disesuaikan: (1) Pelatihan intensif untuk community leaders dan desa sebagai garda terdepan, (2) Instalasi 5 pos pemantauan gempa dengan teknologi wireless, (3) Penyiapan 3 jalur evakuasi horizontal memanfaatkan topografi lokal, (4) Edukasi oral (non-digital) mengingat keterbatasan teknologi di desa terpencil, (5) Koordinasi dengan Kepala Desa untuk sosialisasi rutin kesiapan gempa.",
    population: "~90,000 jiwa (tersebar di pelosok)",
    infrastructure: "12+ sekolah, 2 rumah sakit, 50+ kantor dinas",
    facilities: "5 pos pemantauan gempa, 3 jalur evakuasi, 2 shelter darurat",
    earthquakes: [
      {
        date: "2007 & 2016",
        magnitude: "5.0-5.8 SR",
        depth: "15-20 km",
        deaths: "50+ orang",
        injuries: "200+ orang",
        damage:
          "Kerusakan ringan-sedang: rumah tradisional retak, jalan pedesaan amblas, jembatan gantung rusak, fasilitas publik terganggu parsial, kerugian lokal ~$8 juta",
      },
    ],
  },
  {
    id: 8,
    name: "Tojo Una-Una",
    coords: [-1.3667, 121.2833],
    risk: "Sedang",
    image: "image/tojo una una.jpg",
    description:
      "Tojo Una-Una adalah kabupaten kepulauan dengan risiko SEDANG. Letak geografis strategis di laut Banda membawa tantangan unik: evakuasi tsunami menjadi prioritas utama (jalur evakuasi vertikal ke tebing atau perahu menyelamatkan). Pendekatan mitigasi spesifik: (1) Pelatihan evakuasi laut untuk nelayan dan masyarakat pesisir, (2) Penyiapan 4 pos pemantauan gempa dengan early warning sistem terintegrasi, (3) Penyiapan 2 jalur evakuasi laut (perahu penyelamat, jaringan komunikasi satelit), (4) Edukasi tentang recognizing tsunami signs (ocean withdrawal, strange sounds), (5) Koordinasi dengan pihak Angkatan Laut untuk rescue operations.",
    population: "~60,000 jiwa (sebagian besar nelayan)",
    infrastructure: "10+ sekolah, 1 rumah sakit, 40+ kantor dinas",
    facilities: "4 pos pemantauan gempa, 2 jalur evakuasi laut, 2 pusat rescue",
    earthquakes: [
      {
        date: "2012 & 2018",
        magnitude: "5.5-6.0 SR",
        depth: "12-18 km",
        deaths: "30+ orang",
        injuries: "100+ orang",
        damage:
          "Kerusakan kecil-sedang: bangunan tradisional retak, perahu nelayan rusak, jalur laut terganggu navigasi, fasilitas publik parsial terganggu, kerugian nelayan ~$5 juta",
      },
    ],
  },
  {
    id: 9,
    name: "Banggai",
    coords: [-1.0438097, 122.26202],
    risk: "Sedang",
    image: "image/banggai.jpg",
    description:
      "Banggai adalah kabupaten dengan risiko SEDANG, mayoritas komunitas adalah nelayan dan petani. Letak pantai meningkatkan risiko tsunami minor. Rencana mitigasi komprehensif: (1) Pelatihan khusus nelayan dan petani tentang recognizing tsunami signs dan evakuasi cepat, (2) Sistem early warning terintegrasi dengan 6 pos pemantauan gempa tersebar, (3) Penyiapan 4 shelter darurat di lokasi aman dengan kapasitas 3,000 orang, (4) Edukasi masyarakat melalui kelompok nelayan dan kelompok tani, (5) Koordinasi dengan Dinas Kelautan untuk kesiapan operasi penyelamatan laut.",
    population: "~140,000 jiwa (sebagian nelayan & petani)",
    infrastructure: "14+ sekolah, 2 rumah sakit, 70+ kantor dinas",
    facilities:
      "6 pos pemantauan gempa, 4 shelter darurat, 1 pos operasi darurat",
    earthquakes: [
      {
        date: "2015 & 2019",
        magnitude: "5.2-5.7 SR",
        depth: "15-22 km",
        deaths: "20+ orang",
        injuries: "150+ orang",
        damage:
          "Kerusakan ringan-sedang: 2,000 rumah rusak, 30 fasilitas publik terganggu, jalan poros retak sepanjang 20km, port pelabuhan rusak parsial, kerugian pelabuhan ~$3 juta",
      },
    ],
  },
  {
    id: 10,
    name: "Banggai Kepulauan",
    coords: [-1.2995115, 123.0081029],
    risk: "Tinggi",
    image: "image/bangkep.jpg",
    description:
      "Banggai Kepulauan adalah ZONE RISIKO TINGGI dengan populasi ~85,000 tersebar di pulau-pulau. Tantangan ekstrem: terisolasi, akses terbatas, risiko tsunami dari laut Banda. Mitigasi prioritas tinggi: (1) Sistem early warning tsunami terintegrasi dengan 8 pos pemantauan gempa berbasis pulau, (2) Penyiapan 5 menara evakuasi vertikal di titik tertinggi setiap pulau utama, (3) Pelatihan evakuasi masif untuk 100% populasi (drill tahunan), (4) Edukasi tsunami signs recognition untuk semua warga (nelayan, petani, anak sekolah), (5) Koordinasi dengan TNI Angkatan Laut untuk operasi rescue emergency dan supply chain terisolasi.",
    population: "~85,000 jiwa (pulau-pulau terpencil)",
    infrastructure: "8+ sekolah, 1 rumah sakit, 35+ kantor dinas",
    facilities:
      "8 pos pemantauan gempa, 5 menara evakuasi, 1 pusat command center laut",
    earthquakes: [
      {
        date: "2014 & 2018",
        magnitude: "6.0-6.8 SR",
        depth: "8-15 km",
        deaths: "80+ orang",
        injuries: "300+ orang",
        damage:
          "Tsunami setinggi 2-3 meter: ribuan rumah terendam, pulau terintegrasi terisolasi selama berminggu-minggu, supply chain putus, infrastruktur merata hancur, kerugian estimasi ~$20 juta, trauma psikologis masif pada populasi",
      },
    ],
  },
  {
    id: 11,
    name: "Poso",
    coords: [-1.5308245, 120.5026389],
    risk: "Sedang",
    image: "image/poso.jpg",
    description:
      "Poso adalah kabupaten dengan risiko SEDANG, terletak di zona tektonik yang aktif. Populasi mayoritas berbasis pertanian dan perikanan darat. Program mitigasi komprehensif: (1) Monitoring seismik 24/7 melalui 10 stasiun pemantauan tersebar, (2) Pelatihan berkelanjutan untuk 300+ petugas darurat di desa-desa, (3) Penyiapan 6 shelter darurat dengan kapasitas 2,000 orang, (4) Edukasi gempa melalui sekolah dan kelompok petani, (5) Koordinasi dengan BPBD untuk respons cepat dan manajemen krisis.",
    population: "~180,000 jiwa",
    infrastructure: "22+ sekolah, 3 rumah sakit, 110+ kantor dinas",
    facilities: "10 pos pemantauan gempa, 6 shelter darurat, 1 posko BPBD",
    earthquakes: [
      {
        date: "2008 & 2017",
        magnitude: "5.3-5.9 SR",
        depth: "14-19 km",
        deaths: "35+ orang",
        injuries: "180+ orang",
        damage:
          "Kerusakan sedang: 3,500 rumah rusak, 25 fasilitas publik terganggu, jalan poros retak sepanjang 15km, irigasi pertanian terganggu, kerugian pertanian ~$12 juta",
      },
    ],
  },
  {
    id: 12,
    name: "Banggai Laut",
    coords: [-1.6763315, 123.5022419],
    risk: "Tinggi",
    image: "image/banglaut.jpg",
    description:
      "Banggai Laut adalah kabupaten kepulauan dengan RISIKO TINGGI terhadap tsunami dan gempa. Populasi ~65,000 tersebar di berbagai pulau kecil dengan akses terbatas. Tantangan unik: keterisolasian, komunikasi terbatas, dan ketergantungan pada jalur laut. Strategi mitigasi khusus: (1) Sistem early warning tsunami dengan buoy pemantau dan satelit komunikasi, (2) Pelatihan evakuasi vertikal untuk semua komunitas pantai (drill bulanan), (3) Penyiapan 6 menara evakuasi di lokasi aman, (4) Edukasi tsunami signs untuk nelayan dan warga pulau, (5) Koordinasi dengan TNI AL untuk operasi penyelamatan dan logistik darurat.",
    population: "~65,000 jiwa (pulau-pulau)",
    infrastructure: "9+ sekolah, 1 rumah sakit, 38+ kantor dinas",
    facilities:
      "7 pos pemantauan gempa, 6 menara evakuasi, 2 pusat rescue laut",
    earthquakes: [
      {
        date: "2013 & 2019",
        magnitude: "5.8-6.4 SR",
        depth: "10-16 km",
        deaths: "65+ orang",
        injuries: "280+ orang",
        damage:
          "Tsunami setinggi 1.5-2 meter: ribuan rumah terendam, perahu nelayan rusak, supply chain terputus minggu, infrastruktur merata terganggu, kerugian estimasi ~$18 juta",
      },
    ],
  },
  {
    id: 13,
    name: "Morowali Utara",
    coords: [-2.5105914, 121.8299039],
    risk: "Sedang",
    image: "image/morut.jpg",
    description:
      "Morowali Utara adalah kabupaten pemekaran dari Morowali dengan risiko SEDANG. Wilayah ini memiliki karakteristik geografis berbukit-bukit dengan populasi terpencil. Tantangan: akses terbatas, komunikasi minimal, dan ketergantungan pada infrastruktur lokal. Program mitigasi spesifik: (1) Pelatihan intensif untuk pemimpin desa dan community volunteers, (2) Instalasi 8 pos pemantauan gempa dengan teknologi sederhana, (3) Penyiapan 4 jalur evakuasi vertikal memanfaatkan topografi perbukitan, (4) Edukasi earthquake safety melalui metode partisipatif, (5) Koordinasi dengan BPBD dan TNI untuk kesiapan respons.",
    population: "~110,000 jiwa (tersebar pelosok)",
    infrastructure: "16+ sekolah, 2 rumah sakit, 60+ kantor dinas",
    facilities: "8 pos pemantauan gempa, 4 jalur evakuasi, 3 shelter darurat",
    earthquakes: [
      {
        date: "2009 & 2018",
        magnitude: "5.1-5.6 SR",
        depth: "13-21 km",
        deaths: "40+ orang",
        injuries: "160+ orang",
        damage:
          "Kerusakan ringan-sedang: rumah tradisional retak, infrastruktur jalan amblas, jembatan gantung rusak, fasilitas publik parsial terganggu, kerugian lokal ~$10 juta",
      },
    ],
  },
];

// Fungsi helper untuk mendapatkan warna risiko
function getRiskColor(risk) {
  const colors = {
    Tinggi: "#ff6b6b",
    Sedang: "#ffa94d",
    Rendah: "#ffd43b",
  };
  return colors[risk] || "#666";
}

// Fungsi helper untuk mendapatkan ukuran marker
function getMarkerRadius(risk) {
  const sizes = {
    Tinggi: 20,
    Sedang: 15,
    Rendah: 10,
  };
  return sizes[risk] || 10;
}

// Fungsi helper untuk mendapatkan class risk badge
function getRiskClass(risk) {
  const classes = {
    Tinggi: "tinggi",
    Sedang: "sedang",
    Rendah: "rendah",
  };
  return classes[risk] || "";
}
