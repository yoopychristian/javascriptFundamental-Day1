    let angka1 = 1
    let angka2 = 20
function FizzBuzz() {
    for(let i = angka1; i <= angka2; i++) {
        if (i % 10 == 0) {
            console.log("FIZZBUZZ")
        } else if (i % 5 == 0 ) {
            console.log("FIZZ")
        } else if (i % 2 == 0) {
            console.log("BUZZ")
        } else {
            console.log(i)
        }
    }
}

FizzBuzz(angka1, angka2);

