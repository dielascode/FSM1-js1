let nama = "dila";
const umur = 18;
//same

//arrow function
const sapa = (nama) => {
    return(`Halo, ${nama}`);
}
console.log(sapa("dila"));

const tambah = (a, b) => a + b;
console.log(tambah(6, 6))

function say(nama) {
    console.log(`Namaku ${nama}`);
}
say(nama);

const kali = (c, d) => c*d;
console.log(kali(2, 2));

//template literals
const namee = "diluy";
console.log(`Halo, ${namee}`);

//destructuring
const user = {namaa: "Dila", umurr: 18};
const {namaa, umurr} = user;
// console.log(`Halo namaku ${user.namaa}, dan umurku ${user.umurr}`)
console.log(`Halo namaku ${namaa}, dan umurku ${umurr}`); //biar aksesnya lebih cepet

const buku = {judul: "Bumi", penulis: "Tere Liye", tahun: 2024}
const {judul, penulis, tahun} = buku;
console.log(`Buku ini berjudul ${judul} yang ditulis oleh ${penulis}`);

//Spread Operator ...
const angka = [1, 2, 3];
const gabungan = [...angka, 4, 5]
console.log(gabungan);

const array1 = [1, 2];
const array2 = [3, 4];
const gabung = [...array1, ...array2];
console.log(gabung);

//Default Parameter
const sopo = (jeneng = "konco") => {
    console.log(`Hai, ${jeneng}`);
}

sopo();