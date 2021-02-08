
function logarClasse(constructor:Function){
console.log(constructor)
}

function decoratorVazio(_:Function){}
function logarClasseSe(valor:boolean){
    return valor ? logarClasse : decoratorVazio
}
function decorator(obj:{a:string,b?:number}){
    return function(_:Function):void{
        console.log(obj.a, " ", obj.b)
    }
}

// @logarClasse
// @logarClasseSe(true)
// @decorator({a:'tste',b:125})


type Construtor = {new(...args:any[]):{}}
function logarObjeto(construtor:Construtor){
    console.log("Objeto")
    return class extends construtor{
        constructor(...args:any[]){
        console.log("Antes")
        super(...args)
        console.log("Depois...")
        }

    }
}

// new Eletrodmestico()


interface Eletrodomestico{
    imprimir?():void
}
@imprimivel
class Eletrodmestico{
    constructor(){
        console.log("Novos")
    }
}

function imprimivel(construtor:Function){
    construtor.prototype.imprimir = function(){
        console.log(this)
    }


}
const eletro = new Eletrodmestico()
// eletro.imprimir  && eletro.imprimir()


// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}
@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}
 
function perfilAdmin<T extends Construtor>(constrtutor: T){
    return class extends constrtutor{
        constructor(...args:any[]){
            super(...args)
            if(!usuarioLogado || !usuarioLogado.admin){
                throw new Error("Sem permissão")
            }
        }
    }

}
new MudancaAdministrativa().critico()


class ContaCorrente {
    @NaoNEgativo
    private saldo: number

    constructor(saldo: number) {
        this.saldo = saldo
    }

    @congelar
    sacar(@paramInfo valor: number) {
        if(valor <= this.saldo) {
            this.saldo -= valor
            return true
        } else {
            return false
        }
    }

    @congelar
    getSaldo() {
        return this.saldo
    }
}

const cc = new ContaCorrente(10248.57)
cc.sacar(5000)
cc.sacar(5248.57)
cc.sacar(0.1)
console.log(cc.getSaldo())

// cc.getSaldo = function() {
//     return this['saldo'] + 7000
// }
console.log(cc.getSaldo())

// Object.freeze()
function congelar(alvo: any, nomeMetodo: string,
    descritor: PropertyDescriptor) {
    console.log(alvo)
    console.log(nomeMetodo)
    descritor.writable = false
}

function NaoNEgativo(alvo:any,nomePropriedade:string){
    delete alvo[nomePropriedade]
    Object.defineProperty(alvo,nomePropriedade,{
        get:function():any{
return alvo['__'+ nomePropriedade]
        } ,
        set:function(valor:any):void{
            if(valor<0){
                throw new Error("Saldo negativo")
            }else[
                alvo['_'+nomePropriedade] = valor
            ]
        }   
    })
}

function paramInfo(alvo:any,nomeMEtodo:string, indice:number){
    console.log(alvo)
    console.log(nomeMEtodo)
    console.log(indice)
}