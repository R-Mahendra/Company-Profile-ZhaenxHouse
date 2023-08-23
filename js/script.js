// ================================SCROL BLUR NAVBAR START================================ //
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// ================================SCROL BLUR NAVBAR END================================ //

//=================================================FUNGSI UNTUK Tampilkan tombol "Back to Top" dengan penundaan=================================================
// Event listener untuk mendeteksi saat terjadi scroll
window.addEventListener("scroll", function () {
  scrollFunction();
});

// Function untuk mengatur tampilan tombol back-to-top
function scrollFunction() {
  // Mengambil referensi elemen tombol back-to-top
  var backToTopButton = document.getElementById("Back-to-top");

  // Mengambil tinggi jendela viewport
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;

  // Mengambil posisi scroll saat ini
  var scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

  // Pengecekan untuk menampilkan atau menyembunyikan tombol back-to-top
  if (scrollPosition > windowHeight / 1.5) {
    // Jika posisi scroll melebihi setengah tinggi jendela viewport, tampilkan tombol
    backToTopButton.classList.remove("d-none");
  } else {
    // Jika posisi scroll kurang dari setengah tinggi jendela viewport, sembunyikan tombol
    backToTopButton.classList.add("d-none");
  }
}

// Function untuk melakukan scroll ke atas saat tombol back-to-top diklik
function ScrollKeatas() {
  // Scroll ke atas pada elemen body (untuk Safari)
  document.body.scrollTop = 0;

  // Scroll ke atas pada elemen html (untuk Chrome, Firefox, IE, dan Opera)
  document.documentElement.scrollTop = 0;
}

// Panggil fungsi scrollFunction saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  scrollFunction();
});

// Panggil fungsi scrollFunction saat terjadi acara scroll
window.addEventListener("scroll", function () {
  scrollFunction();
});
//============================================== end bac to top ======================================================================================================

// ============================================= start navbar togle ========================== //
const hamburger = document.querySelector(".navbar-toggler");
const navMenu = document.getElementById("zxNavlist");
const menuItems = navMenu.querySelectorAll("a");

// Fungsi untuk menyembunyikan menu navbar
function hideNavMenu() {
  hamburger.classList.remove("navbar-toggler-active");
  navMenu.classList.remove("show");
}
// Menambahkan event listener pada hamburger untuk mendeteksi klik
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("navbar-toggler-active");
  navMenu.classList.toggle("show");
});

// Menambahkan event listener pada window untuk mendeteksi klik di dalam halaman
window.addEventListener("click", function (e) {
  // Cek apakah elemen yang diklik bukanlah elemen dengan id "zxNavlist" dan juga tidak berada di dalam elemen "navMenu"
  if (e.target !== navMenu && !navMenu.contains(e.target)) {
    // Jika kondisi terpenuhi, tutup menu navbar
    hideNavMenu();
  }
});
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    // Tutup menu navbar
    hideNavMenu();
  });
});
// ============================================= end navbar togle ========================== //

// ======================================= start navbar active =======================================//
// Mengambil elemen navbar dan semua tautan di dalamnya
const navbar = document.querySelector(".navbar");
const navLinks = navbar.querySelectorAll(".nav-link");

// Mendengarkan peristiwa scroll
window.addEventListener("scroll", () => {
  // Mendapatkan posisi scroll
  const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

  // Memperbarui kelas aktif pada tautan navigasi sesuai dengan posisi scroll
  navLinks.forEach((link) => {
    const section = document.querySelector(link.getAttribute("href"));
    const sectionTop = section.offsetTop - navbar.offsetHeight;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Fungsi untuk menggulir ke bagian yang tepat saat tautan di navbar diklik
function scrollToSection(event, sectionId) {
  event.preventDefault();

  const section = document.querySelector(sectionId);
  const offsetTop = section.offsetTop - navbar.offsetHeight;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });

  // Memperbarui kelas aktif pada tautan navigasi setelah menggulir
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === sectionId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
// ======================================= end navbar active =======================================//
ScrollReveal({
  reset: true,
  delay: 200,
  duration: 2000,
  distance: "80px",
});
ScrollReveal().reveal(".nv", { origin: "bottom",reset:false});

ScrollReveal().reveal("#home h1", { origin: "top"});
ScrollReveal().reveal("#home .parag", { origin: "bottom"});
ScrollReveal().reveal("#home .tmblhome", { origin: "bottom"});

ScrollReveal().reveal("#layanan h1", { origin: "top",reset:false});

ScrollReveal().reveal("#fitur .fiture", { origin: "top",reset:false});
ScrollReveal().reveal("#fitur #carousel-fitur", { origin: "bottom",reset:false}); 


ScrollReveal().reveal("#kontak .text", { origin: "top"});
ScrollReveal().reveal("#kontak .formkontak", { origin: "bottom"});