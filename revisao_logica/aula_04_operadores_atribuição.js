/**
 * Operadores de atribuição
 * 
 * =: Atribuição
 * +=: Adição e atribuição
 * -=: Subtração e atribuição
 * *=: Multiplicação e atribuição
 * /=: Divisão e atribuição
 * %=: Módulo e atribuição
 * **=: Exponenciação e atribuição
 * 
 */

let soma = 28;
soma += 1; // 29

let subtracao = 18;
subtracao -= 9; // 9

let multiplicacao = 3;
multiplicacao *= 5; // 15

let divisao = 10;
divisao /= 2; // 5

let modulo = 10;
modulo %= 3; // 1

let exponenciacao = 2;
exponenciacao **= 3; // 8

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);
console.log(exponenciacao);

/**
 * Exercicios
 * 
 * 1 - Crie uma variável para armazenar o saldo bancário
 * 2 - Crie uma variável para armazenar o valor do depósito
 * 3 - Crie uma variável para armazenar o valor do saque
 * 4 - Calcule o saldo atual com depósito
 * 5 - Calcule o saldo atual com saque
 * 6 - Exiba o saldo atual com depósito e o saldo atual com saque
 */
//
//
//
//
//
//
//
//
//
//
let saldoBancario = 1000;
let valorDeposito = 500;
let valorSaque = 200;

saldoBancario += valorDeposito;
saldoBancario -= valorSaque;

console.log(saldoBancario);