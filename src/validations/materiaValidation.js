const Joi = require("@hapi/joi");

const materiaValidation = Joi.object({
    nome: Joi.string().required(),
});

module.exports = materiaValidation; 