/**
 * Operadores Lógicos
 * 
 * && : AND
 * || : OR
 * !  : NOT
 */

let a = 8;
let b = 8;
const c = true;
const d = false;

console.log("a && b: " + (a && b)); // true
console.log("a || b: " + (a || b)); // true
console.log("c && d: " + (c && d)); // false
console.log("c || d: " + (c || d)); // true
console.log("!c: " + (!c)); // false
console.log("!d: " + (!d)); // true

/**
 * Exercicios
 * 1 - Crie uma variavel chamada nome e atribua uma string vazia
 * 2 - Verificar com o operador de negação se a variavel nome está vazia
 * 3 - Se estiver vazia, atribua o valor "Visitante" para a variavel nome
 * 4 - Exiba o valor da variavel nome no console
 */

let nome = "";

console.log(!nome);

nome = "Visitante";

console.log(nome);