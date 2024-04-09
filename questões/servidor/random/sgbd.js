const { Client } = require('pg');
const connectionString = 'postgresql://postgres:bnnuy@localhost:5432/bdapi';

const client = new Client({
  connectionString: connectionString,
});

client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');

    const query = 'SELECT * FROM tbquestao';

    return client.query(query);
  })
  .then(result => {
    const rows = result.rows;
    const elementsArray = rows.map(row => {
      return {
        id: row.idquestao,
        name: row.enunciado,
      };
    });

    console.log('Array of elements:', elementsArray);
  })
  .catch(error => {
    console.error('Error executing query:', error);
  })
  .finally(() => {
    client.end();
  });