/**
 * Objetos
 * 
 * Um objeto é uma coleção de propriedades
 * 
 * syntax: 
 * 
 * let nomeDoObjeto = { propriedade1: valor1, propriedade2: valor2, ... };
 * 
 * 
 */

// Criando um objeto
const pessoa = {
  nome: "João",
  idade: 25,
  profissao: "Programador"
};

console.log(pessoa);

// Acessando propriedades do objeto
// console.log(pessoa.nome);
// console.log(pessoa.idade);
// console.log(pessoa.profissao);

// Adicionando propriedades ao objeto
// pessoa.cidade = "São Paulo";
// console.log(pessoa);

// Removendo propriedades do objeto
// delete pessoa.profissao;
// console.log(pessoa);

// Substituindo propriedades do objeto
// pessoa.nome = "Maria";
// console.log(pessoa);

// Tamanho do objeto
console.log(Object.keys(pessoa).length);

// Iterando sobre o objeto
for (let propriedade in pessoa) {
  console.log(pessoa[propriedade]);
}

// // Iterando sobre o objeto com for...in
// for (let propriedade in pessoa) {
//   console.log(pessoa[propriedade]);
// }

// // Iterando sobre o objeto com for...of
// for (let propriedade of Object.keys(pessoa)) {
//   console.log(pessoa[propriedade]);
// }

// /**
//  *
//  * Exercício 1
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa1 = {
//   nome: "João",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa1);

// /**
//  *
//  * Exercício 2
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa2 = {
//   nome: "Maria",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa2);

// /**
//  *
//  * Exercício 3
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa3 = {
//   nome: "Pedro",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa3);

// /**
//  *
//  * Exercício 4
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa4 = {
//   nome: "Ana",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa4);

// /**
//  *
//  * Exercício 5
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa5 = {
//   nome: "Carlos",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa5);

// /**
//  *
//  * Exercício 6
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa6 = {
//   nome: "Mariana",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa6);

// /**
//  *
//  * Exercício 7
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa7 = {
//   nome: "Rafael",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa7);

// /**
//  *
//  * Exercício 8
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa8 = {
//   nome: "Fernanda",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa8);

// /**
//  *
//  * Exercício 9
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa9 = {
//   nome: "Lucas",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa9);

// /**
//  *
//  * Exercício 10
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa10 = {
//   nome: "Camila",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa10);

// /**
//  *
//  * Exercício 11
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa11 = {
//   nome: "Gabriel",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa11);

// /**
//  *
//  * Exercício 12
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa12 = {
//   nome: "Larissa",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa12);

// /**
//  *
//  * Exercício 13
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa13 = {
//   nome: "Matheus",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa13);

// /**
//  *
//  * Exercício 14
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa14 = {
//   nome: "Beatriz",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa14);

// /**
//  *
//  * Exercício 15
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa15 = {
//   nome: "Thiago",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa15);

// /**
//  *
//  * Exercício 16
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa16 = {
//   nome: "Juliana",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa16);

// /**
//  *
//  * Exercício 17
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa17 = {
//   nome: "Felipe",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa17);

// /**
//  *
//  * Exercício 18
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa18 = {
//   nome: "Amanda",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa18);

// /**
//  *
//  * Exercício 19
//  *
//  * Crie um objeto de pessoa e exiba todos os dados da pessoa
//  *
//  */

// let pessoa19 = {
//   nome: "Bruno",
//   idade: 25,
//   profissao: "Programador"
// };

// console.log(pessoa19);