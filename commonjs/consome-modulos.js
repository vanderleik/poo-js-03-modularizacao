//Consome calculadora.js usando CommonJs
const circulo = require('./calculadora.js');
console.log(`Área do círculo de raio 4 é ${circulo.area(4)}`);

const {area} = require("./calculadora.js");
console.log(`Área do círculo de raio 2 é ${area(2)}`);

//Consome class Circulo
const Circulo = require("./circulo.js");
const c1 = new Circulo(4);
console.log(`Área do círculo de raio 4 é ${c1.area(4)}`);

