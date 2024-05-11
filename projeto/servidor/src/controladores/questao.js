const { pool } = require("./bd.js");

async function listar(req, res) {
  try {
    //Fetches the necessary info from the server
    const resposta = await pool.query(
      "SELECT idquestao, enunciado, resposta FROM tbquestao ORDER BY enunciado"
    );

    //Creates and array with the info from the tbquestao
    const questoes = resposta.rows.map(row => ({
      idquestao: row.idquestao,
      enunciado: row.enunciado,
      resposta: row.resposta
    }));

    res.json(questoes);
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ error: "Erro ao buscar questões." });
  }
}

module.exports = { listar };
