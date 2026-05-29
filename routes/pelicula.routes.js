import express from 'express'
import * as service from '../services/pelicula.service.js'

const router = express.Router()

router.get('/peliculas', async (req, res) => {
    const data = await service.getAll()
    res.send(data)
})

router.get('/peliculas/:id', async (req, res) => {
    const { id } = req.params
    const data = await service.getById(id)

    if (data) {
        res.send(data)
    } else {
        res.status(404).send('No encontrado')
    }
})

router.post('/peliculas', async (req, res) => {
    const data = await service.create(req.body)
    res.send(data)
})

router.put('/peliculas/:id', async (req, res) => {
    const { id } = req.params
    const data = await service.update(id, req.body)
    res.send(data)
})

router.delete('/peliculas/:id', async (req, res) => {
    const { id } = req.params
    const data = await service.remove(id)
    res.send(data)
})

export default router