// Exercício 1 - Classe
class Moto {
  nome: string = ""
  velocidade: number = 0
  constructor(nome: string, velocidade: number) {
    this.nome = nome
    this.velocidade = velocidade
  }
  buzinar(): void {
    console.log('Toooooooooot!')
  }
  acelerar(delta: number): void {
    this.velocidade = this.velocidade + delta
  }


}

const moto = new Moto('Ducati', 200)
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// Exercício 2 - Herança
class objeto2D {


  base: number = 0
  altura: number = 0
  constructor(base: number, altura: number) {
    this.base = base
    this.altura = altura
  }
}
class objeto3 extends objeto2D {

  area(): number {
    return this.base * this.altura
  }
}

const retangulo = new objeto3(20, 15)
retangulo.base = 5
retangulo.altura = 7

console.log(retangulo.area())


// Exercício 3 - Getters & Setters
class estagiario {
  private _primeiroNome: string = ''
  get primeiroNome(): string {
    return this._primeiroNome
  }
  //Modifica o valor do atributo e o método Get pega
  set primeiroNome(valor: string) {

    if (valor.length >= 3) {
      this._primeiroNome = valor
    } else {
      this._primeiroNome = ''
    }
  }
}
const estagio = new estagiario
console.log(estagio.primeiroNome)
estagio.primeiroNome = 'Le'
console.log(estagio.primeiroNome)
estagio.primeiroNome = 'Leonardo'
console.log(estagio.primeiroNome)
