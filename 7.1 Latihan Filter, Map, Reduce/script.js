// Mengambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// Pilih yg hanya JAvASCRIPT LANJUTAN
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
  // console.log(jsLanjut);

  // Ambil Durasi Masing2 Video
  .map((item) => item.dataset.duration)

  // Ubah Durasi Menjadi Float, Ubah menit jadi detik
  .map((waktu) => {
    // 10:36 -> [10, 36] split
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // Menjumlahkan Semua Detiknya
  .reduce((total, detik) => total + detik);

// Ubah Format menjadi Jam, Menit, Detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// Simpan di DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jmlVideos = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;

const pJmlhVideos = document.querySelector(".jumlah-video");
pJmlhVideos.textContent = `${jmlVideos} Videos.`;

console.log(jmlVideos);
