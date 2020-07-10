function Pyramid() {

    let rows = 10;

      for (var i=1;i<=10;i++){
        for (var j=1;j<=i;j++){
          process.stdout.write("*");
       }
       console.log("");
      }
  }

Pyramid()
