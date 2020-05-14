const Aulas = require("../models/aulas");
const aulasValidation = require("../validations/aulasValidation");

const store = async (req, res) => {
  try {
    const aulas = req.body;
    const { error, value } = aulasValidation.validate(aulas);
    if (!error) {
      const aula = await Aulas.create(value);
      return res.status(201).json(aula);
    }
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const show = async (req, res) => {
  try {
    const aulas = await Aulas.findAll();
    return res.status(200).json(aulas);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const showOne = async (req, res) => {
  try {
    const { id } = req.params;
    const aula = await Aulas.findOne({ where: { id: id } });
    return res.status(200).json(aula);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const aulas = req.body;
    await Aulas.update(aulas, { where: { id: id } });
    return res.status(200).json("Aulas atualizada com sucesso!");
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const deleting = async (req, res) => {
  try {
    const { id } = req.params;
    await Aulas.destroy({ where: { id: id } });
    return res.status(200).json("Aula deletada com sucesso!");
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

module.exports = {
  store,
  show,
  showOne,
  update,
  deleting,
};
