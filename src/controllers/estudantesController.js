const Estudante = require("../models/estudante");
const User = require("../models/user");

const show = async (req, res) => {
  try {
    const estudantes = await Estudante.findAll({});
    return res.status(200).json(estudantes);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const showOne = async (req, res) => {
  try {
    const { id } = req.params;
    const estudante = await Estudante.findOne({ where: { id: id } });
    if (estudante) {
      return res.status(200).json(estudante);
    } else {
      return res.status(404).json("Estudante não encontrado!")
    }
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const estudante = req.body;
    await Estudante.update(estudante, { where: { id: id } });
    return res.status(200).json("Estudante foi cadastrado com sucesso!");
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const deleting = async (req, res) => {
  try {
    const { id } = req.params;
    const estudante = await Estudante.findOne({ where: { id: id } });
    await Estudante.destroy({ where: { id: id } });
    await User.destroy({ where: { id: estudante.user_id } });
    return res.status(200).json("Estudante Deletado com sucesso!");
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

module.exports = {
  show,
  update,
  showOne,
  deleting,
};
