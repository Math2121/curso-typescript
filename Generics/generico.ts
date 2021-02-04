function echo(objeto:any){
    return objeto
}
console.log(echo('Tio'))

//Generics em Funções
function echoMelhor<T>(objeto:T):T{
    return objeto
}
console.log(echoMelhor('Tio').length)
console.log(echoMelhor<number>(54))
//Generics em Array
const avaliacoes: Array<number> = [10,35,9.5]
avaliacoes.push(8.9)
console.log(avaliacoes)

function imprimir<T>(args:T[]){
    args.forEach(elemento=>console.log(elemento))
}

imprimir([5,6,9])
imprimir<number>([5,3])
type Aluno = { nome:string, idade:number}
imprimir<Aluno>([{nome:"Teteu",idade:16}])

type Echo = <T>(data:T)=>T
const chamarEcho:Echo = echoMelhor
console.log(chamarEcho<string>('OII'))


abstract class Operacao<T,R>{
    constructor(public operando1:T, public operando2:T){}

    abstract executar():R
}

class SomaBinaria extends Operacao<number,number>{
    executar():number{
        return this.operando2 + this.operando1
    }
}
console.log(new SomaBinaria(3,4).executar())


//Desafio

class Fila<F>{
    constructor(public fila:F[]){}

    entrar(arg:F){
        this.fila.push(arg)
    }

    proximo():F{
const first = this.fila[0]
this.fila.splice(0,1)
return first
    }

    imprimir(){
        console.log(this.fila)
    }
}

console.log(new Fila<number>([5,9,6,12]))
console.log(new Fila<number>([5,9,6,12]).entrar(8))
console.log(new Fila<number>([5,9,6,12]).imprimir())
console.log(new Fila<number>([5,9,6,12]).proximo())