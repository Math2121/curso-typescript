class Data{
  //Variáveis públicas
  dia: number
  mes: number
  ano: number
  
  constructor(dia: number,mes: number, ano: number) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const aniversario = new Data(3, 11, 22)
aniversario.ano = 2200
console.log(aniversario)

class DataEsperta{

  constructor(public dia: number, public mes: number, public ano: number) {

  }
}

const aniver = new DataEsperta(3, 5, 22)
aniver.ano = 2200
console.log(aniver)


//Desafio
class Produto{
  constructor(public nome: string, public preco: number, public desconto: number = 0) {
    
  }
  public  resumo():string{
  return `${this.nome} custa R$ ${this.preco} (${this.precoDesconto()}%)`
  }
  precoDesconto():number {
    
    return this.preco * this.desconto
  }
}

// let produto1 = new Produto("feijão", 45.5)
// console.log(produto1)
let produto2 = new Produto("arroz", 20, 0.05)
// console.log(produto2)
// console.log(produto2.resumo())
console.log(produto2.resumo())

class Carro{
  private velocidadeAtual: number = 0
  constructor(public marca: string, public modelo: string, private velocidademaxima: number = 200) {
    
  }
  //Private = só e vísivel dentro da classe e não e passado por herança
  //Protected = tem todas as qualidades que o private tem mas e passado por herança
  protected alterarVelocidade(delta: number):number{
    const novaVelocidade = this.velocidadeAtual + delta
    const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidademaxima
    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade
    } else {
      this.velocidadeAtual = delta> 0 ? this.velocidadeAtual : 0
    }
    return this.velocidadeAtual
  }
  public acelerar():number {
    return this.alterarVelocidade(28)
  }
  public frear(): number {
    return this.alterarVelocidade(-5)
  }
}

const carr = new Carro("Ford", "200", 180)
console.log(carr.acelerar())
console.log(carr.frear())

//HErança
class Ferrari extends Carro{
  constructor(modelo: string, velocidademaxima: number) {
    super("Ferrari",modelo,velocidademaxima)
  }
  public acelerar(): number {
    return this.alterarVelocidade(28)
  }
  public frear(): number {
    return this.alterarVelocidade(-5)
  }
}

const f1 = new Ferrari( "F41", 250)
console.log(`${f1.marca}, ${f1.modelo}`)
console.log(f1.acelerar())
console.log(f1.frear())


//Get e Setters
class Pessoa{
  private _idade: number = 0
  //Pega o valor do atributo _idade
  get idade(): number{
    return this._idade
  }
  //Modifica o valor do atributo e o método Get pega
  set idade(valor: number){
    if (valor > 0 && valor <= 120) {
       this._idade = valor
    } 
  }
}

const pe = new Pessoa
pe.idade = 50
console.log(pe.idade)

//Static - usado quando não há necessidade de vc instanciar um objeto
class matematica {
  static pi: number = 3.145
  static areaCirc(raio: number): number {
    return this.pi * raio * raio
  }
}
console.log(matematica.pi = 6)
console.log(matematica.areaCirc(5))
 
 //Classe Abstrata - serve para extender atributos e métodos para suas classes filhas, não pode ser instanciada

abstract class Calc{
  protected res: number = 0
  abstract executar(...numeros: number[]): void
  getResult():number {
    return this.res
  }

}

class Soma extends Calc{
  executar(...numeros: number[]): void{
    this.res = numeros.reduce((total, valor) => total + valor)
  }
}


class Multiplica extends Calc {
  executar(...numeros: number[]): void {
    this.res = numeros.reduce((total, valor) => total * valor)
  }
}

let c1 = new Soma()
c1.executar(2, 2, 2)
console.log(c1.getResult())

 c1 = new Multiplica()
c1.executar(2, 2, 2)
console.log(c1.getResult())

//Singleton

class Unique{
  private static instance: Unique = new Unique
  private constructor() { }
  static getInstance(): Unique {
    return Unique.instance
  }

  agora() {
    return new Date
  }
}

console.log(Unique.getInstance().agora)

//Somente leitura
class Aviao{
  public readonly modelo: string
  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo
  }
}
const tipo = new Aviao('Tulipa', 'PT-ABC')
// não e perimitido atribuir valores nestes atributos
// tipo.modelo = "55"
console.log(tipo)