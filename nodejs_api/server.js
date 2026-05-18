// O express é um framework para criar servidor e definir rotas.
import express from "express";
import cors from "cors";
import pool from "./database.js";

/**
 * Cria a instância do express.
 */
const app = express();

/**
 * Dizendo para o express que vamos utilizar o
 * formato JSON no corpo das requisições.
 */
app.use(express.json());
app.use(cors());

/**
 * Banco de dados em memória.
 */
// const users = [
//   {
//     id: 1,
//     user_name: "Eric Gregorio",
//     email: "gregorio@gregorio.com",
//   },
//   {
//     id: 2,
//     user_name: "Gregorio Aquino",
//     email: "gregorio@gregorio.com",
//   },
// ];

/**
 * Cria uma rota GET para o caminho raiz (/).
 * Request - req - Requisição.
 * Response - res - Resposta.
 */
app.get("/clientes", async (req, res) => {
  const [rows] = await pool.execute("SELECT * FROM clientes;");

  if (rows.length === 0) {
    return res.json({
      message: "Nenhum usuário encontrado!",
    });
  }
  return res.json(rows);
});

app.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const getUserById = users.find((user) => user.id === id);
  return console.log(getUserById);
});

app.post("/clientes", async (req, res) => {
  const { nome, email, telefone, cidade, estado } = req.body;
  // const data = req.body;
  // || => or - ou
  if (nome === "" || !email || !telefone || !cidade || !estado) {
    return res.json({ message: "Todos os campos são Obrigatórios" });
  }

  // const [row] = await pool.execute(
  //   "INSERT INTO clientes (nome, email, telefone, cidade, estado) VALUES (?, ?, ?, ?, ?);",
  //   [nome, email, telefone, cidade, estado],
  // );

  // const [row] = await pool.execute(
  //   "INSERT INTO clientes (nome, email, telefone, cidade, estado) VALUES (?, ?, ?, ?, ?);",
  //   [data.nome, data.email, data.telefone, data.cidade, data.estado],
  // );

  return res.json({
    message: "Cadastro realizado com Sucesso!",
  });
});

/**
 * Inicia o servidor na porta 5600.
 */
app.listen(5600, () => {
  console.log("Servidor rodando na porta 5600");
});
