const Serie = require("../models/serie");
const serieValidation = require("../validations/serieValidation");
const store = async (req, res) => {
  try {
    const serie = req.body;
    const { error, value } = serieValidation.validate({
      nome: serie.nome,
      nome_professor: serie.nomeProfessor,
    });
    if (!error) {
      const serie = await Serie.create(value);
      return res.status(201).json(serie);
    } else {
      return res.status(400).json(error.message);
    }
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const show = async (req, res) => {
  try {
    const serie = await Serie.findAll();
    return res.status(200).json(serie);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const update = async (req, res) => {
  try {
    const serie = req.body;
    const { id } = req.params;
    const { error, value } = serieValidation.validate({
      nome: serie.nome,
      nome_professor: serie.nomeProfessor,
    });
    if (!error) {
      await Serie.update(value, { where: { id: id } });
      return res.status(200).json("Usuário atualizado com sucesso!");
    } else {
      return res.status(400).json(error.message);
    }
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const deleting = async (req, res) => {
  try {
    const { id } = req.params;
    await Serie.destroy({ where: { id: id } });
    return res.status(200).json("Serie deletada com sucesso!");
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

module.exports = {
  store,
  update,
  show,
  deleting,
};
