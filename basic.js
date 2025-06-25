let nama = "dila"; //can update
const name = "dila"; //can't update

//function
const halo = () =>{
    console.log('halo dunia');
}

function sapa(){ //sama tapi ga serupa
    console.log('halo dunia yang indah')
}

const hasil = sapa(); //functionnya dipanggil disini

//template literal

const namaku = "dila";
console.log(`halo aku ${namaku}`);

//async

async function ok() {
    return("data berhasil diambil");
}

ok().then(result => console.log(result));
ok(); //kalau ini data yang diambil dari function tadi ga akan tampil

//async untuk operasi asyncronous
async function getData() {
    try { //pake try dulu
        let response = await fetch('https://jsonplaceholder.typicode.com/users'); //get datanya
        if (!response.ok) { //semisal eror
            throw new Error("Data gagal diambil"); //ada massage
        }
        let data = await response.json(); //semisal sukses, langsung di format
        console.log(data); //nampilin
    } catch (error) {
        console.log("Terjadi Kesalahan: ", error); //eror bung
    }
}

getData(); //run

async function multipleGet() {
    let user = await fetch('https://jsonplaceholder.typicode.com/users');
    let userData = await user.json();

    let post = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userData[0].id}`);
    let postData = await post.json();

    console.log(userData);
    console.log(postData);
}

multipleGet();