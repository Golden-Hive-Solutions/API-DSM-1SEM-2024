const { Client } = require("pg");
const connectionString = "postgresql://postgres:bnnuy@localhost:5432/bdapi";

const client = new Client({
  connectionString: connectionString,
});

client.connect()
  .then(() => {
    console.log("Conectado ao banco");

    const query = "SELECT * FROM tbquestao";

    return client.query(query);
  })
  .then(result => {
    const rows = result.rows;
    const elementsArray = [];
    for (let i = 0; i < rows.length; i++) {
      elementsArray.push({ id: rows[i].idquestao, Enunciado: rows[i].enunciado, Resposta: rows[i].resposta });
    }

    const shuffledq = shuffleq(elementsArray).slice(0, 20);
    console.log("Randomização:", shuffledq);
  })
  .catch(error => {
    console.error("Erro ao executar:", error);
  })
  .finally(() => {
    client.end();
  });