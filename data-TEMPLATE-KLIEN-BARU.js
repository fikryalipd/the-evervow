// ============================================================
// DATA UNDANGAN. Satu file per klien. Nama file: data-NAMA.js (huruf kecil, tanpa spasi, contoh data-raka-naya.js)
// Simpan dengan tanda kutip tetap utuh. Kosongkan ("") bagian yang tidak dipakai.
// ============================================================
window.UNDANGAN = {
  // Judul tab browser
  judulHalaman: "Undangan NAMA & NAMA",

  mempelai: {
    pria:  { panggilan: "Raka", lengkap: "Raka Pratama",  orangTua: "Bapak Hendra Pratama & Ibu Sari Utami", anakKe: "Putra pertama" },
    wanita:{ panggilan: "Naya", lengkap: "Naya Anindita", orangTua: "Bapak Surya Wijaya & Ibu Lestari",      anakKe: "Putri kedua" }
  },

  // Tanggal akad, format: TAHUN-BULAN-TANGGAL JAM:MENIT (WIB)
  tanggalAkad: "2026-12-20T08:00:00+07:00",
  tanggalTeks: "Minggu, 20 Desember 2026",
  batasRSVP: "10 Desember 2026",

  akad:    { jam: "08.00 WIB sampai selesai" },
  resepsi: { jam: "11.00 sampai 14.00 WIB" },

  lokasi: {
    nama: "Gedung Serbaguna Melati",
    alamat: "Jl. Merdeka No. 12, Kota Bandung, Jawa Barat",
    kota: "Bandung, Jawa Barat",
    // Tempel link Google Maps dari tombol "Bagikan" di Google Maps
    linkPeta: "https://www.google.com/maps/search/?api=1&query=Gedung+Serbaguna+Melati+Bandung"
  },

  // Ayat dan kutipan (periksa ulang penulisan sebelum dikirim ke klien)
  ayat: {
    teks: "Di antara tanda-tanda kebesaran-Nya, Dia menciptakan pasangan untukmu dari dirimu sendiri agar kamu merasa tenteram, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    sumber: "QS. Ar-Rum: 21"
  },

  // Foto: unggah foto ke folder yang sama, beri nama berawalan nama klien, lalu tulis namanya di sini.
  // Contoh: ["raka-naya-1.jpg", "raka-naya-2.jpg", "raka-naya-3.jpg"]. Kosongkan [] jika belum ada.
  foto: [],

  // Musik: unggah file mp3 ke folder yang sama, contoh "raka-naya.mp3". Kosongkan "" jika tidak ada musik.
  musik: "",
  judulMusik: "Musik latar",

  // Tanda kasih. Kosongkan nama bank untuk menyembunyikan bagian ini.
  rekening: { bank: "", nomor: "", atasNama: "" },

  // Konfirmasi kehadiran (RSVP)
  // Cara 1 (paling mudah): tamu menekan kirim, WhatsApp terbuka ke nomor mempelai. Isi nomor format 62...
  waMempelai: "6281234567890",
  // Cara 2 (rekap otomatis di Google Sheets): tempel URL Apps Script dari panduan. Kosongkan "" jika tidak dipakai.
  urlSheets: "",

  // Warna (opsional)
  warna: { gelap: "#26403A", blush: "#F7ECEA", aksen: "#9A5359", sage: "#E6EDE6" }
};
