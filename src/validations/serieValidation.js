const Joi = require("@hapi/joi");

const serieValidation = Joi.object({
    nome: Joi.string().required(),
    materia: Joi.array().optional(),
});

module.exports = serieValidation; 