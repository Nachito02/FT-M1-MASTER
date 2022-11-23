"use strict";

function BinarioADecimal(num) {
  let nuevoArreglo = []; // creo un nuevo arreglo para guardar el string

  nuevoArreglo = num.split("").reverse(); // guardo el string y con el metodo reverse lo invierto

  let suma = 0; // creo la variable suma para guardar la suma de los numeros

  for (let i = 0; i < nuevoArreglo.length; i++) { // creo un for para recorrer todos los elementos de arreglo

    suma = suma + nuevoArreglo[i] * 2 ** i;
  }

  return suma;
}



function DecimalABinario(num) {
  let almacenadorResiduo = ""; //creo la variable que va a almacenar

  while (num !== 0) {
    //mientras que el num sea diferente a 0 se ejecuta el while
    almacenadorResiduo = (num % 2) + almacenadorResiduo; // declaro la variable residuo, que es el resto de num /2
    num = Math.floor(num / 2); // actualizo el num despues de almacenar el residuo
   
  }

  return almacenadorResiduo; //retorno la nuevaString


}

var hola = 10

console.log(hola)

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};

