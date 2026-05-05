// O express é um framework para criar servidor e definir rotas.
import express from "express";

/**
 * Cria a instância do express.
 */
const app = express();

/**
 * Dizendo para o express que vamos utilizar o 
 * formato JSON no corpo das requisições.
 */
app.use(express.json());

/**
 * Banco de dados em memória.
 */
const users = [
  {
    "id": 1,
    "name": "Eric Gregorio",
    "email": "eric@eric.com"
  },
  {
    "id": 2,
    "name": "Gregorio Aquino",
    "email": "gregorio@gregorio.com"
  }
];

/**
 * Cria uma rota GET para o caminho raiz (/).
 * Request - req - Requisição.
 * Response - res - Resposta.
 */
app.get('/', (req, res) => {
  if (users.length === 0) {
    return res.json({
      message: "Nenhum usuário encontrado!"
    });
  }
  return res.json(users);
});

/**
 * Inicia o servidor na porta 5600.
 */
app.listen(5600, () => {
  console.log('Servidor rodando na porta 5600');
});



