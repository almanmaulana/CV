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

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 80) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
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
