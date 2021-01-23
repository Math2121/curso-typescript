///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRet.ts"/>

console.log(Geometria.Areas.circunferencia(50))
console.log(Geometria.Areas.retangulo(50, 20))

// Namespace alinhados
// namespace Geo {
//  export namespace Areas {
//     const PI = 3.14
//     export function circunferencia(raio: number): number {
//       return PI * Math.pow(raio, 2)
//     } 
//     export function retangulo(base: number, altura: number): number {
//       return base * altura
//     }
//   }
// }
// console.log(Geo.Areas.circunferencia(50))
// console.log(Geo.Areas.retangulo(50, 20))