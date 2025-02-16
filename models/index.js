const sequelize = require("../config/database");
const Equipe = require("./Equipe");

const syncDatabase = async () => {
  try {
    // Sincroniza todos os modelos de uma vez.
    await sequelize.sync({ alter: true });
    console.log("Banco de dados sincronizado com sucesso");
  } catch (error) {
    console.error("Erro ao sincronizar o banco de dados:", error);
  }
};

module.exports = { syncDatabase, Equipe };
