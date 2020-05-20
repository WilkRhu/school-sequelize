const Materia = require("../models/materia");
const materiaValidation = require("../validations/materiaValidation");

const show = async (req, res) => {
  try {
    const materia = await Materia.findAll({});
    return res.status(200).json(materia);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const store = async (req, res) => {
  try {
    const materia = req.body;
    const { error, value } = materiaValidation.validate({
      nome: materia.nome,
    });
    if (!error) {
      const cadmateria = await Materia.create(value);
      return res.status(201).json(cadmateria);
    } else {
      return res.status(400).json(error.message);
    }
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

const update = async (req, res) => {
  try {
    const materia = req.body;
    const { id } = req.params;
    const { error, value } = materiaValidation.validate({
      nome: materia.nome,
    });
    if (!error) {
      await Materia.update(value, { where: { id: id } });
      return res.status(201).json("Matéria atualizada com sucesso!");
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
    await Materia.destroy({ where: { id: id } });
    return res.status(200).json("Matéria deletada com sucesso!");
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

module.exports = {
  show,
  store,
  update,
  deleting,
};
