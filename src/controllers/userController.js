const User = require("../models/user");
const Endereco = require("../models/endereco");
const userValidation = require("../validations/userValidation");
const enderecoValidation = require("../validations/enderecoValidation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken = (user) => {
  return jwt.sign(
    { email: user.email, tipo: user.tipo },
    process.env.KEY_TOKEN
  );
};

const updateFotoPerfil = async (req, res) => {
  try {
    const {id} = req.params;
    const fileName = req.file.filename;
    const fotoUser = await User.update({ file: fileName }, { where: {id: id }});
    if (fotoUser) {
      return res.status(200).json("Foto do usuário atualizado com o sucesso!");
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

const showUserOne = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id: id } });
    user.senha = undefined;
    const endereco = await Endereco.findOne({ where: { user_id: id } });
    return res.status(200).json({ user, endereco });
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const showUser = async (req, res) => {
  try {
    const user = await User.findAll();
    const endereco = [];
    for (var i = 0; i < user.length; i++) {
      endereco.push(await Endereco.findOne({ where: { user_id: user[i].id } }));
      user[i].senha = undefined;
    }
    console.log(endereco);
    return res.status(200).json({ user, endereco });
  } catch (err) {
    return res.status(400).json(err.message);
  }
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
    const file = req.file.filename;
    const user = req.body;
    const endereco = {
      rua: user.rua,
      numero: user.numero,
      cidade: user.cidade,
      bairro: user.bairro,
      estado: user.estado,
      telefone: user.telefone,
      referencia: user.referencia,
    };
    const { error, value } = userValidation.validate({
      nome: user.nome,
      login: user.login,
      senha: user.senha,
      email: user.email,
      tipo: user.tipo,
      serie: user.serie,
      matricula: user.matricula,
      responsavel_aluno_um: user.responsavel_aluno_um,
      responsavel_aluno_dois: user.responsavel_aluno_dois,
      file: file,
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
    const user = req.body;
    await User.update(user, { where: { id: id } });
    return res.status(200).json(`O Usuário foi atualizado com sucesso!`);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const updateEndereco = async (req, res) => {
  try {
    const { user_id } = req.params;
    const user = req.body;
    const endereco = {
      rua: user.rua,
      numero: user.numero,
      cidade: user.cidade,
      bairro: user.bairro,
      estado: user.estado,
      telefone: user.telefone,
      referencia: user.referencia,
    };
    await Endereco.update(endereco, { where: { user_id: user_id } });
    return res.status(200).json(`O Endereço foi atualizado com sucesso!`);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const logOn = async (req, res) => {
  const { login, senha } = req.body;
  if (!login || !senha) return res.status(400).json("Dados Insuficiente");
  try {
    const user = await User.findOne({ where: { login: login } });
    if (!user)
      return res.status(400).send({ error: "Usuário e/ou senha inválidos!" });
    const pass_ok = await bcrypt.compare(senha, user.senha);
    if (!pass_ok)
      return res.status(401).send({ error: "Usuário e/ou senha inválidos" });
    user.password = undefined;
    return res.status(200).json({ id: user.id, token: user.token });
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const deletUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id: id } });
    return res.status(200).json("Usuário deletado com sucesso!");
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

module.exports = {
  store,
  updateUser,
  updateEndereco,
  logOn,
  showUser,
  showUserOne,
  deletUser,
  updateFotoPerfil,
};
