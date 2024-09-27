import { param, body } from 'express-validator'

export const produtoValidator = [
    body('nome').isString().withMessage("Nome é Obrigatorio"),
    body('preco').isNumeric().withMessage("Preço é Obrigatorio"),
    body('descricao').isString().withMessage("Descrição é Obrigatorio"),

]

export const produtoUpdateValidator = [
    param('id').isInt().withMessage("ID é obrigatorio"),
    body('nome').isString().withMessage("Nome é Obrigatorio"),
    body('preco').isNumeric().withMessage("Preço é Obrigatorio"),
    body('descricao').isString().withMessage("Descrição é Obrigatorio"),
  ]
  
  export const produtoIdValidator = [
    param('id').isInt().withMessage("Id é obrigatorio"),
  ]