const jwt = require("jsonwebtoken");

//Função que impede a passagem de usuários não autenticados
const auth = (req, res, next) => {
  const token_header = req.headers.auth;

  if (!token_header)
    return res.status(401).send({ error: "Token não enviado!" });

  jwt.verify(token_header, process.env.KEY_TOKEN, (err, decoded) => {
    if (err) return res.status(401).send({ error: "Token Inválido!" });
    if (decoded.tipo == "admin") return next();
  });
};

module.exports = auth;
