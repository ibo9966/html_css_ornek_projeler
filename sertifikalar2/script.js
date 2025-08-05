// Login bilgileri
const LOGIN_CREDENTIALS = {
    username: 'admin',
    password: '123'
};

// Egitim_Listesi.xlsx'den alınan gerçek sertifika verileri (30 eğitim)
const certificatesData = [
    // Bilgi Güvenliği ve Siber Güvenlik Grubu (6 eğitim)
    {
        id: 1,
        title: "Bilgi Teknolojilerine Giriş",
        category: "Bilgi Güvenliği ve Siber Güvenlik",
        institution: "Btk Akademi",
        instructor: "Şadi Evren Şeker",
        certificateUrl: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=EoPfbEdYO1"
    },
    {
        id: 2,
        title: "Siber Güvenlik Temelleri",
        category: "Bilgi Güvenliği ve Siber Güvenlik",
        institution: "Btk Akademi",
        instructor: "Hasan Alataş",
        certificateUrl: "#"
    },
    {
        id: 3,
        title: "Ağ Güvenliği",
        category: "Bilgi Güvenliği ve Siber Güvenlik",
        institution: "Btk Akademi",
        instructor: "Ali Can",
        certificateUrl: "#"
    },
    {
        id: 4,
        title: "Kriptografi",
        category: "Bilgi Güvenliği ve Siber Güvenlik",
        institution: "Btk Akademi",
        instructor: "Kasım Adalan",
        certificateUrl: "#"
    },
    {
        id: 5,
        title: "Güvenlik Testleri",
        category: "Bilgi Güvenliği ve Siber Güvenlik",
        institution: "Btk Akademi",
        instructor: "Ozan İlhan",
        certificateUrl: "#"
    },
    {
        id: 6,
        title: "Güvenlik Yönetimi",
        category: "Bilgi Güvenliği ve Siber Güvenlik",
        institution: "Btk Akademi",
        instructor: "Fahrettin Erdinç",
        certificateUrl: "#"
    },
    
    // Yazılım Grubu (15 eğitim)
    {
        id: 7,
        title: "Kotlin 101",
        category: "Yazılım",
        institution: "AML THINK Compliance",
        instructor: "Çiğdem Güven",
        certificateUrl: "https://gelecegiyazanlar.turkcell.com.tr/kisi/sertifika/kotlin_101"
    },
    {
        id: 8,
        title: "Android Mobil Uygulama Geliştirme Eğitimi",
        category: "Yazılım",
        institution: "Ecodation",
        instructor: "Muhammed Demiralp",
        certificateUrl: "#"
    },
    {
        id: 9,
        title: "Postman ile API Testi ve Test Otomasyonu",
        category: "Yazılım",
        institution: "Turkcell",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 10,
        title: "Java Programlama",
        category: "Yazılım",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 11,
        title: "Python Programlama",
        category: "Yazılım",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 12,
        title: "C# Programlama",
        category: "Yazılım",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 13,
        title: "JavaScript Programlama",
        category: "Yazılım",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 14,
        title: "HTML & CSS",
        category: "Yazılım",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 15,
        title: "React.js",
        category: "Yazılım",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 16,
        title: "Node.js",
        category: "Yazılım",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 17,
        title: "MongoDB",
        category: "Yazılım",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 18,
        title: "Git & GitHub",
        category: "Yazılım",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 19,
        title: "Docker",
        category: "Yazılım",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 20,
        title: "Kubernetes",
        category: "Yazılım",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 21,
        title: "AWS Cloud",
        category: "Yazılım",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    
    // Proje Yönetimi ve Analistlik Grubu (2 eğitim)
    {
        id: 22,
        title: "Scrum",
        category: "Proje Yönetimi ve Analistlik",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 23,
        title: "Proje Yönetimi",
        category: "Proje Yönetimi ve Analistlik",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    
    // Kişisel Gelişim Grubu (7 eğitim)
    {
        id: 24,
        title: "Dijital Bankacılık",
        category: "Kişisel Gelişim",
        institution: "Türkiye Bankalar Birliği",
        instructor: "Çiğdem Güven",
        certificateUrl: "#"
    },
    {
        id: 25,
        title: "İkna Becerileri",
        category: "Kişisel Gelişim",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 26,
        title: "Liderlik",
        category: "Kişisel Gelişim",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 27,
        title: "İletişim Becerileri",
        category: "Kişisel Gelişim",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 28,
        title: "Zaman Yönetimi",
        category: "Kişisel Gelişim",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 29,
        title: "Stres Yönetimi",
        category: "Kişisel Gelişim",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    {
        id: 30,
        title: "Motivasyon",
        category: "Kişisel Gelişim",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    },
    
    // İngilizce Grubu (1 eğitim)
    {
        id: 31,
        title: "İngilizce Konuşma",
        category: "İngilizce",
        institution: "Cambly",
        instructor: "Native Speaker",
        certificateUrl: "http://www.cambly.com/en/certificate/verify/83735fb7"
    },
    
    // SQL Grubu (2 eğitim)
    {
        id: 32,
        title: "SQL Kursu: Sıfırdan Sektörün Yükseklerine | 2020",
        category: "SQL",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "https://www.udemy.com/certificate/UC-453c6267-8378-437a-8da8-b2763ccd4d3f/"
    },
    {
        id: 33,
        title: "SQL Veritabanı Yönetimi",
        category: "SQL",
        institution: "Udemy",
        instructor: "Engin Demiroğ",
        certificateUrl: "#"
    }
];

// DOM elementleri
let currentCategory = 'Tümü';
let filteredCertificates = [...certificatesData];
let searchTerm = '';

// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});

// Login işlemi
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (username === LOGIN_CREDENTIALS.username && password === LOGIN_CREDENTIALS.password) {
        errorMessage.textContent = '';
        showDashboard();
    } else {
        errorMessage.textContent = 'Kullanıcı adı veya şifre hatalı!';
        errorMessage.style.display = 'block';
    }
}

// Dashboard'u göster
function showDashboard() {
    document.body.innerHTML = `
        <div class="dashboard">
            <nav class="navbar">
                <div class="navbar-content">
                    <h1><i class="fas fa-certificate"></i> Sertifika Yönetim Sistemi</h1>
                    <div class="navbar-buttons">
                        <button class="upload-btn" onclick="document.getElementById('fileInput').click()">
                            <i class="fas fa-upload"></i> Excel Yükle
                        </button>
                        <button class="logout-btn" onclick="logout()">
                            <i class="fas fa-sign-out-alt"></i> Çıkış Yap
                        </button>
                    </div>
                </div>
            </nav>
            
            <div class="main-content">
                <div class="search-section">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" id="searchInput" placeholder="Sertifika ara..." onkeyup="searchCertificates()">
                    </div>
                </div>
                
                <div class="categories" id="categories">
                    <!-- Kategoriler buraya gelecek -->
                </div>
                
                <div class="certificates-grid" id="certificatesGrid">
                    <!-- Sertifikalar buraya gelecek -->
                </div>
            </div>
        </div>
        
        <!-- Modal -->
        <div id="certificateModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id="modalTitle"></h2>
                    <span class="close" onclick="closeModal()">&times;</span>
                </div>
                <div id="modalBody">
                    <!-- Modal içeriği buraya gelecek -->
                </div>
            </div>
        </div>
        
        <!-- Gizli dosya input -->
        <input type="file" id="fileInput" accept=".xlsx,.xls" style="display: none;" onchange="loadExcelFile(event)">
    `;
    
    loadCategories();
    loadCertificates();
}

// Kategorileri yükle
function loadCategories() {
    const categoriesContainer = document.getElementById('categories');
    const categories = ['Tümü', ...new Set(certificatesData.map(cert => cert.category))];
    
    categoriesContainer.innerHTML = categories.map(category => `
        <button class="category-btn ${category === 'Tümü' ? 'active' : ''}" 
                onclick="filterByCategory('${category}')">
            ${category}
        </button>
    `).join('');
}

// Sertifikaları yükle
function loadCertificates() {
    const certificatesGrid = document.getElementById('certificatesGrid');
    
    certificatesGrid.innerHTML = filteredCertificates.map(cert => `
        <div class="certificate-card">
            <div class="certificate-header">
                <div class="certificate-icon">
                    <i class="fas fa-certificate"></i>
                </div>
                <div class="certificate-title">${cert.title}</div>
            </div>
            
            <div class="certificate-details">
                <div class="certificate-detail">
                    <span>Kategori:</span>
                    <span>${cert.category}</span>
                </div>
                <div class="certificate-detail">
                    <span>Kurum:</span>
                    <span>${cert.institution}</span>
                </div>
                <div class="certificate-detail">
                    <span>Eğitmen:</span>
                    <span>${cert.instructor}</span>
                </div>
            </div>
            
            <button class="view-certificate-btn" onclick="viewCertificate(${cert.id})">
                <i class="fas fa-eye"></i> Sertifikayı Göster
            </button>
        </div>
    `).join('');
}

// Arama fonksiyonu
function searchCertificates() {
    searchTerm = document.getElementById('searchInput').value.toLowerCase();
    applyFilters();
}

// Kategoriye göre filtrele
function filterByCategory(category) {
    currentCategory = category;
    
    // Aktif kategori butonunu güncelle
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    applyFilters();
}

// Filtreleri uygula
function applyFilters() {
    let filtered = [...certificatesData];
    
    // Kategori filtresi
    if (currentCategory !== 'Tümü') {
        filtered = filtered.filter(cert => cert.category === currentCategory);
    }
    
    // Arama filtresi
    if (searchTerm) {
        filtered = filtered.filter(cert => 
            cert.title.toLowerCase().includes(searchTerm) ||
            cert.institution.toLowerCase().includes(searchTerm) ||
            cert.instructor.toLowerCase().includes(searchTerm) ||
            cert.category.toLowerCase().includes(searchTerm)
        );
    }
    
    filteredCertificates = filtered;
    loadCertificates();
}

// Sertifika görüntüle
function viewCertificate(certId) {
    const certificate = certificatesData.find(cert => cert.id === certId);
    const modal = document.getElementById('certificateModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    // Sertifika açıklamasını oluştur
    const description = getCertificateDescription(certificate);
    
    modalTitle.textContent = certificate.title;
    
    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="width: 100px; height: 100px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                        border-radius: 50%; display: flex; align-items: center; justify-content: center; 
                        margin: 0 auto 1rem; color: white; font-size: 2rem;">
                <i class="fas fa-certificate"></i>
            </div>
            <h3 style="color: #667eea; margin-bottom: 0.5rem;">${certificate.title}</h3>
            <p style="color: #666; font-size: 1.1rem;">${certificate.institution}</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 1rem; color: #333;">Sertifika Detayları</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <strong>Kategori:</strong> ${certificate.category}
                </div>
                <div>
                    <strong>Kurum:</strong> ${certificate.institution}
                </div>
                <div>
                    <strong>Eğitmen:</strong> ${certificate.instructor}
                </div>
                <div>
                    <strong>Durum:</strong> <span style="color: #28a745;">✓ Tamamlandı</span>
                </div>
            </div>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 0.5rem; color: #333;">Açıklama</h4>
            <p style="color: #666; line-height: 1.6;">${description}</p>
        </div>
        
        <div style="text-align: center;">
            <button onclick="openCertificateInNewTab('${certificate.certificateUrl}')" 
                    style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                           color: white; border: none; padding: 12px 24px; border-radius: 8px; 
                           cursor: pointer; font-weight: 600; margin-right: 1rem;">
                <i class="fas fa-external-link-alt"></i> Yeni Sekmede Aç
            </button>
            <button onclick="downloadCertificate(${certificate.id})" 
                    style="background: #28a745; color: white; border: none; padding: 12px 24px; 
                           border-radius: 8px; cursor: pointer; font-weight: 600;">
                <i class="fas fa-download"></i> İndir
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Sertifika açıklamasını oluştur
function getCertificateDescription(certificate) {
    const descriptions = {
        // Bilgi Güvenliği ve Siber Güvenlik
        "Bilgi Teknolojilerine Giriş": "Bu eğitimde bilgi teknolojilerinin temelleri, dijital dünyanın yapı taşları ve modern teknoloji ekosistemi hakkında kapsamlı bilgiler edindim. BTK Akademi'nin kaliteli eğitim programı sayesinde teknoloji alanındaki temel kavramları ve uygulamaları öğrendim.",
        "Siber Güvenlik Temelleri": "Siber güvenliğin temel prensipleri, tehdit türleri ve korunma yöntemleri konusunda detaylı bir eğitim aldım. Günümüzde artan siber tehditlere karşı alınması gereken önlemler ve güvenlik protokolleri hakkında pratik bilgiler edindim.",
        "Ağ Güvenliği": "Ağ güvenliği konusunda kapsamlı bir eğitim tamamladım. Ağ protokolleri, güvenlik açıkları ve ağ koruma yöntemleri hakkında teorik ve pratik bilgiler edindim. Bu eğitim sayesinde ağ güvenliği konusunda uzmanlaştım.",
        "Kriptografi": "Kriptografi biliminin temellerini ve modern şifreleme tekniklerini öğrendim. Veri güvenliği, şifreleme algoritmaları ve kriptografik protokoller hakkında detaylı bilgiler edindim. Bu alanda uzmanlaşmak için gerekli temel bilgileri kazandım.",
        "Güvenlik Testleri": "Güvenlik testleri ve penetrasyon testleri konusunda kapsamlı bir eğitim aldım. Sistemlerin güvenlik açıklarını tespit etme ve güvenlik değerlendirmesi yapma konularında pratik deneyim kazandım.",
        "Güvenlik Yönetimi": "Siber güvenlik yönetimi ve güvenlik politikaları konusunda detaylı bir eğitim tamamladım. Organizasyonel güvenlik stratejileri ve risk yönetimi konularında uzmanlaştım.",
        
        // Yazılım
        "Kotlin 101": "Kotlin programlama dilinin temellerini öğrendim. Modern Android geliştirme için gerekli olan Kotlin syntax'ı, nesne yönelimli programlama kavramları ve pratik uygulamalar konusunda deneyim kazandım.",
        "Android Mobil Uygulama Geliştirme Eğitimi": "Android platformunda mobil uygulama geliştirme konusunda kapsamlı bir eğitim aldım. UI/UX tasarımı, veri yönetimi ve uygulama yayınlama süreçleri hakkında pratik deneyim edindim.",
        "Postman ile API Testi ve Test Otomasyonu": "API testleri ve otomasyon konusunda uzmanlaştım. Postman kullanarak API testleri yapma, test senaryoları oluşturma ve otomatik test süreçleri geliştirme konularında deneyim kazandım.",
        "Java Programlama": "Java programlama dilinin temellerini ve ileri seviye konularını öğrendim. Nesne yönelimli programlama, veri yapıları ve algoritmalar konusunda kapsamlı bilgiler edindim.",
        "Python Programlama": "Python programlama dilinin güçlü özelliklerini keşfettim. Veri analizi, web geliştirme ve otomasyon konularında Python'un sunduğu imkanları öğrendim ve pratik uygulamalar geliştirdim.",
        "C# Programlama": "C# programlama dilini öğrenerek .NET ekosistemi hakkında kapsamlı bilgiler edindim. Windows uygulamaları, web servisleri ve veritabanı uygulamaları geliştirme konularında deneyim kazandım.",
        "JavaScript Programlama": "JavaScript'in modern özelliklerini ve web geliştirme alanındaki kullanımını öğrendim. Frontend geliştirme, DOM manipülasyonu ve asenkron programlama konularında uzmanlaştım.",
        "HTML & CSS": "Web geliştirmenin temel yapı taşları olan HTML ve CSS konularında kapsamlı bir eğitim aldım. Responsive tasarım, modern CSS teknikleri ve web standartları hakkında detaylı bilgiler edindim.",
        "React.js": "React.js kütüphanesini kullanarak modern web uygulamaları geliştirme konusunda uzmanlaştım. Component tabanlı geliştirme, state yönetimi ve React ekosistemi hakkında pratik deneyim kazandım.",
        "Node.js": "Node.js platformunda server-side JavaScript geliştirme konusunda kapsamlı bir eğitim aldım. REST API'ler, veritabanı entegrasyonu ve performans optimizasyonu konularında deneyim edindim.",
        "MongoDB": "NoSQL veritabanı teknolojileri ve MongoDB konusunda uzmanlaştım. Veri modelleme, sorgulama ve veritabanı yönetimi konularında pratik bilgiler edindim.",
        "Git & GitHub": "Versiyon kontrol sistemi Git ve GitHub platformu konusunda kapsamlı bir eğitim aldım. Branch yönetimi, collaboration ve proje yönetimi konularında deneyim kazandım.",
        "Docker": "Container teknolojileri ve Docker konusunda uzmanlaştım. Containerization, orchestration ve DevOps süreçleri hakkında pratik deneyim edindim.",
        "Kubernetes": "Kubernetes orchestration platformu konusunda kapsamlı bir eğitim aldım. Container yönetimi, scaling ve deployment stratejileri hakkında detaylı bilgiler edindim.",
        "AWS Cloud": "Amazon Web Services cloud platformu konusunda uzmanlaştım. Cloud computing, AWS servisleri ve cloud architecture konularında pratik deneyim kazandım.",
        
        // Proje Yönetimi ve Analistlik
        "Scrum": "Agile metodolojiler ve Scrum framework'ü konusunda kapsamlı bir eğitim aldım. Sprint planlama, daily standup'lar ve retrospective süreçleri hakkında pratik deneyim edindim.",
        "Proje Yönetimi": "Proje yönetimi metodolojileri ve araçları konusunda uzmanlaştım. Proje planlama, risk yönetimi ve stakeholder communication konularında kapsamlı bilgiler edindim.",
        
        // Kişisel Gelişim
        "Dijital Bankacılık": "Dijital bankacılık teknolojileri ve fintech alanında kapsamlı bir eğitim aldım. Modern bankacılık sistemleri, güvenlik protokolleri ve kullanıcı deneyimi konularında bilgiler edindim.",
        "İkna Becerileri": "İkna teknikleri ve etkili iletişim konusunda uzmanlaştım. Satış, pazarlama ve liderlik alanlarında kullanılabilecek ikna stratejileri hakkında pratik bilgiler edindim.",
        "Liderlik": "Liderlik stilleri ve yönetim teknikleri konusunda kapsamlı bir eğitim aldım. Takım yönetimi, motivasyon ve organizasyonel liderlik konularında deneyim kazandım.",
        "İletişim Becerileri": "Etkili iletişim teknikleri ve profesyonel iletişim konusunda uzmanlaştım. Sunum yapma, toplantı yönetimi ve interpersonel iletişim konularında pratik deneyim edindim.",
        "Zaman Yönetimi": "Zaman yönetimi teknikleri ve verimlilik konusunda kapsamlı bir eğitim aldım. Önceliklendirme, planlama ve stress yönetimi konularında pratik stratejiler öğrendim.",
        "Stres Yönetimi": "Stres yönetimi ve mental sağlık konusunda uzmanlaştım. İş hayatında karşılaşılan stres faktörleri ve bunlarla başa çıkma yöntemleri hakkında pratik bilgiler edindim.",
        "Motivasyon": "Motivasyon teorileri ve kişisel gelişim konusunda kapsamlı bir eğitim aldım. Hedef belirleme, motivasyonu sürdürme ve başarı stratejileri hakkında deneyim kazandım.",
        
        // İngilizce
        "İngilizce Konuşma": "İngilizce konuşma becerilerimi geliştirmek için Cambly platformunda native speaker'larla pratik yaptım. Günlük konuşma, iş İngilizcesi ve telaffuz konularında önemli ilerleme kaydettim.",
        
        // SQL
        "SQL Kursu: Sıfırdan Sektörün Yükseklerine | 2020": "SQL veritabanı yönetimi konusunda sıfırdan ileri seviyeye kadar kapsamlı bir eğitim aldım. Veri sorgulama, veritabanı tasarımı ve performans optimizasyonu konularında uzmanlaştım.",
        "Uygulamalarla SQL Öğreniyorum": "SQL'i pratik uygulamalar üzerinden öğrendim. Gerçek dünya senaryoları ile veritabanı yönetimi, sorgu optimizasyonu ve veri analizi konularında deneyim kazandım."
    };
    
    return descriptions[certificate.title] || "Bu eğitimde konuyla ilgili kapsamlı bilgiler edindim ve pratik deneyim kazandım. Eğitim sürecinde teorik bilgilerin yanı sıra uygulamalı çalışmalar da gerçekleştirdim.";
}

// Modal'ı kapat
function closeModal() {
    document.getElementById('certificateModal').style.display = 'none';
}

// Yeni sekmede sertifika aç
function openCertificateInNewTab(url) {
    window.open(url, '_blank');
}

// Sertifika indir
function downloadCertificate(certId) {
    const certificate = certificatesData.find(cert => cert.id === certId);
    alert(`${certificate.title} sertifikası indiriliyor...`);
    // Burada gerçek indirme işlemi yapılabilir
}

// Çıkış yap
function logout() {
    if (confirm('Çıkış yapmak istediğinizden emin misiniz?')) {
        window.location.reload();
    }
}

// Tarih formatla
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Excel dosyasını yükle ve oku
function loadExcelFile(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, {type: 'array'});
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1});
            
            // Excel verilerini sertifika formatına dönüştür
            convertExcelToCertificates(jsonData);
        };
        reader.readAsArrayBuffer(file);
    }
}

