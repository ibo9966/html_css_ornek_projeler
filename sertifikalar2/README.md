# Sertifika Yönetim Sistemi

Modern ve kullanıcı dostu bir sertifika yönetim web uygulaması.

## 🚀 Özellikler

- **Güvenli Giriş Sistemi**: Admin paneli ile güvenli erişim
- **Kategori Filtreleme**: Sertifikaları kategorilere göre filtreleme
- **Modern Tasarım**: Responsive ve modern UI/UX
- **Sertifika Görüntüleme**: Detaylı sertifika bilgileri ve modal görünüm
- **Yeni Sekme Açma**: Sertifikaları yeni sekmede görüntüleme
- **İndirme Özelliği**: Sertifika indirme fonksiyonu

## 📁 Dosya Yapısı

```
sertifikalar2/
├── index.html              # Ana sayfa (Login)
├── styles.css              # CSS stilleri
├── script.js               # JavaScript fonksiyonları
├── Egitim_Listesi.xlsx     # Sertifika verileri
├── excel_reader.py         # Excel okuma scripti
├── excel_viewer.html       # Excel görüntüleyici
└── README.md               # Bu dosya
```

## 🔐 Giriş Bilgileri

- **Kullanıcı Adı**: `admin`
- **Şifre**: `123`

## 🎨 Kategoriler

Sistem şu kategorilerde sertifikaları destekler:

- **Web Geliştirme**: HTML, CSS, JavaScript, React.js
- **Programlama**: Python, Java, C++
- **Veri Bilimi**: Veri analizi, SQL, makine öğrenmesi
- **Pazarlama**: Dijital pazarlama, SEO, SEM
- **Tasarım**: Grafik tasarım, UI/UX
- **İş Yönetimi**: Proje yönetimi, Agile, Scrum
- **Güvenlik**: Siber güvenlik, ağ güvenliği
- **Mobil Geliştirme**: React Native, Flutter
- **Yapay Zeka**: Makine öğrenmesi, derin öğrenme

## 🛠️ Teknolojiler

- **HTML5**: Semantik yapı
- **CSS3**: Modern stiller ve animasyonlar
- **JavaScript (ES6+)**: Dinamik işlevsellik
- **Font Awesome**: İkonlar
- **Responsive Design**: Mobil uyumlu tasarım

## 📱 Responsive Tasarım

Web sitesi tüm cihazlarda mükemmel görünür:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎯 Kullanım

1. `index.html` dosyasını web tarayıcısında açın
2. Giriş bilgilerini girin (admin/123)
3. Kategorileri kullanarak sertifikaları filtreleyin
4. "Sertifikayı Göster" butonuna tıklayın
5. Detayları görüntüleyin veya yeni sekmede açın

## 🔧 Özelleştirme

### Yeni Sertifika Ekleme

`script.js` dosyasındaki `certificatesData` array'ine yeni sertifika ekleyin:

```javascript
{
    id: 13,
    title: "Yeni Sertifika",
    category: "Kategori",
    institution: "Kurum",
    date: "2024-01-01",
    duration: "30 saat",
    description: "Açıklama",
    certificateUrl: "#"
}
```

### Stil Değişiklikleri

`styles.css` dosyasından renkleri ve stilleri özelleştirebilirsiniz:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --background-color: #f8f9fa;
}
```

## 📊 Veri Yapısı

Her sertifika şu bilgileri içerir:

- **id**: Benzersiz kimlik
- **title**: Sertifika adı
- **category**: Kategori
- **institution**: Veren kurum
- **date**: Tarih
- **duration**: Süre
- **description**: Açıklama
- **certificateUrl**: Sertifika linki

## 🚀 Gelecek Özellikler

- [ ] Excel dosyasından otomatik veri yükleme
- [ ] Arama fonksiyonu
- [ ] Sertifika ekleme/düzenleme
- [ ] PDF export
- [ ] Çoklu dil desteği
- [ ] Dark mode

## 📞 Destek

Herhangi bir sorun veya öneri için lütfen iletişime geçin.

---

**Not**: Bu proje eğitim amaçlı geliştirilmiştir ve gerçek sertifika verilerinizi güvenli bir şekilde yönetmek için kullanabilirsiniz. 