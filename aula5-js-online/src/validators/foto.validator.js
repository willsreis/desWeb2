import { param, body } from 'express-validator'

export const fotoValidator = [
    body('titulo').isString().withMessage("Titulo é Obrigatorio"),
    body('url').isString().withMessage("URL é Obrigatorio"),
    body('produtoId').isNumeric().withMessage("ProdudoId é Obrigatorio"),

]

export const fotoUpdateValidator = [
    param('id').isInt().withMessage("ID é obrigatorio"),
    body('titulo').isString().withMessage("Titulo é Obrigatorio"),
    body('url').isString().withMessage("URL é Obrigatorio"),
    body('produtoId').isNumeric().withMessage("ProdudoId é Obrigatorio"),
  ]
  
  export const fotoIdValidator = [
    param('id').isInt().withMessage("Id é obrigatorio"),
  ]