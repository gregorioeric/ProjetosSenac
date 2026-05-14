/**
 * Arrays
 * 
 * Um array é uma coleção de valores
 * 
 * syntax: 
 * 
 * let nomeDoArray = [valor1, valor2, valor3, ...];
 * 
 * 
 */

// Criando um array
//              0        1         2        3
let frutas = ["maçã", "banana", "laranja", "manga"];

const users = [
  {
    id: 1,
    name: "Eric Gregorio",
    email: "eric@eric.com"
  },
  {
    id: 2,
    name: "Gregorio Aquino",
    email: "gregorio@gregorio.com"
  }
];

for (let i = 0; i < users.length; i++) {
  const element = users[i];
  console.log(element.name);
}

const getuser = users.map((user) => {
  console.log(user.name);
})

const get_user = users.find((user) => {
  const findUser = user.name == "Eric Gregorio";
  console.log(findUser);
})
console.log(get_user);



// console.log(frutas);

// // Acessando elementos do array
// console.log(frutas[0]); // maçã
// console.log(frutas[1]); // banana
// console.log(frutas[2]); // laranja
// console.log(frutas[3]); // manga

// // Adicionando elementos ao array
// frutas.push("uva");
// console.log(frutas);

// // Removendo elementos do array
// frutas.pop();
// console.log(frutas);

// // Substituindo elementos do array
// frutas[0] = "abacaxi";
// console.log(frutas);

// // Tamanho do array
// console.log(frutas.length);

// // Iterando sobre o array
// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// // Iterando sobre o array com forEach
// frutas.forEach(function (fruta) {
//   console.log(fruta);
// });

// // Iterando sobre o array com for...of
// for (let fruta of frutas) {
//   console.log(fruta);
// }

// /**
//  * 
//  * Exercício 1
//  * 
//  * Crie um array de números e exiba todos os números do array
//  * 
//  */

// let numeros = [1, 2, 3, 4, 5];

// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// }

// /**
//  * 
//  * Exercício 2
//  * 
//  * Crie um array de números de 1 a 10 
//  * utilize o for para percorrer o array 
//  * utilize o console.log para exibir 
//  * a soma dos números do array
//  * 
//  */

// let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let soma = 0;
// for (let i = 0; i < numeros2.length; i++) {
//   soma += numeros2[i];
// }

// console.log(soma);

// /**
//  * 
//  * Exercício 3
//  * 
//  * Crie um array de números e exiba a média de todos os números do array
//  * 
//  */

// let numeros3 = [1, 2, 3, 4, 5];

// let soma3 = 0;
// for (let i = 0; i < numeros3.length; i++) {
//   soma3 += numeros3[i];
// }

// let media = soma3 / numeros3.length;

// console.log(media);

// /**
//  * 
//  * Exercício 4
//  * 
//  * Crie um array de números e exiba o maior número do array
//  * 
//  */

// let numeros4 = [1, 2, 3, 4, 5];

// let maior = numeros4[0];
// for (let i = 1; i < numeros4.length; i++) {
//   if (numeros4[i] > maior) {
//     maior = numeros4[i];
//   }
// }

// console.log(maior);

// /**
//  * 
//  * Exercício 5
//  * 
//  * Crie um array de números e exiba o menor número do array
//  * 
//  */

// let numeros5 = [1, 2, 3, 4, 5];

// let menor = numeros5[0];
// for (let i = 1; i < numeros5.length; i++) {
//   if (numeros5[i] < menor) {
//     menor = numeros5[i];
//   }
// }

// console.log(menor);

// /**
//  * 
//  * Exercício 6
//  * 
//  * Crie um array de números e exiba a soma dos números pares do array
//  * 
//  */

// let numeros6 = [1, 2, 3, 4, 5];

// let somaPares = 0;
// for (let i = 0; i < numeros6.length; i++) {
//   if (numeros6[i] % 2 === 0) {
//     somaPares += numeros6[i];
//   }
// }

