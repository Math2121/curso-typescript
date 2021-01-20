const somar = function (n1: number, n2: number): number{
  return n1 + n2
}

console.log(somar(2, 2))

const subtrair = (n1: number, n2: number):number => n1 - n2
console.log(subtrair(5,2))


const numbers = [1, 5, 3, 6]
console.log(Math.max(...numbers))

const turma: string[] = ['J', 'm', 'p']
const turmab: string[] = ['julia', 'pedro', ...turma]

console.log(turmab)

const retorna = (...args: number[]): number[] => {
  return args
}

const num = retorna(1, 2, 5, 3, 6, 65)
console.log(num)
console.log(retorna(...numbers))

const tupla: [number, string, boolean] = [1, ' p', true]

function tuplaParam(a: number, b: string, c: boolean): void{
  console.log(`${a}, ${b},${c}`)
}
tuplaParam(...tupla)


function tuplaParam2(...params: [number, string, boolean]): void{
  console.log(params)
}

tuplaParam2(...tupla)




const carater = ['mator20', 20]
const [motor, ano] = carater
console.log(motor, ano)


const us = {
  nome: "Debora",
  preco: 20,
  carater: {
    w:'Importada'
  }
}

const { nome: n, preco: p, carater: { w:importa } } = us
console.log(n)
console.log(p)
console.log(importa)

//Desafio 1

const dobro = (valor:number):number => valor * 2 
console.log(dobro(10))
//desafio 2
const dizerOla = (nome:string = "Pessoa"):void =>{
  if (nome === undefined) { nome = "Pessoa" }
  console.log("Ola, " + nome)
}
dizerOla()
dizerOla("Anna")

//desafio 3
// const nu = [-3, 33, 38, 5]
// arry.push(...nu)
// console.log(Math.min(...arry))

//desafio 4
const nums = [-3, 33, 38, 5]
const array = [55, 20, ...nums]
console.log(array)

//desafio 5
const notas = [8.5, 6.3, 9.4]
const [nota1,nota2,nota3] = notas
console.log(nota1, nota2, nota3)

const cientista = { primeiroNome: "Will", experiencia: 12 }
const { primeiroNome,experiencia} = cientista
console.log(primeiroNome, experiencia)


