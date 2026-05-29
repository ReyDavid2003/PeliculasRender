import express from 'express'
import bodyParser from 'body-parser'
import router from './routes/pelicula.routes.js'
import logger from './middlewares/logger.js'
import authRoutes from './routes/auth.routes.js'
import validarToken from './middlewares/auth.js'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

// Logger
app.use(logger)

// Ruta pública para comprobar que la API está viva en Render
app.get('/', (req, res) => {
    res.json({
        message: 'API de películas funcionando correctamente',
        endpoints: {
            login: 'POST /login',
            peliculas: 'GET /peliculas'
        }
    })
})

// Login público para obtener token
app.use('/', authRoutes)

// Proteger rutas de películas con JWT
app.use(validarToken)

// Rutas protegidas
app.use('/', router)

app.listen(port, '0.0.0.0', () => {
    console.log('Servidor corriendo en puerto:', port)
})
