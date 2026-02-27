// ================= MENU MOBILE =================
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("show");
}

// ================= LIGHTBOX FOTO =================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openImage(src) {
    lightbox.style.display = "flex";
    lightboxImg.src = src;
}

function closeImage() {
    lightbox.style.display = "none";
}

// ================= ACTIVE NAVBAR SAAT SCROLL =================
const sections = document.querySelectorAll("section, header, div[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
            current = section.id;
        }
    });

    navLinks.forEach(link => link.classList.remove("active"));

    /* ================= LOGIKA KHUSUS ================= */

    // Jika berada di area split section
    const splitSection = document.querySelector(".split-section");
    const splitRect = splitSection.getBoundingClientRect();

    if (splitRect.top <= 120 && splitRect.bottom >= 120) {
        document.querySelector('a[href="#pendidikan"]').classList.add("active");
        document.querySelector('a[href="#keahlian"]').classList.add("active");
        return; // hentikan supaya tidak bentrok
    }

    // Normal behaviour (selain split section)
    if (current) {
        const activeLink = document.querySelector(`a[href="#${current}"]`);
        if (activeLink) activeLink.classList.add("active");
    }

    // Home di paling atas
    if (window.scrollY < 100) {
        document.querySelector('a[href="#home"]').classList.add("active");
    }
});


// ================= TOGGLE GALERI =================
let expanded = false;

function toggleGallery() {
    const photos = document.querySelectorAll('.hidden-photo');
    const btn = document.getElementById('toggleBtn');

    expanded = !expanded;

    photos.forEach(img => {
        img.style.display = expanded ? "block" : "none";
    });

    btn.innerText = expanded ? "Lihat Lebih Sedikit" : "Lihat Lebih Banyak";
}

// ================= POPUP SERTIFIKAT =================
let currentImages = [];
let currentIndex = 0;

function openGallery(images) {
    currentImages = images;
    currentIndex = 0;

    document.getElementById("galleryPopup").style.display = "flex";
    document.getElementById("popupImage").src = currentImages[currentIndex];
}

function closeGallery() {
    document.getElementById("galleryPopup").style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    document.getElementById("popupImage").src = currentImages[currentIndex];
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = currentImages.length - 1;

    document.getElementById("popupImage").src = currentImages[currentIndex];
}

// Menutup menu otomatis saat link diklik (Mobile)
document.querySelectorAll(".nav-item").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.getElementById("navMenu");
        menu.classList.remove("show"); // Menghapus class show sehingga menu tertutup
    });
});