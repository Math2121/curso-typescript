"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logarClasse(constructor) {
    console.log(constructor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a, " ", obj.b);
    };
}
function logarObjeto(construtor) {
    console.log("Objeto");
    return class extends construtor {
        constructor(...args) {
            console.log("Antes");
            super(...args);
            console.log("Depois...");
        }
    };
}
let Eletrodmestico = class Eletrodmestico {
    constructor() {
        console.log("Novos");
    }
};
Eletrodmestico = __decorate([
    imprimivel
], Eletrodmestico);
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
const eletro = new Eletrodmestico();
// eletro.imprimir  && eletro.imprimir()
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
function perfilAdmin(constrtutor) {
    return class extends constrtutor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error("Sem permissão");
            }
        }
    };
}
new MudancaAdministrativa().critico();
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    NaoNEgativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
cc.sacar(5248.57);
cc.sacar(0.1);
console.log(cc.getSaldo());
// cc.getSaldo = function() {
//     return this['saldo'] + 7000
// }
console.log(cc.getSaldo());
// Object.freeze()
function congelar(alvo, nomeMetodo, descritor) {
    console.log(alvo);
    console.log(nomeMetodo);
    descritor.writable = false;
}
function NaoNEgativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo['__' + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error("Saldo negativo");
            }
            else
                [
                    alvo['_' + nomePropriedade] = valor
                ];
        }
    });
}
function paramInfo(alvo, nomeMEtodo, indice) {
    console.log(alvo);
    console.log(nomeMEtodo);
    console.log(indice);
}
//# sourceMappingURL=decorators.js.map