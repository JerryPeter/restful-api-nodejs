const { Sequelize } = require('sequelize');
const { QueryTypes } = require('sequelize');

const sequelize = new Sequelize('sequelize', 'demo', 'Qwerty@123', {
  host: 'JRRYPTR',
  dialect:'mssql'
});

async function main() {
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    const results = await sequelize.query(
      //"INSERT INTO hello (nama, email) VALUES ('Budi', 'budi@gmail.com')",
      "select * from hello",
      //"DELETE FROM hello Where id = 5",
      { type: QueryTypes.SELECT }
    );

    console.log(results);

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();