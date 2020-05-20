const Professor = require("../models/professor");
const User = require("../models/user");

const show = async (req, res) => {
  try {
    const professor = await Professor.findAll({});
    const user = await User.findOne({ where: { id: professor[0].user_id } });
    return res.status(200).json({ user: user, professor: professor });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const showOne = async (req, res) => {
  try {
    const { id } = req.params;
    const professor = await Professor.findOne({ where: { id: id } });
    const user = await User.findOne({ where: { id: professor.user_id } });
    user.senha = undefined;
    return res.status(200).json({ user: user, professor: professor });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const professor = req.body;
    const oneProfessor = await Professor.findOne({ where: { id: id } });
    if (oneProfessor) {
      await User.update(professor, { where: { id: oneProfessor.user_id } });
      return res.status(200).json("Professor atualizado com sucesso!");
    } else {
      return res.status(404).json("Professor não encontrado!");
    }
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const deleting = async(req, res) => {
    try { 
        const { id } = req.params;
        const professor = await Professor.findOne({ where: {id: id}});
        if(professor){
            await User.destroy({where: {id: professor.user_id}});
            return res.status(200).json("Professor deletado com sucesso!")
        } else {
            return res.status(400).json("Professor não encontrado!")
        }
    } catch(error) {
        return res.status(400).json(error.message)
    }
}

module.exports = {
  show,
  showOne,
  update,
  deleting
};
