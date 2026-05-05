/**
 * 
 * Funções
 * 
 * O que são? 
 * Funções são blocos de código que realizam uma tarefa específica
 * 
 * Como declarar? 
 * 
 * function nomeDaFuncao() {
 *  // código
 * }
 * 
 * invocação da função: 
 * nomeDaFuncao();
 * 
 * const nomeDaFuncao = function() {
 *  // código
 * }
 * invocação da função:
 * nomeDaFuncao();
 * 
 * const nomeDaFuncao = () => {
 *  // código
 * }
 * 
 * invocação da função:
 * nomeDaFuncao();
 * 
 * Funções com parametros
 * function nomeDaFuncao(parametro){
 *  return 
 * }
 * nomeDaFuncao(parametro);
 * 
 * Funções com retorno 
 * nomeDaFuncao() => {
 * return 
 * }
 * Funções com calculo 
 * nomeDaFuncao() => {
 * return 
 * }
 * Funções com arrow 
 * nomeDaFuncao() => {
 *  // código
 * }
 * Funções com arrow e parametros 
 * nomeDaFuncao(parametro) => {
 *  // código
 * }
 * Funções com arrow e retorno 
 * nomeDaFuncao(parametro) => {
 *  return 
 * }
 * Funções com arrow e calculo
 * const nomeDaFuncao = (parametro) => {
 * return 
 * }
 * 
 * Funções com varios parametros
 * function nomeDaFuncao(parametro1, parametro2, parametro3){
 * return 
 * }
 * nomeDaFuncao(parametro1, parametro2, parametro3);
 * 
 * Funções com arrow e varios parametros
 * const nomeDaFuncao = (parametro1, parametro2, parametro3) => {
 * return 
 * }
 * nomeDaFuncao(parametro1, parametro2, parametro3);
 * 
 * **Recomendação:**
 * 
 * use **function** para funções simples
 * use **() =>** para funções mais complexas
 * **Não use var** para declarar funções
 * **Não use let** para declarar funções
 * use **const** para declarar funções
 */

// Função simples
function saudacao() {
  console.log("Olá");
}
//Chamada da função, invocação da função
saudacao();

// Função com parâmetro
function saudacaoNome(nome) {
  console.log("Olá " + nome);
}
//Chamada da função, invocação da função
saudacaoNome("Eric");

// Função com parâmetro e retorno
function saudacaoNomeRetorno(nome) {
  return "Olá " + nome;
}
//Chamada da função, invocação da função
saudacaoNomeRetorno("Eric");
console.log(saudacaoNomeRetorno("Eric"));

// Função com parâmetro e retorno e cálculo
function soma(a, b) {
  return a + b;
}
//Chamada da função, invocação da função
soma(1, 2);
console.log(soma(1, 2));

// Arrow function
const saudacaoArrow = () => {
  console.log("Olá");
}

// Arrow function com parâmetro
const saudacaoNomeArrow = (nome) => {
  console.log("Olá " + nome);
}

// Arrow function com parâmetro e retorno
const saudacaoNomeRetornoArrow = (nome) => {
  return "Olá " + nome;
}

// Arrow function com parâmetro e retorno e cálculo
const somaArrow = (a, b) => {
  return a + b;
}