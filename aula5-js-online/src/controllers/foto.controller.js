import Foto from '../models/foto.model.js'
import { validationResult } from 'express-validator'

export default class FotoController{
  static async index(req, res) {
    const fotos = await Foto.findMany()
    res.json(fotos)
  }
    static async index(req, res) {
      const fotos = await Foto.findMany()
      res.json(fotos)
    }
    static async create(req, res) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() })
        }
        const foto = await Foto.create({
          data: req.body
        })
        res.json(foto)
      }  

      static async show(req, res) {
        
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() })
        }
        const foto = await Foto.findUnique({
          where: {
            id: parseInt(req.params.id)
          }
        })
        if (!foto) {
          return res.status(404).json({ message: 'Foto não encontrado' })
        }
        res.json(foto)
      }

      static async update(req, res) {
        
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() })
        }
        const foto = await Foto.findUnique({
          where: {
            id: parseInt(req.params.id)
          }
        })
        if (!foto) {
          return res.status(404).json({ message: 'Foto não encontrado' })
        }
        const updatedFoto = await Foto.update({
          where: {
            id: parseInt(req.params.id)
          },
          data: req.body
        })
        res.json(updatedFoto)
      }


      static async delete(req, res) {
        
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() })
        }
        const foto = await Foto.findUnique({
          where: {
            id: parseInt(req.params.id)
          }
        })
        if (!foto) {
          return res.status(404).json({ message: 'Foto não encontrado' })
        }
        await Foto.delete({
          where: {
            id: parseInt(req.params.id)
          }
        })
        res.status(204).json({ message: 'Foto deletado com sucesso' })
      }


      
  }