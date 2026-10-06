# 🍪 KuKis Cookies — Landing Page

Landing page responsif dan modern untuk brand cookies fiktif **"KuKis Cookies"**, dibuat menggunakan **HTML5**, **Tailwind CSS**, dan **JavaScript**. 

---

## 📁 Struktur File

```text
cookies-landing-page/
├── index.html    # Struktur halaman & styling utility Tailwind CSS
├── style.css     # Custom CSS khusus animasi scroll reveal
├── script.js     # Interaktivitas JavaScript (navbar toggle, add-to-cart toast, scroll reveal)
└── README.md     # Dokumentasi project
```

---

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Semantik struktur website (`nav`, `main`, `section`, `footer`).
- **Tailwind CSS (CDN)**: Styling utilitas responsif, konfigurasi warna custom (`cookie-50` hingga `cookie-900`), flexbox, grid, dan efek hover/transisi.
- **Vanilla JavaScript**: Tanpa framework, murni manipulasi DOM native.
- **Google Fonts**: *Playfair Display* (Heading/Serif) & *Inter* (Body/Sans-serif).

---

## ✨ Fitur Utama

1. **Sticky & Responsive Navbar**
   - Tetap di bagian atas layar saat di-scroll dengan efek backdrop blur.
   - Menu navigasi responsif dengan tombol hamburger interaktif pada layar mobile.

2. **Hero Section**
   - Layout adaptif: gambar tampil di atas teks pada layar HP (`flex-col-reverse`) dan berdampingan pada layar desktop.
   - CTA ganda (*Order Now* & *Explore Cookies*).

3. **Why Choose Us (USP Section)**
   - 4 kartu keunggulan dengan efek interaksi hover halus.

4. **Best Sellers Menu**
   - Menampilkan produk cookies terpopuler lengkap dengan badge, harga, dan tombol *Add to Cart*.
   - Grid dinamis: 1 kolom (mobile) → 2 kolom (tablet) → 4 kolom (desktop).

5. **Promotional Banner**
   - Banner penawaran spesial berlatar gelap untuk memberikan jeda visual yang menarik.

6. **Customer Reviews & Testimonials**
   - Ulasan pelanggan dengan rating bintang dan tampilan kartu yang rapi.

7. **Call to Action (CTA) & Footer**
   - Ajakan memesan sebelum footer lengkap dengan informasi kontak dan tautan media sosial.

8. **Interaktivitas JavaScript**
   - **Feedback Add to Cart**: Notifikasi toast otomatis muncul saat tombol keranjang diklik.
   - **Scroll Reveal**: Elemen muncul bertahap (*fade-in up*) saat masuk ke dalam viewport menggunakan `IntersectionObserver`.

---

## 📄 Lisensi & Hak Cipta

© 2026 KuKis Cookies. Dibuat untuk tujuan tugas dan pembelajaran.
