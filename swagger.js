const swaggerAutogen = require("swagger-autogen")('pt-br');

const doc = {
  info: {
    title: "Api Educandário Sonhos de Ícaro",
    description: "Sistema para aulas online",
  },
  securityDefinitions: {
    api_key: {
      type: "apiKey",
      name: "api_key",
      in: "header",
    },
  },
  security: {
    api_key: [],
  },
  host: "localhost:3001",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/routes.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
