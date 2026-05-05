/**
 * Tipos de variáveis
 * 
 * String: String (Texto)
 * Float: Number float (Número com vírgula)
 * Inteiro: Number int (Número inteiro)
 * Boolean: Boolean (Verdadeiro ou falso)
 * Date: Date (Data)
 * Array: Array (Lista)
 * Object: Object (Objeto ou dicionário)
 */

const nome = "Eric Gregorio"; // String
const stringvazia = ""; // String vazia
const idade = 20; // Number int
const altura = 1.75; // Number float
const estaAprovado = true; // Boolean
const dataDeNascimento = new Date(); // Date
const hobbies = ["ler", "correr", "nadar"]; // Array
const pessoa = { nome: "Eric", idade: 20, altura: 1.75 }; // Object
const objetoVazio = {}; //Object vazio
const arrayVazio = []; //Array vazio

console.log(nome);
console.log(idade);
console.log(altura);
console.log(estaAprovado);
console.log(dataDeNascimento);
console.log(hobbies);
console.log(pessoa);

/**
 * Exercicios
 *
 * 1 - Crie uma variável do tipo string para armazenar o nome de uma pessoa
 * 2 - Crie uma variável do tipo int para armazenar a idade de uma pessoa
 * 3 - Crie uma variável do tipo float para armazenar a altura de uma pessoa
 * 4 - Crie uma variável do tipo boolean para armazenar se a pessoa é maior de idade
 * 5 - Crie uma variável do tipo Date para armazenar a data de cadastro de uma pessoa
 * 6 - Crie uma variável do tipo Array para armazenar os hobbies de uma pessoa
 * 7 - Crie uma variável do tipo Object para armazenar um funcionario
 * 8 - Exiba todas as variáveis
 *
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
//
//
// const nomeCompleto = "Eric Gregorio";
// const idadePessoa = 20;
// const alturaPessoa = 1.75;
// const maiorDeIdade = true;
// const dataDeCadastro = new Date();
// const hobbiesPessoa = ["ler", "correr", "nadar"];
// const funcionario = { nome: "Eric", idade: 20, altura: 1.75 };

// console.log(nome);
// console.log(idade);
// console.log(altura);
// console.log(maiorDeIdade);
// console.log(dataDeNascimento);
// console.log(hobbies);
// console.log(pessoa);


/**
 * Exercicio 1
 * 
 * Crie uma variavel do tipo string chamada nomeUsuario e atribua um valor a ela
 * Crie uma variavel do tipo inteiro chamada userId e atribua um valor a ela
 * Crie uma variavel do tipo float chamada alturaUsuario e atribua um valor a ela
 * Crie uma variavel do tipo boolean chamada alunoAprovado e atribua um valor a ela
 * 
 * Exiba o valor da variavel
 * Exiba o valor da variavel
 * Exiba o valor da variavel
 * Exiba o valor da variavel
 * 
 * 
 */
const nomeUsuario = "Eric Gregorio"; // string
const userId = 20; // inteiro
const alturaUsuario = 1.75; // float
const alunoAprovado = true; // boolean
console.log(nomeUsuario);
console.log(userId);
console.log(alturaUsuario);
console.log(alunoAprovado);

/**
 * Exercicio 2
 * 
 * Identifique o tipo de cada variavel
 * 
 * Utilize o comando typeof para identificar o tipo de cada variavel
 * 
 * Exiba o tipo de cada variavel
 */
const nomeProduto = "Eric Gregorio";
const codigoProduto = "1536";
const descricaoProduto = "";
const produtoId = 20;
const precoProduto = 889.99;
const produtoEmEstoque = true;

console.log(typeof nomeProduto);
console.log(typeof codigoProduto);
console.log(typeof descricaoProduto);
console.log(typeof produtoId);
console.log(typeof precoProduto);
console.log(typeof produtoEmEstoque);

/**
 * Exercicio 2
 * 
 * Crie um objeto chamado produto com os seguintes atributos:
 * 
 * nomeProduto
 * codigoProduto
 * descricaoProduto
 * produtoId
 * precoProduto
 * emEstoque
 * dataFabricacao
 * 
 */

/**
 * Exercicio 3
 * 
 * Crie um array chamado frutas com as seguintes frutas:
 * macã
 * banana
 * laranja
 * manga
 * uva
 * melancia
 * abacaxi
 * melão
 * mamão
 * morango
 * 
 */

