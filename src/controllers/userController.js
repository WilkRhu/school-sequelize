const User = require("../models/user");
const Endereco = require("../models/endereco");
const userValidation = require("../validations/userValidation");
const enderecoValidation = require("../validations/enderecoValidation");
const jwt = require("jsonwebtoken");

const createToken = (user) => {
  return jwt.sign(
    { nome: user.nome, email: user.email, login: user.login },
    process.env.KEY_TOKEN
  );
};

const createEnderecoUser = async (endereco, id) => {
  try {
    const { error, value } = enderecoValidation.validate(endereco);
    if (!error) {
      await Endereco.create({
        user_id: id || "não cadastrado",
        rua: value.rua || "não cadastrado",
        numero: value.numero || "não cadastrado",
        cidade: value.cidade || "não cadastrado",
        bairro: value.bairro || "não cadastrado",
        estado: value.estado || "não cadastrado",
        telefone: value.telefone || "não cadastrado",
        referencia: value.referencia || "não cadastrado",
      });
      return "Endereço cadastrado com sucesso!";
    }
  } catch (err) {
    return err.message;
  }
};

const store = async (req, res) => {
  try {
    const { user, endereco } = req.body;
    const { error, value } = userValidation.validate({
      nome: user.nome,
      login: user.login,
      senha: user.senha,
      email: user.email,
      tipo: user.tipo,
      data_nascimento: user.data_nascimento,
      token: createToken(user),
    });
    if (!error) {
      const users = await User.create(value);
      createEnderecoUser(endereco, users.id);
      return res.status(201).json({ id: users.id, token: users.token });
    } else {
      return res.status(400).json(error.message);
    }
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req.body;
    await User.update(user, { where: { id: id } });
    return res.status(200).json(`O Usuário foi atualizado com sucesso!`);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const updateEndereco = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { endereco } = req.body;
    await Endereco.update(endereco, { where: { user_id: user_id } });
    return res.status(200).json(`O Endereço foi atualizado com sucesso!`);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

module.exports = {
  store,
  updateUser,
  updateEndereco,
};
