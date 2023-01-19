// --- Pakai Metode JQuery ---
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=c36d9c06&s=avengers",
//   success: (movies) => console.log(movies),
// });

// --- Pakai Metode Vanila JS ---
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };

// xhr.open("get", "http://www.omdbapi.com/?apikey=c36d9c06&s=avengers");
// xhr.send();

// --- Pakai Metode JS Modern ---
// fetch("http://www.omdbapi.com/?apikey=c36d9c06&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// ---- PROMISE ----
// Sebuah Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// Janji (terpenuhi / ingkar)
// States (fulfilled / Rejected / Pending)
// Callback (resolve / reject / finally)
// Aksi (then / catch)

// Contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah di Tepati!");
//   } else {
//     reject("Ingkar Janji...");
//   }
// });

// janji1
//   .then((response) => console.log("OK!, " + response))
//   .catch((response) => console.log("Not OK!, " + response));

// Contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati Setelah Beberapa Waktu!");
//     }, 1000);
//   } else {
//     setTimeout(() => {
//       resolve("TIdak di Tepati Setelah Beberapa Waktu!");
//     }, 2000);
//   }
// });

// console.log("Mulai");
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("Selesai Menunggu"))
//   .then((response) => console.log("OK!, " + response))
//   .catch((response) => console.log("Not OK!, " + response));
// console.log("Selesai");

// ---- PROMISE --> promise.all() ----

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Gerald Alessandro T",
        pemeran: "Aditya, Ibrahim",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Surabaya",
        temp: 30,
        kondisi: "Cerah Berawa",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca])
  // .then((response) => console.log(response));
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
