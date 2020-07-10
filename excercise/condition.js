//if statement

let angka = 10;
if (angka == 0){
    console.log(`${angka} adalah bilangan netral`);
} else if (angka % 2 == 0){
    console.log(`${angka} adalah bilangan genap`);
} else  {
    console.log(`${angka} adalah bilangan ganjil`);
}

// ternary

// condition ? statemen1 : statment2;

let bilangan = 1
let apakahBilGenap = (bilangan == 0) ? "Bilangan netral" : (bilangan % 2 == 0) ? "Bilangan genap" : "Bilangan ganjil";
console.log(apakahBilGenap)

let isEven = (bilangan % 2 ==  0);
console.log(isEven)