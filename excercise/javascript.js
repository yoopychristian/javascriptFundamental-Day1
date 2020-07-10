// 1. menggunakan variable berupa let, var maupun const
// 2. membuat dengan cara menggunakan const dan masukan phi yang bernilai 3.14
// 3. let result = undefined + 11; // NaN
//    let result = null + 11; // 0 + 11 = 11
// 4.
let x=1;
x=x+"1";
console.log(x); // 11
//5
var y = 0;
console.log(--y); // -1
console.log(y++); // -1
//6
let z = 1
console.log(z++); //1
console.log(++z); //3
//7
const c = 1;
console.log(c + 1);
// console.log(c++);
//8
let a;
a = 1;
console.log(a);
//9
const telur = 12

let telurA = 24;
let telurB = 27;
let telurC = 56;
let telurD = 67;
let telurE = 73;

// // let beliTelur = telurA/12;
// // let beliTelurB = telurB/12;
// // let beliTelurC= Math.floor(telurC/12);
// // let sisaHasil = telurC%12;

function hitungTelur(telur){
    lusin = Math.floor(telur / 12)
    butir = (telur % 12)
    console.log("Anda Memiliki " + lusin, "lusin, dan", + butir, "butir telur")
}

hitungTelur(telurA)
hitungTelur(telurB)
hitungTelur(telurC)
hitungTelur(telurD)
hitungTelur(telurE)


// let sisaHasil = telurC%12;
// let beliTelurC= (telurC-sisaHasil)/12;


// console.log("anda memiliki" + " " + beliTelurC +" " +"lusin sisa telur " + sisaHasil);

//10

// let telurA = 144;
// let telurB = 1342;
// let telurC = 4675;
// let telurD = 8723;
// let telurE = 9394;

// // console.log("Anda memiliki", Math.floor(telurA / 144), "gross,", Math.floor((telurA % 144) / 12), "lusin, dan", (telurA % 144) % 12, "telur")
// // console.log("Anda memiliki", Math.floor(telurB / 144), "gross,", Math.floor((telurB % 144) / 12), "lusin, dan", (telurB % 144) % 12, "telur")
// // console.log("Anda memiliki", Math.floor(telurC / 144), "gross,", Math.floor((telurC % 144) / 12), "lusin, dan", (telurC % 144) % 12, "telur")
// // console.log("Anda memiliki", Math.floor(telurD / 144), "gross,", Math.floor((telurD % 144) / 12), "lusin, dan", (telurD % 144) % 12, "telur")
// // console.log("Anda memiliki", Math.floor(telurE / 144), "gross,", Math.floor((telurE % 144) / 12), "lusin, dan", (telurE % 144) % 12, "telur")

// function hitungTelur(telur){
//     gross = Math.floor(telur / 144)
//     lusin = Math.floor(telur % 144)
//     butir = Math.floor(telur % 144 % 12)
//     console.log("Anda Memiliki " + gross, "gross", + lusin, "lusin, dan", + butir, "butir telur")
// }

//     hitungTelur(telurA)
//     hitungTelur(telurB)
//     hitungTelur(telurC)
//     hitungTelur(telurD)
//     hitungTelur(telurE)