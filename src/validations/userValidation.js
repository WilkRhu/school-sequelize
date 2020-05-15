const Joi = require("@hapi/joi");

const userValidation = Joi.object({
  nome: Joi.string().min(3).max(30).required(),
  login: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "com.br", "net.ebr"] } })
    .required(),
  senha: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,100}$")),
  tipo: Joi.string().required(),
  token: Joi.string().optional(),
  file: Joi.string().optional(),
});


module.exports = userValidation;
