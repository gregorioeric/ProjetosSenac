# Aula 01: Variáveis

## O que são?

Variáveis são espaços na memória que guardam informações.

## Como declarar?

### `let`

```javascript
let nomeDaVariavel = "valor";
```

`let` é uma variável que pode ser alterada, pois ela é uma variável local (de bloco).

### `const`

```javascript
const nomeDaVariavel = "valor";
```

`const` é uma variável que não pode ser alterada, pois ela é uma variável constante.

### `var`

```javascript
var nomeDaVariavel = "valor";
```

`var` é uma variável global ou de função que pode ser alterada.

---

## Recomendações

- Use **`let`** para variáveis que podem ter seus valores reatribuídos.
- Use **`const`** para variáveis que não devem ser alteradas após a inicialização.
- **Não use `var`**, pois seu escopo mais abrangente pode gerar comportamentos inesperados e bugs difíceis de rastrear.

## Diferença entre `let` e `const`

- **`let`**: pode ser reatribuída.
- **`const`**: não pode ser reatribuída (é constante).

---

## Exemplos de Código

```javascript
let nomeCompleto = "Eric Gregorio"; // String
const idade = 20; // Number Inteiro
var altura = 1.75; // Number Float
const estaAprovado = true; // Boolean
const dataDeNascimento = new Date(); // Date

console.log(nomeCompleto);
console.log(idade);
console.log(altura);
console.log(estaAprovado);
console.log(dataDeNascimento);
```
