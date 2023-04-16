//Módulo que contém os cálculos que serão consumidos por outros módulos usando o ES6
export class Circulo {
    constructor(r) {
        this.raio = r;
    }

    area() {
        return Math.PI * this.raio ** 2;
    }

    circunferencia() {
        return 2 * Math.PI * this.raio;
    }
};