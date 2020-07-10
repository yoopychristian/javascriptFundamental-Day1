function FizzBuzz() {

    let angka = 20

    for(let i = 1; i <= angka; i++) {
        if (i % 5 == 0 && i % 2 == 0) {
            cetakFizzBuzz("FIZZBUZZ")
        } else if (i % 5 == 0 && i % 2 != 0) {
           cetakFizzBuzz("FIZZ")
        } else if (i % 5 != 0 && i % 2 == 0) {
           cetakFizzBuzz("BUZZ")
        } else {
           cetakFizzBuzz(i)
        }
    }
}

function cetakFizzBuzz(kata){
let a = console.log(kata)
}

FizzBuzz()

