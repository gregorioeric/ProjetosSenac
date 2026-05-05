/**
 * Operadores aritméticos
 * 
 * +: Adição
 * -: Subtração
 * *: Multiplicação
 * /: Divisão
 * %: Módulo (resto da divisão)
 * **: Exponenciação
 * 
 */

const soma = 1 + 8; // 9
const subtracao = 18 - 9; // 9
const multiplicacao = 1 * 5; // 5
const divisao = 10 / 2; // 5
const modulo = 10 % 3; // 1
const exponenciacao = 2 ** 3; // 8

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);
console.log(exponenciacao);

/**
 * Exercicios
 * 
 * 1 - Crie uma variável para armazenar o preço de um produto
 * 2 - Crie uma variável para armazenar a quantidade de parcelas
 * 3 - Crie uma variável para armazenar o valor do desconto
 * 4 - Calcule o valor total com desconto
 * 5 - Calcule o valor de cada parcela
 * 6 - Exiba o valor total com desconto e o valor de cada parcela
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
//
//
//
const precoProduto = 100;
const quantidadeParcelas = 10;
const valorDesconto = 10;

const valorTotalComDesconto = precoProduto - valorDesconto;
const valorDeCadaParcela = valorTotalComDesconto / quantidadeParcelas;

console.log(valorTotalComDesconto);
console.log(valorDeCadaParcela);