/** 
 * Crie uma variavel do tipo string  chamada nome_produto e atribua um valor a ela
 * Crie uma variavel do tipo float chamada valor_produto e atribua um valor a ela
 * Crie uma variavel do tipo inteiro chamada desconto_percentual e atribua um valor a ela
 * 
 * Calcule o valor total com desconto criando uma variavel chamada valor_total
 * Calcule o valor do desconto criando uma variavel chamada valor_desconto
 * 
 * Exiba o nome do produto
 * Exiba o valor do desconto
 * Exiba o valor total com desconto
 */



const nome_produto = "PS5";
const valor_produto = 3999.99;
const desconto_percentual = 10;
const valor_total = valor_produto - (valor_produto * desconto_percentual / 100);
const valor_desconto = valor_produto - valor_total;
console.log("Produto: " + nome_produto);
console.log("Valor do desconto: R$" + valor_desconto.toFixed(2));
console.log("Valor total com desconto: R$" + valor_total.toFixed(2));

/** 
 * Exercicio 4
 * 
 * Crie uma variavel do tipo inteiro ou float chamda n1 e atribua um valor a ela
 * Crie uma variavel do tipo inteiro ou float chamda n2 e atribua um valor a ela
 * Crie uma variavel do tipo inteiro ou float chamda n3 e atribua um valor a ela
 * Crie uma variavel do tipo inteiro ou float chamda n4 e atribua um valor a ela
 * 
 * Crie um variavel chamada soma e some os valores das variáveis n1, n2, n3 e n4
 * 
 * Exiba o resultado final com o console.log() usar concatenação
 * 
 * Exemplo de concatenação com vírgula
 * console.log("O valor do Produto é: ", valor_produto);
 * 
 * Exemplo de concatenação com + 
 * console.log("O valor do Produto é: " + valor_produto);
 * 
 * Exemplo de concatenação com template string
 * console.log(`O valor do Produto é: ${valor_produto}`);
 * 
 * 
 */

const n1 = 12.00;
const n2 = 11;
const n3 = 10;
const n4 = 9.99;
const soma = n1 + n2 + n3 + n4;
console.log("A soma dos números é: " + soma);

/** 
 * Exercicio 5
 * 
 * Crie uma variavel do tipo string chamada nome_aluno e atribua um valor a ela
 * Crie uma variavel do tipo float chamada nota1 e atribua um valor a ela
 * Crie uma variavel do tipo float chamada nota2 e atribua um valor a ela
 * Crie uma variavel do tipo float chamada nota3 e atribua um valor a ela
 * 
 * Verifique se a variavel nome_aluno não está vazia
 * Verifique se as variaveis nota1, nota2, nota3 não estão vazias
 * 
 * Calcule a media das notas criando uma variavel chamada media 
 * Se a media for maior ou igual a 7, mostre aprovado
 * Se a media for menor que 7, mostre reprovado
 * 
 * Exiba o nome do aluno
 * Exiba a media das notas
 * 
 * OBS: Usar if e else if para verificar se o aluno está aprovado ou reprovado
 */
const nome_aluno = "Eric";
const nota1 = 10;
const nota2 = 10;
const nota3 = 10;
const media = (nota1 + nota2 + nota3) / 3;

if (nome_aluno != "" && nota1 != "" && nota2 != "" && nota3 != "") {
  console.log("Aluno: " + nome_aluno);
  console.log("Media: " + media);
} else {
  console.log("Aluno invalido");
}

if (media >= 7) {
  console.log("Aluno aprovado");
} else {
  console.log("Aluno reprovado");
}



/** 
 * Exercicio 4
 * 
 * Crie uma variavel do tipo inteiro ou float chamda n5 e atribua um valor a ela
 * Crie uma variavel do tipo inteiro ou float chamda n6 e atribua um valor a ela
 * Crie uma variavel do tipo inteiro ou float chamda n7 e atribua um valor a ela
 * Crie uma variavel do tipo inteiro ou float chamda n8 e atribua um valor a ela
 * 
 * Crie um variavel chamada valor_soma e some os valores das variáveis n5 e n6
 * Crie um variavel chamada valor_subtracao e subtraia os valores das variáveis n7 e n8
 * Crie uma variavel chamada valor_total_operacoes e some os valores das variáveis valor_soma e valor_subtracao
 * 
 * Exiba o resultado final da variavel valor_total_operacoes com o console.log() usando concatenação
 * 
 * Exemplo de concatenação com vírgula
 * console.log("O valor do Produto é: ", valor_produto);
 * 
 * Exemplo de concatenação com + 
 * console.log("O valor do Produto é: " + valor_produto);
 * 
 * Exemplo de concatenação com template string
 * console.log(`O valor do Produto é: ${valor_produto}`);
 */
