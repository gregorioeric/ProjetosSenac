/**
 * Estrutura de repetição
 * 
 * for - para => para repetir um bloco de código um número determinado de vezes
 * while - enquanto => para repetir um bloco de código enquanto uma condição for verdadeira
 * do...while - faça...enquanto => para repetir um bloco de código enquanto uma condição for verdadeira
 * 
 * sintaxe:
 * 
 * for (inicialização; condição; incremento) {
 *  // código a ser executado
 * }
 * 
 * while (condição) {
 *  // código a ser executado
 * }
 * 
 * do {
 *  // código a ser executado
 * } while (condição);
 */

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0;
while (i < 10) {
  console.log("while", i);
  i++;
}

let j = 0;
do {
  console.log("do...while", j);
  j++;
} while (j < 10);

let string = "Olá mundo";

for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
}

const arrayFrutas = ["Maçã", "Banana", "Laranja"];

// forEach - itera sobre os valores de arrays
arrayFrutas.forEach(function (fruta) {
  console.log(fruta);
});

// for...in - itera sobre as propriedades 
// enumeradas de um objeto (chaves)
const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo"
};

console.log("\n--- for...in ---");
for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

// for...of - itera sobre os valores de 
// objetos iteráveis (Arrays, Strings, etc)
const frutas = ["Maçã", "Banana", "Laranja"];

console.log("\n--- for...of (Array) ---");
for (let fruta of frutas) {
  console.log(fruta);
}

console.log("\n--- for...of (String) ---");
const texto = "Senac";
for (let letra of texto) {
  console.log(letra);
}

/**
 * Exercício 1
 * 
 *  Tabuada do 5
 *  crie uma variavel numero e atribua um valor a ela
 *  
 *  Exiba a tabuada do 5 de 1 a 10
 */
const numero = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

/**
 * Exercício 2 - Iterando sobre Array
 * 
 * Crie um array de números e exiba apenas os 
 * números pares usando for...of (ou for clássico).
 */
console.log("\n--- Exercício 2 ---");
const numerosParaTestar = [12, 5, 8, 21, 44, 3, 10];

for (let num of numerosParaTestar) {
  if (num % 2 === 0) {
    console.log(`Par: ${num}`);
  }
}

/**
 * Exercício 3 - Somando valores de um Array
 * 
 * Crie um array de preços e calcule a soma de todos os valores.
 */
console.log("\n--- Exercício 3 ---");
const precos = [15.50, 22.00, 8.90, 45.00];
let totalPrecos = 0;

for (let preco of precos) {
  totalPrecos += preco;
}
console.log(`Soma total: R$ ${totalPrecos.toFixed(2)}`);

/**
 * Exercício 4 - Iterando sobre Objetos (for...in)
 * 
 * Crie um objeto representando um carro (marca, modelo, ano)
 * e exiba todas as suas propriedades e valores utilizando o for in.
 */
console.log("\n--- Exercício 4 ---");
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  cor: "Prata"
};

for (let propriedade in carro) {
  console.log(`${propriedade}: ${carro[propriedade]}`);
}

/**
 * Exercício 5 - Array de Objetos (Filtro)
 * 
 * Crie um array de objetos representando alunos (nome, nota).
 * Exiba apenas os alunos que foram aprovados (nota >= 7).
 */
console.log("\n--- Exercício 5 ---");
const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Carlos", nota: 6.0 },
  { nome: "Beatriz", nota: 9.2 },
  { nome: "Pedro", nota: 5.5 }
];

console.log("Alunos aprovados:");
for (let aluno of alunos) {
  if (aluno.nota >= 7) {
    console.log(`- ${aluno.nome} (Nota: ${aluno.nota})`);
  }
}

/**
 * Exercício 6 - Array de Objetos (Cálculos)
 * 
 * Crie um array de produtos (nome, preco, quantidade).
 * Calcule e exiba o valor total em estoque 
 * (preco * quantidade) de cada produto,
 * e o valor total geral do estoque.
 */
console.log("\n--- Exercício 6 ---");
const produtos = [
  { nome: "Teclado", preco: 120.00, quantidade: 15 },
  { nome: "Mouse", preco: 50.00, quantidade: 30 },
  { nome: "Monitor", preco: 850.00, quantidade: 5 }
];

let valorTotalEstoque = 0;

for (let i = 0; i < produtos.length; i++) {
  const produto = produtos[i];
  const valorEstoqueProduto = produto.preco * produto.quantidade;
  console.log(`${produto.nome}: R$ ${valorEstoqueProduto.toFixed(2)} em estoque`);

  valorTotalEstoque += valorEstoqueProduto;
}

console.log(`\nValor total do estoque: R$ ${valorTotalEstoque.toFixed(2)}`);


