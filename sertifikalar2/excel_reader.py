import pandas as pd
import json
import os

def read_excel_to_js():
    try:
        # Excel dosyasını oku
        df = pd.read_excel('Egitim_Listesi.xlsx')
        
        # Sütun isimlerini temizle
        df.columns = df.columns.str.strip()
        
        # NaN değerleri temizle
        df = df.fillna('')
        
        # JavaScript array formatına dönüştür
        certificates = []
        
        for index, row in df.iterrows():
            # Her satırı sertifika objesi olarak dönüştür
            certificate = {
                'id': index + 1,
                'title': str(row.iloc[0]) if len(row) > 0 else 'Sertifika',
                'category': str(row.iloc[1]) if len(row) > 1 else 'Genel',
                'institution': str(row.iloc[2]) if len(row) > 2 else 'Kurum',
                'date': str(row.iloc[3]) if len(row) > 3 else '2024-01-01',
                'duration': str(row.iloc[4]) if len(row) > 4 else '0 saat',
                'description': str(row.iloc[5]) if len(row) > 5 else 'Açıklama bulunmuyor',
                'certificateUrl': '#'
            }
            certificates.append(certificate)
        
        # JavaScript kodu olarak yazdır
        js_code = f"""
// Excel'den okunan sertifika verileri
const certificatesData = {json.dumps(certificates, ensure_ascii=False, indent=2)};
"""
        
        # Dosyaya yaz
        with open('certificates_data.js', 'w', encoding='utf-8') as f:
            f.write(js_code)
        
        print("Excel verileri başarıyla JavaScript formatına dönüştürüldü!")
        print(f"Toplam {len(certificates)} sertifika bulundu.")
        
        # Kategorileri listele
        categories = list(set([cert['category'] for cert in certificates]))
        print(f"Kategoriler: {', '.join(categories)}")
        
        return certificates
        
    except Exception as e:
        print(f"Hata: {e}")
        return []

if __name__ == "__main__":
    read_excel_to_js() 