const n5 = 10;
const n6 = 40.86;
const n7 = 42.39;
const n8 = 12.12;
const valor_soma = n5 + n6;
const valor_subtracao = n7 - n8;
const valor_total_operacoes = valor_soma + valor_subtracao;
console.log("O valor total é: " + valor_total_operacoes);


/**
 * Exercicio para exercitar a concatenação de strings
 * 
 * Crie variaveis para armazenar o nome do funcionario chamada nome_funcionario
 * Crie uma variavel que armazena o valor do salario do funcionario chamada salario_funcionario
 * Crie uma variavel que armazena o valor da idade do funcionario chamada idade_funcionario
 * 
 * Mostre todos os dados do funcionario concatenando com console.log()
 * 
 * Usar uma concatenação para exibir o nome do funcionario
 * console.log("O valor do Produto é: ", valor_produto);
 * 
 * Usar uma concatenação para exibir o salario do funcionario
 * console.log("O valor do Produto é: " + valor_produto);
 * 
 * Usar uma concatenação para exibir a idade do funcionario
 * console.log(`O valor do Produto é: ${valor_produto}`);
 */

const nomeFuncionario = "Eric";
const salarioFuncionario = 1000;
const idadeFuncionario = 20;
console.log("Nome do funcionario: " + nomeFuncionario);
console.log("Salario do funcionario: R$" + salarioFuncionario.toFixed(2));
console.log("Idade do funcionario: " + idadeFuncionario);

/**
 * 1 - Desafio da Pizza
 * 
 * Imagine que você e seus amigos pediram uma pizza grande.
 * 
 * **Dados:**
 * - Número de fatias da pizza: 8
 * - Número de pessoas: 5
 * - Você comeu 3 fatias
 * 
 * **Tarefas:**
 * 1. Descubra quantas fatias sobraram no total.
 * 2. Descubra quantas fatias cada amigo comeu, em média (assumindo que todos comeram a mesma quantidade do que sobrou).
 * 3. Mostre o resultado de forma clara e organizada.
 * 
 * **Dica:** Use variáveis para guardar os valores e faça os cálculos matemáticos necessários.
 * 
 * 2 - Desafio do Contrato de Aluguel
 * 
 * Você acabou de alugar um apartamento e precisa calcular o custo total do primeiro mês.
 * 
 * **Dados:**
 * - Valor do aluguel mensal: R$ 1.500,00
 * - Taxa de condomínio: R$ 300,00
 * - Seguro incêndio (valor único no primeiro mês): R$ 200,00
 * - Caução (valor único no primeiro mês): R$ 4.500,00
 * 
 * **Tarefas:**
 * 1. Calcule o valor total que você precisa pagar no primeiro mês.
 * 2. Se o seu salário mensal é de R$ 3.000,00, descubra quanto do seu salário foi usado para pagar o primeiro mês.
 * 3. Mostre o valor total a ser pago e quanto do seu salário foi utilizado.
 * 
 * **Dica:** Lembre-se de que a caução é um valor que você paga apenas no primeiro mês e que o seguro incêndio também é um valor único.
 */

const fatiasPizza = 8;
const pessoas = 5;
const fatiasComidas = 3;
const fatiasSobraram = fatiasPizza - fatiasComidas;
const mediaFatiasPorPessoa = fatiasSobraram / pessoas;
console.log("Fatias sobraram: " + fatiasSobraram);
console.log("Media de fatias por pessoa: " + mediaFatiasPorPessoa);


/** 
 * Exercicio
 * 
 * Crie uma variavel chamada nomeCliente e atribua um valor a ela
 * Crie uma variavel chamada pizzaMussarela e atribua um valor a ela
 * Crie uma variavel chamada pizzaPortuguesa e atribua um valor a ela
 * 
 * Calcule o valor total da pizza criando uma variavel chamada valorTotal
 * 
 * Mostre todos os dados do cliente concatenando com console.log()
 * 
 * Usar uma concatenação para exibir o nome do cliente
 * console.log("O valor do Produto é: ", valor_produto);
 * 
 * Usar uma concatenação para exibir o preço da pizza mussarela
 * console.log("O valor do Produto é: " + valor_produto);
 * 
 * Usar uma concatenação para exibir o preço da pizza portuguesa
 * console.log(`O valor do Produto é: ${valor_produto}`);
 */