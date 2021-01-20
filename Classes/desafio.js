"use strict";
// Exercício 1 - Classe
class Moto {
    constructor(nome, velocidade) {
        this.nome = "";
        this.velocidade = 0;
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto('Ducati', 200);
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
class objeto2D {
    constructor(base, altura) {
        this.base = 0;
        this.altura = 0;
        this.base = base;
        this.altura = altura;
    }
}
class objeto3 extends objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new objeto3(20, 15);
retangulo.base = 5;
retangulo.altura = 7;
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
class estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    //Modifica o valor do atributo e o método Get pega
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const estagio = new estagiario;
console.log(estagio.primeiroNome);
estagio.primeiroNome = 'Le';
console.log(estagio.primeiroNome);
estagio.primeiroNome = 'Leonardo';
console.log(estagio.primeiroNome);
//# sourceMappingURL=desafio.js.map