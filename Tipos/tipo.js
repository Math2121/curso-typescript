"use strict";
//String
const nome = "Jão";
console.log(nome);
//Não e permitido atribuir ouros valores já definidos pelo TS
// nome = 25
//Numbers
let idade = 27;
idade = 52.5;
console.log(idade);
//Tipos explícitos
let minhaidade;
// let minhaidade:string
minhaidade = 582;
console.log(typeof minhaidade);
minhaidade = '25';
console.log(typeof minhaidade);
//Array
let hobbies = ['PRato', 'abacaxi', 'morango'];
console.log(hobbies);
hobbies = [100, 200, 555];
console.log(hobbies);
//Tuplas - array com posições equnatidade pré-difinidas com tipos pré-definidos
let endereco = ["av", 25];
console.log(endereco);
endereco = ['5555', 54];
//Enums - UMA CADEIA DE ENUMERAÇÕES
var Cor;
(function (Cor) {
    Cor[Cor["Amarelo"] = 0] = "Amarelo";
    Cor[Cor["VErde"] = 1] = "VErde";
    Cor[Cor["marrom"] = 2] = "marrom";
})(Cor || (Cor = {}));
let corVerde = Cor.marrom;
console.log(corVerde);
//aNY
let pessoa = "Humano";
console.log(pessoa);
pessoa = 20;
console.log(pessoa);
// Função
function retorno() {
    // return number - não perimite pois  essa função deve retornar uma String
    return nome;
}
console.log(retorno());
//diz que essa função não retorna valor
function diga() {
    console.log("VAZIO");
}
diga();
function multiple(a, b) {
    return a * b;
}
console.log(multiple(4.5, 2));
//Tipo função - deve ser declarado os parãmetros e os tipos deles se houver e seu tipo de retorno
let calculo;
calculo = multiple;
console.log(calculo(5.5, 2));
//Objetos
let user = {
    nome: "MaRIA",
    age: 20
};
console.log(user);
//Desafio
function hora(hora) {
    if (hora <= 8) {
        return "Ponto normal";
    }
    else {
        return "Fora do horário";
    }
}
//Tipo personalizado
// type Funcionario = { trabalhador: string[], ponto: (x: number) => string } 
let funcionario = {
    trabalhador: ['Ronaldo', 'MArio', 'José'],
    ponto: hora
};
console.log(funcionario.trabalhador, funcionario.ponto(9));
let nota = 10;
console.log(nota);
nota = 'MAria';
console.log(nota);
//Never
function erro(msg) {
    throw new Error(msg);
}
const product = {
    nome: "MAria",
    preco: 5,
    validar() {
        if (!this.nome || this.nome.trim().length == 0) {
            erro("PRecisa haver um nome");
        }
        if (this.preco <= 0) {
            erro("Preço vazio");
        }
    }
};
product.validar();
const contato = {
    nome: "Mat",
    tel1: 25555555,
    tel2: null
};
console.log(contato.tel1);
console.log(contato.tel2);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipo.js.map