// Excel verilerini sertifika formatına dönüştür
function convertExcelToCertificates(excelData) {
    if (excelData.length < 2) {
        alert('Excel dosyasında veri bulunamadı!');
        return;
    }
    
    // İlk satır başlık, veriler 2. satırdan başlıyor
    const dataRows = excelData.slice(1);
    const newCertificates = [];
    
    dataRows.forEach((row, index) => {
        if (row.length >= 3) { // En az 3 sütun olmalı
            const certificate = {
                id: index + 1,
                title: row[1] || 'Eğitim Adı', // Eğitim Adı sütunu
                category: row[0] || 'Kategori', // Grup sütunu
                institution: row[2] || 'Kurum', // Kurum sütunu
                instructor: row[3] || 'Eğitmen', // Eğitmen sütunu
                certificateUrl: row[4] || '#' // Eğitim Linki sütunu
            };
            newCertificates.push(certificate);
        }
    });
    
    if (newCertificates.length > 0) {
        // Global değişkenleri güncelle
        certificatesData.length = 0; // Mevcut verileri temizle
        certificatesData.push(...newCertificates); // Yeni verileri ekle
        
        // Filtreleri sıfırla
        currentCategory = 'Tümü';
        searchTerm = '';
        filteredCertificates = [...certificatesData];
        
        // Arayüzü güncelle
        loadCategories();
        loadCertificates();
        
        alert(`${newCertificates.length} eğitim başarıyla yüklendi!`);
    } else {
        alert('Excel dosyasından veri okunamadı!');
    }
}

// Modal dışına tıklandığında kapat
window.onclick = function(event) {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
} 