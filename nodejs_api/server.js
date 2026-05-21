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

  const [[verifyEmail]] = await pool.execute(
    "SELECT email FROM clientes WHERE email = ?",
    [email],
  );

  if (verifyEmail?.email === email) {
    return res.json({
      message: "Email já cadastrado!",
    });
  }

  const [row] = await pool.execute(
    "INSERT INTO clientes (nome, email, telefone, cidade, estado) VALUES (?, ?, ?, ?, ?);",
    [nome, email, telefone, cidade, estado],
  );

  if (row.affectedRows === 0) {
    return res.json({
      message: "Não foi possível realizar o cadastro!",
    });
  }

  // const [row] = await pool.execute(
  //   "INSERT INTO clientes (nome, email, telefone, cidade, estado) VALUES (?, ?, ?, ?, ?);",
  //   [data.nome, data.email, data.telefone, data.cidade, data.estado],
  // );

  return res.json({
    message: "Cadastro realizado com Sucesso!",
  });
});

// Metodo PUT atualiza dados na rota
app.put("/clientes/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { nome, email, telefone, cidade, estado } = req.body;

  if (nome === "" || !email || !telefone || !cidade || !estado) {
    return res.json({ message: "Todos os campos são Obrigatórios" });
  }

  const [[verifyEmail]] = await pool.execute(
    "SELECT email FROM clientes WHERE email = ?",
    [email],
  );

  if (verifyEmail?.email === email) {
    return res.json({
      message: "Email já cadastrado com outro cliente!",
    });
  }

  const [getCliente] = await pool.execute(
    "SELECT * FROM clientes WHERE id_cliente = ?;",
    [id],
  );

  if (getCliente.length === 0) {
    return res.json({
      message: "Cliente não encontrado!",
    });
  }

  const [row] = await pool.execute(
    `
      UPDATE clientes SET 
      nome = ?,
      email = ?,
      telefone = ?,
      cidade = ?,
      estado = ?
     WHERE id_cliente = ?;
    `,
    [nome, email, telefone, cidade, estado, id],
  );

  console.log(row);

  return res.json({
    message: "Cliente atulizado com sucesso!",
  });
});

app.delete("/clientes/:id", async (req, res) => {
  const id = Number(req.params.id);

  const [row] = await pool.execute(
    "DELETE FROM clientes WHERE id_cliente = ?",
    [id],
  );

  console.log(row);

  return res.json({
    message: "Cliente deletado com sucesso!",
  });
});

/**
 * Inicia o servidor na porta 5600.
 */
app.listen(5600, () => {
  console.log("Servidor rodando na porta 5600");
});
