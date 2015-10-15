"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result1;
  var result2;
  var temp = original.value; //almacena en el, la variable temp el valor original.
  var conversor = /(^[-+]?\d+(?:\.\d*)?)(?:[eE]?([-+]?\d+))?\s*([fFcCkK])/; ///([-+]?\d+(?:\.\d*)?)\s*([fFcCkK])/;
                  
  var m = temp.match(conversor);
  
  if (m) {
    var num = m[1]; // lo que cogió el primer parentesis (el nº)
    var type = m[3]; // lo que cogieron los segundos parentesis si son celcius, farenheit o kelvin
    num = parseFloat(num);
    if (m[2] !== undefined){
      var exp = m[2];
      exp = parseInt(exp); // Convierte una string en entero

      if (exp<0){
        exp = -exp; 
        var cnt = 1, divide = 10;

        while(cnt < exp){
          divide = divide * 10;
          cnt++; 
        }

        if(divide !== 0) num = num/divide;

      } 
      else {
        var cnt = 1, divide = 10;

        while(cnt < exp){
          divide = divide * 10;
          cnt++; 
        }
        if(divide !== 0) num = num*divide; 
      }
    }
    if (type == 'c' || type == 'C') {
      result1 = (num * 9/5)+32;
      result1 = result1.toFixed(1)+" Farenheit"
      result2 = num + 273.15;
      result2 = result2.toFixed(1)+" Kelvin"
    }
    else if (type == 'f' || type == 'F'){
      result1 = (num - 32)*5/9;
      result1 = result1.toFixed(1)+" Celsius"
      result2 = ((num - 32)*5/9) + 273.15;
      result2 = result2.toFixed(1)+" Kelvin"
    }
    else{
      result1 = num - 273.15;
      result1 = result1.toFixed(1)+" Celsius"
      result2 = (num * 9/5) - 459.67;
      result2 = result2.toFixed(1)+" Farenheit"
    }
    converted1.innerHTML = result1;
    converted2.innerHTML = result2;
    converted.innerHTML = "";
  }
  else {
    converted.innerHTML = "ERROR! Intenta poner algo como:'-4.2C'";  //no es una entrada valida
    converted1.innerHTML = "";
    converted2.innerHTML = "";
  }
}