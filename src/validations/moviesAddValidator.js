const { check, body } = require("express-validator");

module.exports = [
  check("title")
    .notEmpty()
    .withMessage("Nombre es obligatorio"),
  check("rating")
    .notEmpty()
    .withMessage("Rating es obligatorio")
    .bail()
    .isDecimal()
    .withMessage("Rating debe ser un valor numerico"),
  check("awards")
    .notEmpty()
    .withMessage("Awards es obligatorio")
    .isDecimal()
    .withMessage("Rating debe ser un valor numerico"),
  body('release_date')
    .notEmpty()
    .withMessage('La fecha de lazamiento es obligatoria'),
  check('length')
    .notEmpty()
    .withMessage('Duracion(min) es obligatorio')
    .isDecimal()
    .withMessage('Duracion(min) debe ser un valor numerico')  

];
