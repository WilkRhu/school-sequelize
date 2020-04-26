const app = require("./src/app");

app.listen(process.env.PORT || 3001, () => {
  console.log("Servidor rodando na porta 3001!");
});
