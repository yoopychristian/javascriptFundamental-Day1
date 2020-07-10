function GanjilGenap(inputAngka) {

    let i;

    for (i = 1; i <= inputAngka; i++){
        if (i == inputAngka){
            if (i%2==0){
                console.log("GENAP")
            } else if (i%2!==0){
                console.log("GANJIL")
            }
        }
    }
}
GanjilGenap(6)
GanjilGenap(3)
