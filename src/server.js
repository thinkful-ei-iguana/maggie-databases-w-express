const knex = require('knex');
const app = require('./app');
const { PORT, DB_URL, TEST_DB_URL } = require('./config');

const db = knex({
  client: 'pg',
  connection: TEST_DB_URL
});

app.set('db', db);

app.listen(PORT, () => {
  console.log(`Server listening at http://loalhost:${PORT}`);
});