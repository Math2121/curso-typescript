interface Humano{
  nome: string // atributo obrigatório
  idade?: number //atributos que são opicionais dentro da interface
  [prop: string]: any // atributos que são dinãmicos que não são identificados
  saudar(sobrenome:string):void
}
function saudacao(pessoa: Humano) {
  console.log(`Olá ${pessoa.nome}`)
  
}
function mudaNome(pessoa: Humano) {
  pessoa.nome = 'Joana'
}
const pessoaA:Humano = {
  nome: 'Joao',
  idade: 45,
  saudar(sobrenome: string) {
    console.log(sobrenome)
  }
}
saudacao(pessoaA)
mudaNome(pessoaA)
saudacao(pessoaA)
// saudacao({nome:'Carla',altura:45})
pessoaA.saudar('Anaquim')
//Classes com Interface
class Cliente implements Humano{
  nome: string = ''
  ultimaCompra: Date = new Date
  saudar(sobrenome: string) {
    console.log(sobrenome)
  }

}

const client = new Cliente()
client.nome = 'Han'
saudacao(client)
client.saudar('Solo')
console.log(client.ultimaCompra)


//Interface Funcao

interface FucaoCalc{
  (a:number,b:number):number
}
let potencia: FucaoCalc
potencia = (base: number, exp: number):number =>{
  return base ** exp
}
console.log(potencia(5,10))


// Herança
interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC extends A, B {
  c(): void
}

class RealA implements A {
  a(): void { }
}

class RealAB implements A, B {
  a(): void { }
  b(): void { }
}

class RealABC implements ABC {
  a(): void { }
  b(): void { }
  c(): void { }
}

abstract class AbstrataABD implements A, B {
  a(): void { }
  b(): void { }
  abstract d(): void
}

interface Object {
  log(): void
}

Object.prototype.log = function () {
  console.log(this.toString())
}

const x = 2
const y = 3
const z = 4

x.log()
y.log()
z.log()

const cli = {
  nome: 'Pedro',
  toString() {
    return this.nome
  }
}
cli.log()