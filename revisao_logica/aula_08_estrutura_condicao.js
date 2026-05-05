/**
 * Estrutura de condição
 * 
 * if - se => se for verdade executa o bloco de codigo
 * else - senao => senao nenhuma das anteriores for verdade executa o bloco de codigo
 * 
 * if - se => se for verdade executa o bloco de codigo
 * else if - senao se => senao, se for verdade executa o bloco de codigo
 * else - senao => senao nenhuma das anteriores for verdade executa o bloco de codigo
 * 
 * Para trabalhar com a estrutura de condição simples usamos operadores de comparação
 * 
 * == => igual
 * != => diferente
 * > => maior que
 * < => menor que
 * >= => maior ou igual a
 * <= => menor ou igual a
 * === => igual
 * !== => diferente
 * 
 * Para trabalhar com a estrutura de condição composta usamos operadores lógicos
 * 
 * && => e (todas as condições precisam ser verdadeiras)
 * || => ou (pelo menos uma condição precisa ser verdadeira)
 * ! => não (inverte o valor da condição)
 */

const idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

/**
 * Exercício 1
 * 
 *  Verificar se o número é par ou ímpar
 *  crie uma variavel numero e atribua um valor a ela
 *  
 *  Se o número for divisivel por 2 e o resto for igual a 0, exiba "Par"
 *  Se o número for divisivel por 2 e o resto for diferente de 0, exiba "Ímpar"
 */
const numero = 10;

if (numero % 2 === 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}

/**
 * Exercício 2
 * 
 *  Verificar se é bom dia, boa tarde ou boa noite
 *  crie uma variavel hora e atribua um valor a ela
 *  
 *  Se a hora for menor que 12, exiba "Bom dia"
 *  Se a hora for maior ou igual a 12 e menor que 18, exiba "Boa tarde"
 *  Se a hora for maior ou igual a 18, exiba "Boa noite"
 */
const hora = 10;

if (hora < 12) {
  console.log("Bom dia");
} else if (hora < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}


/**
 * Exercício 3
 * 
 *  Verificar se o número é positivo, negativo ou zero
 *  crie uma variavel numero2 e atribua um valor a ela
 *  
 *  Se o número for maior que 0, exiba "Positivo"
 *  Se o número for menor que 0, exiba "Negativo"
 *  Se o número for igual a 0, exiba "Zero"
 */
const numero2 = 10;

if (numero2 > 0) {
  console.log("Positivo");
} else if (numero2 < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}

/**
 * Exercicio 4
 * 
 * Verificar se o usuário é maior de idade e se tem CNH
 * crie uma variavel idadeMotorista e atribua um valor a ela
 * crie uma variavel cnh e atribua um valor a ela
 * 
 * Se a idade for maior ou igual a 18 e a cnh for verdadeira, exiba "Pode dirigir"
 * Se a idade for maior ou igual a 18 e a cnh for falsa, exiba "Não pode dirigir"
 * Se a idade for menor que 18, exiba "Não pode dirigir"
 * 
 * Utilizar operadores logiais && e ||
 * Utilizar operadores de comparação >=, <, ===, !== 
 */
const idadeMotorista = 18;
const cnh = true;

if (idadeMotorista >= 18 && cnh === true) {
  console.log("Pode dirigir");
} else if (idadeMotorista >= 18 && cnh === false) {
  console.log("Não pode dirigir");
} else {
  console.log("Não pode dirigir");
}

/**
 * Exercicio 5
 * 
 * Verificar se o usuário é admitido no sistema
 * crie uma variavel usuario e atribua um valor a ela
 * crie uma variavel senha e atribua um valor a ela
 * 
 * Se o usuario for "admin" e a senha for "1234", exiba "Admitido"
 * Se o usuario for "admin" e a senha for diferente de "1234", exiba "Senha incorreta"
 * Se o usuario for diferente de "admin" e a senha for "1234", exiba "Usuário incorreto"
 * Se o usuario for diferente de "admin" e a senha for diferente de "1234", exiba "Usuário e senha incorretos"
 * 
 * Utilizar operadores logiais && e ||
 * Utilizar operadores de comparação >=, <, ===, !== 
 */
const usuario = "admin";
const senha = "1234";

if (usuario === "admin" && senha === "1234") {
  console.log("Acesso concedido");
} else if (usuario === "admin" && senha !== "1234") {
  console.log("Senha incorreta");
} else if (usuario !== "admin" && senha === "1234") {
  console.log("Usuário incorreto");
} else {
  console.log("Usuário e senha incorretos");
}

