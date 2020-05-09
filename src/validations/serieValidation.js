const Joi = require("@hapi/joi");

const serieValidation = Joi.object({
    nome: Joi.string().required(),
    nome_professor: Joi.string().optional()
});

module.exports = serieValidation; 