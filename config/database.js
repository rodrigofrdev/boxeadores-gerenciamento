// Carrega as variáveis de ambiente. Sobe o nível para acessar o arquivo .env na raiz do projeto.
require("dotenv").config({ path: '../.env' });
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PAS,
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

async function testConnection() {
  try {
    console.log("DB_NAME:", process.env.DB_NAME);
    console.log("DB_USER:", process.env.DB_USER);
    console.log("DB_PAS:", process.env.DB_PAS);
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
  }
}

testConnection();

module.exports = sequelize;
