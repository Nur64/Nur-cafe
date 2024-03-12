const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Review = require('./models/review'); // Modelo de reseña que necesitarás crear

const app = express();

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/reviews', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware para parsear el cuerpo de las peticiones
app.use(bodyParser.json());

// Ruta para obtener todas las reseñas
app.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Ruta para crear una nueva reseña
app.post('/reviews', async (req, res) => {
  try {
    const newReview = new Review(req.body);
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
