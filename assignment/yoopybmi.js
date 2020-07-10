let nama1 = "Rifky";
let nama2 = "Robby";
let bb1 = 80;
let bb2 = 70;
let tb1 = 1.6;
let tb2 = 1.7;
BMI(nama1, nama2, bb1, bb2, tb1, tb2)


function BMI(nama1, nama2, bb1, bb2, tb1, tb2) {
    let bmi1 = bb1 / (tb1 ^ 2);
    let bmi2 = bb2 / (tb2 ^ 2);
    let bmi;

    if (bmi1 > bmi2) {
        bmi = true;
    } else if (bmi1 < bmi2) {
        bmi = false;
    } else {
        console.log("BMI", nama1, "sama dengan BMI", nama2);
    }
    if (bmi == true) {
        console.log("BMI", nama1, "Lebih Tinggi Dari BMI", nama2);
    } else {
        console.log("BMI", nama2, "Lebih Tinggi Dari BMI", nama1);
    }
}
