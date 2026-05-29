import express from 'express'
import jwt from 'jsonwebtoken'

const router = express.Router()

const SECRET_KEY = process.env.JWT_SECRET || 'mi_secreto_super_seguro'

router.post('/login', (req, res) => {
    const { usuario, password } = req.body

    // validación simple (puedes cambiarla)
    if (usuario === 'admin' && password === '1234') {

        const token = jwt.sign(
            { usuario },
            SECRET_KEY,
            { expiresIn: '1h' }
        )

        res.json({
            message: 'Login exitoso',
            token
        })

    } else {
        res.status(401).json({
            message: 'Credenciales incorrectas'
        })
    }
})

export default router