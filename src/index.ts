//const express = require('express') // CJS Common JS
import express from 'express' // ESM Ecmascript modules

const app = express()

// Routing
app.get('/', (req, res) => {
    res.send('Hola Mundo desde Express')
})

app.get('/ecommerce', (req, res) => {
    res.send('Este es el Ecommerce')
})

app.get('/nosotros', (req, res) => {
    res.send('Esta es la página de nosotros')
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('Servidor iniciado en el puerto:', port)
})

