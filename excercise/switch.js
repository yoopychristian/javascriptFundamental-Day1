// let hari = 10;
// switch (hari) {
//     case 1:
//         console.log("minggu");
//         break;
//     case 2:
//         console.log("senin");
//         break;
//     case 3:
//         console.log("selasa");   
//         break;
//     case 4:
//         console.log("rabu");
//         break;
//     case 5:
//         console.log("kamis");
//         break; 
//     case 6:
//         console.log("jumat");
//         break;
//     case 7:
//         console.log("sabtu");     
//         break;    
//     default:
//         break;
// }

//list makanan
/*

1. Nasi = Rp. 6000
2. Ayam Goreng = Rp. 15000
3. Ayam Bakar = Rp. 18000
4. Bebek Goreng = Rp. 25000
5. Bebek Bakar = Rp. 30000
*/

let uang = 25000;  
switch (uang) {
    case 6000:
        console.log("nasi");
        break;
    case 15000:
        console.log("Ayam Goreng");
        break;
    case 18000:
        console.log("Ayam Bakar");   
        break;
    case 25000:
        console.log("Bebek Goreng");
        break;
    case 30000:
        console.log("Bebek Bakar");
        break; 
    default:
        break;
}

function perhitungan(operan1, operan2, operator) {
    switch (operator){
    case "+":
        console.log(operan1 + operan2);
        break;
    case "-":
        console.log(operan1 - operan2);
    }
}

perhitungan(10, 20, "+");
perhitungan(10, 20, "-");


function order(pesanan){
var ayam = 10000;
var ikan = 15000;
var nasi = 5000;

switch (pesanan) {
    case "ayam":
        console.log(ayam);
        break;
    case "ikan":
        console.log(ikan);
        break;
    case "nasi":
        console.log(nasi);
        break;
    case "nasi ikan":
        console.log(nasi + ikan);
        break;
    case "nasi ayam":
        console.log(nasi + ayam);
        break;
    case "nasi ayam ikan":
        console.log(nasi+ayam+ikan);
        break;
    default:
        break;
    }
}

order(pesanan="nasi ayam ikan");

