// DATA UNDANGAN TEMA FOTO PENUH LAYAR (undangan-foto.html)
// Satu file per klien. Nama file: data-NAMA.js, contoh data-raka-naya.js
// Link: undangan-foto.html?u=raka-naya
window.UNDANGAN = {
  judulHalaman: "Undangan Raka & Naya",

  mempelai: {
    pria:  { panggilan: "Raka", lengkap: "Raka Pratama",  orangTua: "Bapak Hendra Pratama & Ibu Sari Utami", anakKe: "Putra pertama", instagram: "" },
    wanita:{ panggilan: "Naya", lengkap: "Naya Anindita", orangTua: "Bapak Surya Wijaya & Ibu Lestari",      anakKe: "Putri kedua",   instagram: "" }
  },

  tanggalAkad: "2026-12-20T08:00:00+07:00",
  tanggalTeks: "Minggu, 20 Desember 2026",
  akad:    { jam: "08.00 WIB sampai selesai" },
  resepsi: { jam: "11.00 sampai 14.00 WIB" },

  lokasi: {
    nama: "Gedung Serbaguna Melati",
    alamat: "Jl. Merdeka No. 12, Kota Bandung, Jawa Barat",
    linkPeta: "https://www.google.com/maps/search/?api=1&query=Gedung+Serbaguna+Melati+Bandung"
  },

  ayat: {
    teks: "Di antara tanda-tanda kebesaran-Nya, Dia menciptakan pasangan untukmu dari dirimu sendiri agar kamu merasa tenteram.",
    sumber: "QS. Ar-Rum: 21"
  },

  // FOTO LATAR tiap bagian (layar penuh). Unggah foto ke folder yang sama lalu tulis namanya.
  // Kosongkan "" jika belum ada, bagian itu memakai warna malam. Foto tegak (portrait) paling bagus.
  // Contoh: cover: "raka-naya-cover.jpg"
  latar: { cover: "", pria: "", wanita: "", acara: "", hadiah: "", ucapan: "", penutup: "" },

  // KISAH KAMI (opsional). Hapus bagian ini atau kosongkan [] jika tidak dipakai.
  // Baris baru di dalam teks ditulis \n
  cerita: [
    { judul: "Pertemuan", teks: "Contoh: Kami bertemu pertama kali di sebuah acara kampus pada tahun 2019.\nDari percakapan singkat, tumbuh pertemanan yang hangat." },
    { judul: "Memilih Bersama", teks: "Contoh: Pada tahun 2021 kami memutuskan untuk saling mengenal lebih dalam dan melibatkan keluarga." },
    { judul: "Sebuah Janji", teks: "Contoh: Pada tahun 2026 kami mengikat janji dalam acara lamaran dan melangkah menuju pernikahan." }
  ],

  // GALERI: daftar foto. Kosongkan [] jika belum ada. Contoh: ["raka-naya-1.jpg", "raka-naya-2.jpg"]
  foto: [],

  // MUSIK: nama file mp3 di folder yang sama. Kosongkan "" jika tidak ada.
  musik: "",

  // HADIAH: bisa lebih dari satu rekening atau e-wallet. Hapus semua isinya [] untuk menyembunyikan bagian ini.
  hadiah: [
    { bank: "BCA", nomor: "1234567890", atasNama: "Raka Pratama (contoh)" },
    { bank: "Mandiri", nomor: "0987654321", atasNama: "Naya Anindita (contoh)" }
  ],

  // UCAPAN contoh untuk demo. Hapus bagian ini untuk undangan klien sungguhan.
  ucapanContoh: [
    { nama: "Contoh Tamu 1", status: "hadir", jumlah: 2, ucapan: "Selamat menempuh hidup baru, semoga sakinah mawaddah warahmah.", waktu: "2026-11-18" },
    { nama: "Contoh Tamu 2", status: "tidak", jumlah: 0, ucapan: "Mohon maaf belum bisa hadir. Semoga acaranya berjalan lancar.", waktu: "2026-11-17" },
    { nama: "Contoh Tamu 3", status: "hadir", jumlah: 1, ucapan: "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fii khair.", waktu: "2026-11-16" }
  ],

  // KIRIM UCAPAN
  // Cara 1 (paling mudah): WhatsApp mempelai (format 62...). Tamu menekan Kirim, WhatsApp terbuka.
  waMempelai: "6281234567890",
  // Cara 2: ucapan tampil untuk semua tamu lewat Google Sheets. Tempel URL Apps Script (lihat panduan).
  urlSheets: ""
};
