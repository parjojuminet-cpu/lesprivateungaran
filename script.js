// Fungsi Navigasi Halaman
function showPage(pageId) {
    // Sembunyikan semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Tampilkan halaman yang dituju
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Tutup menu overlay
    const menuBtn = document.getElementById('menuBtn');
    const navOverlay = document.getElementById('navOverlay');
    menuBtn.classList.remove('active');
    navOverlay.classList.remove('active');

    // Scroll ke atas
    document.getElementById('main-content').scrollTop = 0;
}

// Toggle Menu Button
document.getElementById('menuBtn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('navOverlay').classList.toggle('active');
});

// Fungsi Kirim WhatsApp Pendaftaran Murid
function kirimMurid() {
    const nama = document.getElementById('m_nama').value;
    const alamat = document.getElementById('m_alamat').value;
    const usia = document.getElementById('m_usia').value;
    const sekolah = document.getElementById('m_sekolah').value;
    const mapel = document.getElementById('m_mapel').value;

    if(!nama || !alamat) return alert("Mohon lengkapi Nama dan Alamat!");

    const pesan = `Halo Admin Les Privat Ungaran, saya ingin mendaftar murid:%0A%0A` +
                  `Nama: ${nama}%0A` +
                  `Alamat: ${alamat}%0A` +
                  `Usia/Kelas: ${usia}%0A` +
                  `Sekolah: ${sekolah}%0A` +
                  `Mata Pelajaran: ${mapel}`;

    window.open(`https://wa.me/628123456789?text=${pesan}`, '_blank');
}

// Fungsi Kirim WhatsApp Pendaftaran Tentor
function kirimTentor() {
    const nama = document.getElementById('t_nama').value;
    const lulusan = document.getElementById('t_lulusan').value;
    const domisili = document.getElementById('t_domisili').value;
    const ahli = document.getElementById('t_ahli').value;

    if(!nama || !lulusan) return alert("Mohon lengkapi data diri Anda!");

    const pesan = `Halo Admin Les Privat Ungaran, saya ingin bergabung sebagai Tentor:%0A%0A` +
                  `Nama: ${nama}%0A` +
                  `Lulusan: ${lulusan}%0A` +
                  `Domisili: ${domisili}%0A` +
                  `Keahlian: ${ahli}`;

    window.open(`https://wa.me/628123456789?text=${pesan}`, '_blank');
}