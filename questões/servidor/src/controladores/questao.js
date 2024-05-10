const { pool } = require("./bd.js");

async function listar(req, res) {
  // Procura na tbusuario o 1o registro que satisfaz as condições
  let resposta = await pool.query(
    "SELECT idquestao,enunciado FROM tbquestao ORDER BY enunciado"
  );

  return res.json(resposta.rows);
}

// Exporta as funções
module.exports = { listar };

/*
Comandos para crias as tabelas tbcertificado e tbcertificadoquestao:


CREATE TABLE tbCertificado (
  id_usuario INT NOT NULL,
  data_avaliacao TIMESTAMP NULL,
  score DECIMAL(5,2) NULL,
  PRIMARY KEY(id_usuario),
  CONSTRAINT fk_usuario
      FOREIGN KEY(id_usuario) 
        REFERENCES tbUsuario(id_usuario)
);

CREATE TABLE tbCertificadoQuestao (
  id_usuario INT NOT NULL,
  id_questao INT NOT NULL,
  resposta_usuario BOOL NULL,
  PRIMARY KEY(id_usuario, id_questao),
  CONSTRAINT fk_certificado
      FOREIGN KEY(id_usuario) 
        REFERENCES tbCertificado(id_usuario),
  CONSTRAINT fk_questao
      FOREIGN KEY(id_questao) 
        REFERENCES tbQuestao(id_questao)
);
*/