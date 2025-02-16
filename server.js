const express = require("express");
const { syncDatabase } = require("./models/index");

const app = express();

(async () => {
  await syncDatabase();
  
  app.listen(process.env.SERV_PORT, () => {
    console.log("Servidor rodando na porta XXXX");
  });
})();
