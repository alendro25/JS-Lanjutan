const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Mencari angka >= 3
// For
// const newAngka = [];
// for (let i = 0; i < angka.length; i++){
//     if(angka[i] >= 3){
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// -- Filter --
// const newAngka = angka.filter(function(a){
//     return a>=3;
// });
// console.log(newAngka);

// -- Map --
// Mengalikan tiap angka *2
// const newAngka = angka.map(function(a){
//     return a*2;
// });
// console.log(angka);
// console.log(newAngka);

// -- Reduce --
// Menjumlahkan seluruh variabel pada array
// const newAngka = angka.reduce((accumulator, currentValue)=> accumulator + currentValue);
//     console.log(newAngka);

// -- Method Chaining(berantai) --
// Cari angka>5
// Setelah itu *3
// Kemudian di Jumlahkan
const hasil = angka.filter(a => a>5).map(a => a*3).reduce((acc, cur) => acc+cur);
console.log(hasil);