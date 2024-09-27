import { Router } from 'express'
import produtoRoute from './produto.route.js'
import fotoRouter from './foto.route.js'

const router = Router()

router.use('/produtos', produtoRoute)
router.use('/fotos', fotoRouter)

export default router