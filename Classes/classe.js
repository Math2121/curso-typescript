"use strict";
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 22);
aniversario.ano = 2200;
console.log(aniversario);
class DataEsperta {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniver = new DataEsperta(3, 5, 22);
aniver.ano = 2200;
console.log(aniver);
//Desafio
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$ ${this.preco} (${this.precoDesconto()}%)`;
    }
    precoDesconto() {
        return this.preco * this.desconto;
    }
}
// let produto1 = new Produto("feijão", 45.5)
// console.log(produto1)
let produto2 = new Produto("arroz", 20, 0.05);
// console.log(produto2)
// console.log(produto2.resumo())
console.log(produto2.resumo());
class Carro {
    constructor(marca, modelo, velocidademaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidademaxima = velocidademaxima;
        this.velocidadeAtual = 0;
    }
    //Private = só e vísivel dentro da classe e não e passado por herança
    //Protected = tem todas as qualidades que o private tem mas e passado por herança
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidademaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeAtual : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(28);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carr = new Carro("Ford", "200", 180);
console.log(carr.acelerar());
console.log(carr.frear());
//HErança
class Ferrari extends Carro {
    constructor(modelo, velocidademaxima) {
        super("Ferrari", modelo, velocidademaxima);
    }
    acelerar() {
        return this.alterarVelocidade(28);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const f1 = new Ferrari("F41", 250);
console.log(`${f1.marca}, ${f1.modelo}`);
console.log(f1.acelerar());
console.log(f1.frear());
//Get e Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    //Pega o valor do atributo _idade
    get idade() {
        return this._idade;
    }
    //Modifica o valor do atributo e o método Get pega
    set idade(valor) {
        if (valor > 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pe = new Pessoa;
pe.idade = 50;
console.log(pe.idade);
//Static - usado quando não há necessidade de vc instanciar um objeto
class matematica {
    static areaCirc(raio) {
        return this.pi * raio * raio;
    }
}
matematica.pi = 3.145;
console.log(matematica.pi = 6);
console.log(matematica.areaCirc(5));
//Classe Abstrata - serve para extender atributos e métodos para suas classes filhas, não pode ser instanciada
class Calc {
    constructor() {
        this.res = 0;
    }
    getResult() {
        return this.res;
    }
}
class Soma extends Calc {
    executar(...numeros) {
        this.res = numeros.reduce((total, valor) => total + valor);
    }
}
class Multiplica extends Calc {
    executar(...numeros) {
        this.res = numeros.reduce((total, valor) => total * valor);
    }
}
let c1 = new Soma();
c1.executar(2, 2, 2);
console.log(c1.getResult());
c1 = new Multiplica();
c1.executar(2, 2, 2);
console.log(c1.getResult());
//# sourceMappingURL=classe.js.map