const Joi = require("@hapi/joi");

const addressValidation = Joi.object({
  usersId: Joi.number().optional(),
  rua: Joi.string().optional(),
  numero: Joi.string().optional(),
  cidade: Joi.string().optional(),
  bairro: Joi.string().optional(),
  estado: Joi.string().optional(),
  telefone: Joi.string().optional(),
  referencia: Joi.string().optional(),
});

module.exports = addressValidation;
