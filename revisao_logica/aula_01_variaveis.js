/**
 * Variaveis
 * 
 * O que são? 
 * Variaveis são espaços na memoria que guardam informações
 * 
 * Como declarar? 
 * 
 * let nomeDaVariavel = "valor"; 
 * let é uma variavel que pode ser alterada, pois ela é uma variavel local
 * 
 * const nomeDaVariavel = "valor";
 * const é uma variavel que não pode ser alterada, pois ela é uma variavel constante
 * 
 * var nomeDaVariavel = "valor";
 * var é uma variavel global que pode ser alterada, pois ela é uma variavel global
 * 
 * **Recomendação:**
 * 
 * use **let** para variaveis que podem ser alteradas
 * use **const** para variaveis que não podem ser alteradas
 * 
 * **Não use var**, pois ela é uma variavel global que pode ser alterada, pois ela é uma variavel global
 * 
 * **Diferença entre let e const**
 * 
 * let é uma variavel que pode ser alterada, pois ela é uma variavel local
 * const é uma variavel que não pode ser alterada, pois ela é uma variavel constante
 */

let nomeCompleto = "Eric Gregorio"; // String
const idade = 20; // Number
var altura = 1.75; // Number
const estaAprovado = true; // Boolean
const dataDeNascimento = new Date(); // Date

console.log(nomeCompleto);
console.log(idade);
console.log(altura);
console.log(estaAprovado);
console.log(dataDeNascimento);