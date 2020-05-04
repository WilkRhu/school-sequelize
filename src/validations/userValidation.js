const Joi = require("@hapi/joi");

const userValidation = Joi.object({
  nome: Joi.string().min(3).max(30).required(),
  login: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "com.br", "net.ebr"] } })
    .required(),
  senha: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,100}$")),
  data_nascimento: Joi.string().required(),
  tipo: Joi.string().required(),
  token: Joi.string().optional(),
  serie: Joi.string().optional(),
  matricula: Joi.string().optional(),
  responsavel_aluno_um: Joi.string().optional(),
  responsavel_aluno_dois: Joi.string().optional(),
  file: Joi.string().optional(),
  usersId: Joi.number().optional(),
  rua: Joi.string().optional(),
  numero: Joi.string().optional(),
  cidade: Joi.string().optional(),
  bairro: Joi.string().optional(),
  estado: Joi.string().optional(),
  telefone: Joi.string().optional(),
  referencia: Joi.string().optional(),
});


module.exports = userValidation;
