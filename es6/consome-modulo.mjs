//Consome calculadora.mjs usando ES6
import {area, circunferencia as circ, circunferencia} from "./calculadora.mjs";

console.log(`Área do círculo de raio 4 é ${area(4)}`);
console.log(`Circunferência do círculo de raio 4 é ${circ(4)}`);

import {Circulo} from "./circulo.mjs";

const c2 = new Circulo(2);
console.log(`Área do círculo de raio 2 é ${c2.area(2)}`);

