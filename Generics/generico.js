"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('Tio'));
//Generics em Funções
function echoMelhor(objeto) {
    return objeto;
}
console.log(echoMelhor('Tio').length);
console.log(echoMelhor(54));
//Generics em Array
const avaliacoes = [10, 35, 9.5];
avaliacoes.push(8.9);
console.log(avaliacoes);
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([5, 6, 9]);
imprimir([5, 3]);
imprimir([{ nome: "Teteu", idade: 16 }]);
const chamarEcho = echoMelhor;
console.log(chamarEcho('OII'));
class Operacao {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends Operacao {
    executar() {
        return this.operando2 + this.operando1;
    }
}
console.log(new SomaBinaria(3, 4).executar());
//Desafio
class Fila {
    constructor(fila) {
        this.fila = fila;
    }
    entrar(arg) {
        this.fila.push(arg);
    }
    proximo() {
        const first = this.fila[0];
        this.fila.splice(0, 1);
        return first;
    }
    imprimir() {
        console.log(this.fila);
    }
}
console.log(new Fila([5, 9, 6, 12]));
console.log(new Fila([5, 9, 6, 12]).entrar(8));
console.log(new Fila([5, 9, 6, 12]).imprimir());
console.log(new Fila([5, 9, 6, 12]).proximo());
//# sourceMappingURL=generico.js.map