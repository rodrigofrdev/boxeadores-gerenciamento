const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Equipe = sequelize.define(
  "Equipe",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true, // Adiciona as colunas `createdAt` e `updatedAt`
    tableName: "equipes",
  }
);

module.exports = Equipe;

// src/models/Boxeador.js
// const Boxeador = sequelize.define("Boxeador", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   nome: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   idade: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   categoria: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   peso: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   foto: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
// }, {
//   timestamps: true,
//   tableName: "boxeadores",
// });

// Boxeador.belongsTo(Equipe, { foreignKey: "equipeId", as: "equipe" });
// module.exports = Boxeador;

// // src/models/Luta.js
// const Luta = sequelize.define("Luta", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   data: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   local: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   resultado: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
// }, {
//   timestamps: true,
//   tableName: "lutas",
// });

// Luta.belongsTo(Boxeador, { as: "boxeador1", foreignKey: "boxeador1Id" });
// Luta.belongsTo(Boxeador, { as: "boxeador2", foreignKey: "boxeador2Id" });

// module.exports = Luta;

// // src/models/Treinador.js
// const Treinador = sequelize.define("Treinador", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   nome: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   experiencia: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// }, {
//   timestamps: true,
//   tableName: "treinadores",
// });

// module.exports = Treinador;

// // src/models/Usuario.js
// const Usuario = sequelize.define("Usuario", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   senha: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   role: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: "atleta",
//   },
// }, {
//   timestamps: true,
//   tableName: "usuarios",
// });

// module.exports = Usuario;

// // src/models/Estatisticas.js
// const Estatisticas = sequelize.define("Estatisticas", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   vitorias: {
//     type: DataTypes.INTEGER,
//     defaultValue: 0,
//   },
//   derrotas: {
//     type: DataTypes.INTEGER,
//     defaultValue: 0,
//   },
//   nocautes: {
//     type: DataTypes.INTEGER,
//     defaultValue: 0,
//   },
// }, {
//   timestamps: true,
//   tableName: "estatisticas",
// });

// Estatisticas.belongsTo(Boxeador, { foreignKey: "boxeadorId" });
// module.exports = Estatisticas;

// // src/models/Evento.js
// const Evento = sequelize.define("Evento", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   nome: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   data: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
// }, {
//   timestamps: true,
//   tableName: "eventos",
// });

// module.exports = Evento;

// // src/models/Ranking.js
// const Ranking = sequelize.define("Ranking", {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   posicao: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// }, {
//   timestamps: true,
//   tableName: "rankings",
// });

// Ranking.belongsTo(Boxeador, { foreignKey: "boxeadorId" });
// module.exports = Ranking;

// // src/models/Treinador_Boxeador.js
// const Treinador_Boxeador = sequelize.define("Treinador_Boxeador", {}, { timestamps: false, tableName: "treinador_boxeador" });

// Treinador.belongsToMany(Boxeador, { through: Treinador_Boxeador, foreignKey: "treinadorId" });
// Boxeador.belongsToMany(Treinador, { through: Treinador_Boxeador, foreignKey: "boxeadorId" });

// module.exports = Treinador_Boxeador;

