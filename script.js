// Ambil elemen-elemen yang diperlukan
const homeLink = document.getElementById("home");
const aboutLink = document.getElementById("about");
const contactLink = document.getElementById("contact");
const content = document.getElementById("content");

// Fungsi untuk mengganti konten
function changeContent(title, text) {
    content.innerHTML = `<h1>${title}</h1><p>${text}</p>`;
}

// Tambahkan event listener untuk setiap link
homeLink.addEventListener("click", function() {
    changeContent("SELAMAT DATANG", "Selamat datang di situs web kami. Ini adalah halaman beranda.");
});

aboutLink.addEventListener("click", function() {
    changeContent("Tentang Kami", "Kami adalah perusahaan yang bergerak di bidang XYZ.");
});

contactLink.addEventListener("click", function() {
    changeContent("Kontak", "Silakan hubungi kami di alamat email@example.com.");
});

// Tampilkan halaman beranda secara default
changeContent("Selamat datang di Beranda", "Selamat datang di situs web kami. Ini adalah halaman beranda.");
