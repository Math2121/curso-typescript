//String
const nome:string = "Jão"
console.log(nome)
//Não e permitido atribuir ouros valores já definidos pelo TS
// nome = 25

//Numbers
let idade:number = 27
idade = 52.5
console.log(idade)

//Tipos explícitos
let minhaidade
// let minhaidade:string
minhaidade = 582
console.log(typeof minhaidade)
minhaidade = '25'
console.log(typeof minhaidade)

//Array
let hobbies: any[] = ['PRato', 'abacaxi', 'morango'];
console.log(hobbies)
hobbies = [100, 200, 555]
console.log(hobbies)

//Tuplas - array com posições equnatidade pré-difinidas com tipos pré-definidos
let endereco: [string, number] = ["av", 25]
console.log(endereco)
endereco = ['5555', 54]

//Enums - UMA CADEIA DE ENUMERAÇÕES

enum Cor{
  Amarelo, 
  VErde,
  marrom
}
let corVerde = Cor.marrom
console.log(corVerde)

//aNY
let pessoa:any = "Humano"
console.log(pessoa)
pessoa = 20
console.log(pessoa)

// Função
function retorno(): string{
  // return number - não perimite pois  essa função deve retornar uma String
  return nome
}
console.log(retorno())

//diz que essa função não retorna valor
function diga(): void{
  console.log("VAZIO")
}

diga()

function multiple(a:number, b:number): number{
  return a*b
}
console.log(multiple(4.5, 2))

//Tipo função - deve ser declarado os parãmetros e os tipos deles se houver e seu tipo de retorno
let calculo: (x: number, b: number) => number

calculo = multiple
console.log(calculo(5.5, 2))

//Objetos

let user: { nome: string, age: number } = {
  nome: "MaRIA",
  age:20
}
console.log(user)

//Desafio
function hora(hora: number) {
  if (hora <= 8) {
    return "Ponto normal"
  } else {
    return "Fora do horário"
  }
}
//Tipo personalizado
// type Funcionario = { trabalhador: string[], ponto: (x: number) => string } 
let funcionario: { trabalhador: string[], ponto: (x: number) => string }  = {
  trabalhador: ['Ronaldo', 'MArio', 'José'],
  ponto: hora
  }
console.log(funcionario.trabalhador, funcionario.ponto(9))

let nota: number | string = 10
console.log(nota)
nota = 'MAria'
console.log(nota)
//Never
function erro(msg: string): never{
  throw new Error(msg);
}

const product = {
  nome: "MAria",
  preco: 5,
  validar() {
    if (!this.nome || this.nome.trim().length == 0) {
      erro("PRecisa haver um nome")
    }
    if (this.preco <= 0) {
      erro("Preço vazio")
    }
  }
}

product.validar()

//Null

type Contato = {
  nome: string,
  tel1: number,
  tel2: number | null
}
const contato: Contato = {
  nome: "Mat",
  tel1: 25555555,
  tel2: null
  

}

console.log(contato.tel1)
console.log(contato.tel2)

// Desafio 2
type ContaBancaria = {
  saldo: number,
  depositar:(valor:number)=>void
}
let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor:number) {
    this.saldo += valor
  }
}
type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[]
}
let correntista:Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)



