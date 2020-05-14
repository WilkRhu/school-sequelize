const Joi = require("@hapi/joi");

const aulasValidation = Joi.object({
  serie_id: Joi.number().required(),
  materia_id: Joi.number().required(),
  titulo: Joi.string().required(),
  conteudo: Joi.string().optional(),
  link: Joi.string().optional(),
});

module.exports = aulasValidation;
