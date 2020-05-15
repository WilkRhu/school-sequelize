const Joi = require("@hapi/joi");

const estudanteValidation = Joi.object({
  user_id: Joi.number().optional(),
  serie_id: Joi.number().optional(),
  matricula: Joi.string().optional(),
  responsavel_aluno_um: Joi.string().optional(),
  responsavel_aluno_dois: Joi.string().optional(),
  data_nascimento: Joi.string().optional(),
});

module.exports = estudanteValidation;