// console.log(somaPares);

// /**
//  * 
//  * Exercício 7
//  * 
//  * Crie um array de números e exiba a soma dos números ímpares do array
//  * 
//  */

// let numeros7 = [1, 2, 3, 4, 5];

// let somaImpares = 0;
// for (let i = 0; i < numeros7.length; i++) {
//   if (numeros7[i] % 2 !== 0) {
//     somaImpares += numeros7[i];
//   }
// }

// console.log(somaImpares);

// /**
//  * 
//  * Exercício 8
//  * 
//  * Crie um array de números e exiba a média dos números pares do array
//  * 
//  */

// let numeros8 = [1, 2, 3, 4, 5];

// let somaPares8 = 0;
// let contadorPares = 0;
// for (let i = 0; i < numeros8.length; i++) {
//   if (numeros8[i] % 2 === 0) {
//     somaPares8 += numeros8[i];
//     contadorPares++;
//   }
// }

// let mediaPares = somaPares8 / contadorPares;

// console.log(mediaPares);

// /**
//  * 
//  * Exercício 9
//  * 
//  * Crie um array de números e exiba a média dos números ímpares do array
//  * 
//  */

// let numeros9 = [1, 2, 3, 4, 5];

// let somaImpares9 = 0;
// let contadorImpares = 0;
// for (let i = 0; i < numeros9.length; i++) {
//   if (numeros9[i] % 2 !== 0) {
//     somaImpares9 += numeros9[i];
//     contadorImpares++;
//   }
// }

// let mediaImpares = somaImpares9 / contadorImpares;

// console.log(mediaImpares);

// /**
//  * 
//  * Exercício 10
//  * 
//  * Crie um array de números e exiba a soma dos números pares e ímpares do array
//  * 
//  */

// let numeros10 = [1, 2, 3, 4, 5];

// let somaPares10 = 0;
// let somaImpares10 = 0;
// for (let i = 0; i < numeros10.length; i++) {
//   if (numeros10[i] % 2 === 0) {
//     somaPares10 += numeros10[i];
//   } else {
//     somaImpares10 += numeros10[i];
//   }
// }

// console.log(somaPares10);
// console.log(somaImpares10);

// /**
//  * 
//  * Exercício 11
//  * 
//  * Crie um array de números e exiba a média dos números pares e ímpares do array
//  * 
//  */

// let numeros11 = [1, 2, 3, 4, 5];

// let somaPares11 = 0;
// let somaImpares11 = 0;
// for (let i = 0; i < numeros11.length; i++) {
//   if (numeros11[i] % 2 === 0) {
//     somaPares11 += numeros11[i];
//   } else {
//     somaImpares11 += numeros11[i];
//   }
// }

// let mediaPares11 = somaPares11 / numeros11.length;
// let mediaImpares11 = somaImpares11 / numeros11.length;

// console.log(mediaPares11);
// console.log(mediaImpares11);

// /**
//  * 
//  * Exercício 12
//  * 
//  * Crie um array de números e exiba a média dos números pares e ímpares do array
//  * 
//  */

// let numeros12 = [1, 2, 3, 4, 5];

// let somaPares12 = 0;
// let somaImpares12 = 0;
// for (let i = 0; i < numeros12.length; i++) {
//   if (numeros12[i] % 2 === 0) {
//     somaPares12 += numeros12[i];
//   } else {
//     somaImpares12 += numeros12[i];
//   }
// }

// let mediaPares12 = somaPares12 / numeros12.length;
// let mediaImpares12 = somaImpares12 / numeros12.length;

// console.log(mediaPares12);
// console.log(mediaImpares12);

// /**
//  * 
//  * Exercício 13
//  * 
//  * Crie um array de números e exiba a média dos números pares e ímpares do array
//  * 
//  */

// let numeros13 = [1, 2, 3, 4, 5];

// let somaPares13