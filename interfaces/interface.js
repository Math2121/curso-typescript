"use strict";
function saudacao(pessoa) {
    console.log(`Olá ${pessoa.nome}`);
}
function mudaNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoaA = {
    nome: 'Joao',
    idade: 45,
    saudar(sobrenome) {
        console.log(sobrenome);
    }
};
saudacao(pessoaA);
mudaNome(pessoaA);
saudacao(pessoaA);
// saudacao({nome:'Carla',altura:45})
pessoaA.saudar('Anaquim');
//Classes com Interface
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log(sobrenome);
    }
}
const client = new Cliente();
client.nome = 'Han';
saudacao(client);
client.saudar('Solo');
console.log(client.ultimaCompra);
let potencia;
potencia = (base, exp) => {
    return Math.pow(base, exp);
};
console.log(potencia(5, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
const cli = {
    nome: 'Pedro',
    toString() {
        return this.nome;
    }
};
cli.log();
//# sourceMappingURL=interface.js.map