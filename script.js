/*
 * script.js — KuKis Cookies Landing Page
 *
 * Berisi seluruh JavaScript untuk interaksi website:
 * 1. Mobile navbar toggle (hamburger menu)
 * 2. Navbar shadow on scroll
 * 3. Add to Cart feedback (toast notification)
 * 4. Scroll reveal animation (Intersection Observer)
 */


// ========================================================
// 1. MOBILE NAVBAR TOGGLE
// ========================================================
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const bar1       = document.getElementById('bar1');
const bar2       = document.getElementById('bar2');
const bar3       = document.getElementById('bar3');

let menuOpen = false;

// Toggle hamburger menu open/close
hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;

  if (menuOpen) {
    // Buka menu — ubah ikon hamburger menjadi X
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
    bar1.style.transform = 'rotate(45deg) translate(4px, 4px)';
    bar2.style.opacity   = '0';
    bar3.style.transform = 'rotate(-45deg) translate(4px, -4px)';
  } else {
    // Tutup menu — kembalikan ikon ke hamburger
    closeMobileMenu();
  }
});

// Tutup mobile menu saat salah satu link diklik
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    closeMobileMenu();
  });
});

// Fungsi untuk menutup mobile menu
function closeMobileMenu() {
  mobileMenu.style.maxHeight = '0';
  bar1.style.transform = '';
  bar2.style.opacity   = '';
  bar3.style.transform = '';
}


// ========================================================
// 2. NAVBAR SHADOW ON SCROLL
// ========================================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('shadow-md');
    navbar.classList.remove('shadow-sm');
  } else {
    navbar.classList.remove('shadow-md');
    navbar.classList.add('shadow-sm');
  }
});


// ========================================================
// 3. ADD TO CART — TOAST NOTIFICATION
// ========================================================
const toast    = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');

let toastTimeout;

// Pasang event listener pada semua tombol "Add to Cart"
// menggunakan data-product attribute sebagai nama produk
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const productName = btn.dataset.product;
    addToCart(btn, productName);
  });
});

function addToCart(btn, productName) {
  // Simpan teks asli tombol
  const originalText = btn.textContent;

  // Ubah tampilan tombol sementara
  btn.textContent = '✓ Added!';
  btn.classList.add('bg-green-600');
  btn.classList.remove('bg-cookie-700');
  btn.disabled = true;

  // Tampilkan toast notification
  toastMsg.textContent = `${productName} added to cart!`;
  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  // Sembunyikan toast setelah 2.5 detik
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 2500);

  // Kembalikan tombol ke keadaan semula setelah 1.5 detik
  setTimeout(() => {
    btn.textContent = originalText;
    btn.classList.remove('bg-green-600');
    btn.classList.add('bg-cookie-700');
    btn.disabled = false;
  }, 1500);
}


// ========================================================
// 4. SCROLL REVEAL — INTERSECTION OBSERVER
// ========================================================
// Elemen dengan class "reveal" akan fade-in saat masuk viewport
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Delay bertahap untuk efek stagger antar elemen
      setTimeout(() => {
        entry.target.classList.add('active');
      }, index * 100);

      // Berhenti mengamati elemen yang sudah muncul
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

// Mulai mengamati semua elemen reveal
revealElements.forEach(el => revealObserver.observe(el));
