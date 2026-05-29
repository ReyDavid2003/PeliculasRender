import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/pelicula.routes.js'
import logger from './middlewares/logger.js'
import authRoutes from './routes/auth.routes.js'
import validarToken from './middlewares/auth.js'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.use(logger)

app.get('/', (req, res) => {
    res.json({
        message: 'API de peliculas funcionando correctamente',
        endpoints: {
            login: '/login',
            peliculas: '/peliculas'
        }
    })
})

app.use('/', authRoutes)

app.use(validarToken)

app.use('/', router)

app.listen(port, '0.0.0.0', () => {
    console.log('Servidor corriendo en puerto:', port)
})