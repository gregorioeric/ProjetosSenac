/**
 * Operadores de Comparação
 * 
 * == : Igualdade
 * != : Diferente
 * >  : Maior que
 * <  : Menor que
 * >= : Maior ou igual a
 * <= : Menor ou igual a
 * === : Igualdade estrita
 * !== : Diferença estrita
 */

let numero1 = 10;
let numero2 = 10;

const resultado1 = numero1 == numero2;  // true
const resultado2 = numero1 != numero2;  // false
const resultado3 = numero1 > numero2;   // false
const resultado4 = numero1 < numero2;   // false
const resultado5 = numero1 >= numero2;  // true
const resultado6 = numero1 <= numero2;  // true
const resultado7 = numero1 === numero2; // true
const resultado8 = numero1 !== numero2; // false

console.log("resultado1: " + resultado1); // true
console.log("resultado2: " + resultado2); // false
console.log("resultado3: " + resultado3); // false
console.log("resultado4: " + resultado4); // false
console.log("resultado5: " + resultado5); // true
console.log("resultado6: " + resultado6); // true
console.log("resultado7: " + resultado7); // true
console.log("resultado8: " + resultado8); // false

/**
 * Exercício 1
 * 
 *  Crie uma variavel numero e atribua um valor a ela
 *  
 *  Se o número for maior que 10, exiba "Maior que 10"
 *  Se o número for menor que 10, exiba "Menor que 10"
 *  Se o número for igual a 10, exiba "Igual a 10"
 */
const numero = 10;

if (numero > 10) {
  console.log("Maior que 10");
} else if (numero < 10) {
  console.log("Menor que 10");
} else {
  console.log("Igual a 10");
}