/**
 * Exercicio 6
 * 
 * Verificar se o aluno foi aprovado ou reprovado
 * crie uma variavel nota e atribua um valor a ela
 * 
 * Se a nota for maior ou igual a 7, exiba "Aprovado"
 * Se a nota for menor que 7, exiba "Reprovado"
 */
const nota = 7;

if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

/**
 * Exercicio 7
 * 
 * Verificar se a velocidade é permitida
 * crie uma variavel velocidade e atribua um valor a ela
 * 
 * Se a velocidade for maior que 80, exiba "Multado"
 * Se a velocidade for menor que 80, exiba "Velocidade permitida"
 */
const velocidade = 80;

if (velocidade > 80) {
  console.log("Multado");
} else {
  console.log("Velocidade permitida");
}

/**
 * Exercicio 8
 * 
 * Verificar se o salario for maior que 1500 aplicar 10% de aumento e
 * se salario for maior 3000 aplicar 5% de aumento
 * crie uma variavel salario e atribua um valor a ela
 * 
 * Se o salario for maior que 1500, exiba "Salário com aumento"
 * Se o salario for menor que 1500, exiba "Salário sem aumento"
 * 
 * Utilizar concatenação para exibir o valor do aumento
 */
const salario = 1500;

if (salario > 1500) {
  console.log("Salário com aumento de 10% no valor de: " + (salario * 0.10));
} else if (salario > 3000) {
  console.log("Salário com aumento de 5% no valor de: " + (salario * 0.05));
} else {
  console.log("Salário sem aumento");
}

/**
 * Exercicio 9
 * 
 * Verificar a media do aluno
 * crie uma variavel nota1 e atribua um valor a ela
 * crie uma variavel nota2 e atribua um valor a ela
 * crie uma variavel nota3 e atribua um valor a ela
 * 
 * Se a media for maior ou igual a 7, exiba "Aprovado"
 * Se a media for menor que 7 e maior ou igual a 5, exiba "Recuperação"
 * Se a media for menor que 5, exiba "Reprovado"
 */
const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  console.log("Aprovado");
} else if (media >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

/**
 * Exercicio 10
 * 
 * Utilizar o operador ternário para simplificar o código
 * 
 * Se a nota for maior ou igual a 7, exiba "Aprovado"
 * Se a nota for menor que 7, exiba "Reprovado"
 */
const nota10 = 7;

const resultado = nota10 >= 7 ? "Aprovado" : "Reprovado";

console.log(resultado);

/**
 * Exercicio 11
 * 
 * Verificar se não é fim de semana
 * crie uma variavel diaSemana e atribua um valor a ela
 * 
 * Se o dia da semana não for "Sábado" e não for "Domingo", exiba "Não é fim de semana"
 * Se o dia da semana for "Sábado" ou "Domingo", exiba "É fim de semana"
 * 
 * Utilizar operador logical && 
 * Utilizar operadores de comparação ===, !== 
 */
const diaSemana = "Sábado";

if (diaSemana !== "Sábado" && diaSemana !== "Domingo") {
  console.log("Não é fim de semana");
} else {
  console.log("É fim de semana");
}

/**
 * Exercicio 12
 * 
 * Verificar se as variaveis estão vazias
 * crie uma variavel usuarioAdmin e atribua uma string vazia
 * crie uma variavel usuarioVisitante e atribua uma string vazia
 * 
 * Se o usuarioAdmin estiver vazio e o usuarioVisitante estiver vazio, exiba "Nenhum usuário cadastrado"
 * Se o usuarioAdmin estiver preenchido e o usuarioVisitante estiver vazio, exiba "Usuário admin cadastrado"
 * Se o usuarioAdmin estiver vazio e o usuarioVisitante estiver preenchido, exiba "Usuário visitante cadastrado"
 * Se o usuarioAdmin estiver preenchido e o usuarioVisitante estiver preenchido, exiba "Usuário admin e visitante cadastrados"
 * 
 * Utilizar operador logical &&, ! 
 * Utilizar operadores de comparação ===, !== 
 */
const usuarioAdmin = "";
const usuarioVisitante = "";

if (!usuarioAdmin && !usuarioVisitante) {
  console.log("Nenhum usuário cadastrado");
} else if (usuarioAdmin && !usuarioVisitante) {
  console.log("Usuário admin cadastrado");
} else if (!usuarioAdmin && usuarioVisitante) {
  console.log("Usuário visitante cadastrado");
} else {
  console.log("Usuário admin e visitante cadastrados");
}
