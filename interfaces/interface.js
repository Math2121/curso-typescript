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
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    obter(chave) {
        const result = this.itens.filter(i => i.chave === chave);
        return result ? result[0] : null;
    }
    colocar(par) {
        const emcomtrado = this.obter(par.chave);
        if (emcomtrado) {
            emcomtrado.valor = par.valor;
        }
        else {
            this.itens.push(par);
        }
    }
    limpar() {
        this.itens = new Array();
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=interface.js.map