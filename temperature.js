"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

function Medida (num, tipo) {
  this.num = num;
  this.tipo = tipo;
}

function Temperatura (num, tipo) {
  Medida.call(this, num, tipo);
}

Temperatura.prototype = new Medida();

function calculate() {
  var result1 = new Temperatura();
  var result2 = new Temperatura();
  var temp = original.value; //almacena en el, la variable temp el valor original.
  var conversor = /(^[-+]?\d+(?:\.\d*)?)(?:[eE]?([-+]?\d+))?\s*([fFcCkK])/;
  var m = temp.match(conversor);
  if (m) {
    var med = new Temperatura()
    med.num = m[1];
    med.tipo = m[3];
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

        if(divide !== 0) med.num = med.num/divide;

      } 
      else {
        var cnt = 1, divide = 10;

        while(cnt < exp){
          divide = divide * 10;
          cnt++; 
        }
        if(divide !== 0) med.num = med.num*divide; 
      }
    }
    if (med.tipo == 'c' || med.tipo == 'C') {
      result1.num = (med.num * 9/5)+32;
      result1.num = result1.num.toFixed(1)+" Farenheit";
      result2.num = (med.num*1)+273.15;
      result2.num = result2.num.toFixed(1)+" Kelvin";
      
    }
    else if (med.tipo == 'f' || med.tipo == 'F'){
      result1.num = (med.num - 32)*5/9;
      result1.num = result1.num.toFixed(1)+" Celsius";
      result2.num = ((med.num - 32)*5/9) + 273.15;
      result2.num = result2.num.toFixed(1)+" Kelvin";
    }
    else{
      result1.num = med.num - 273.15;
      result1.num = result1.num.toFixed(1)+" Celsius";
      result2.num = (med.num * 9/5) - 459.67;
      result2.num = result2.num.toFixed(1)+" Farenheit";
    }
    converted1.innerHTML = result1.num;
    converted2.innerHTML = result2.num;
    converted.innerHTML = "";
  }
  else {
    converted.innerHTML = "ERROR! Intenta poner algo como:'-4.2C'";  //no es una entrada valida
    converted1.innerHTML = "";
    converted2.innerHTML = "";
  }
}