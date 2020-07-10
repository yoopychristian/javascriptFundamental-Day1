function Waktu(input) {
    if(input == 4 || input == 5){
        console.log("WAKTU BANGUN")
    } else if(input == 12 ){
        console.log("WAKTU ISTIRAHAT")
    } else if(input >= 8 , input <=11  || input >= 13, input<=17){
        console.log("WAKTU BELAJAR")
    } else if(input > 24){
        console.log("HANYA ADA 24 JAM DALAM SEHARI")
    } else {
        console.log("WAKTU MAIN")
    }
}

Waktu(input=20);