document.addEventListener('DOMContentLoaded', function() {
    // Verificar si estamos en la página 'inicio.html'
    if (window.location.pathname.endsWith('inicio.html')) {
      // Crear el elemento de bienvenida
      var bienvenida = document.createElement('div');
      bienvenida.id = 'bienvenida';
      bienvenida.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background-color: #f3f3f3; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center; z-index: 1000; transition: opacity 1s ease; opacity: 0;';
  
      // Crear y agregar el contenido al elemento de bienvenida
      var titulo = document.createElement('h1');
      titulo.textContent = 'Bienvenido a Nur Caffè';
      bienvenida.appendChild(titulo);
  
      // Agregar el elemento de bienvenida al cuerpo del documento
      document.body.appendChild(bienvenida);
  
      // Animación de entrada progresiva
      setTimeout(function() {
        bienvenida.style.opacity = '1';
      }, 500); // Comienza a aparecer después de 0.5 segundos
  
      // Función para eliminar la bienvenida después de un tiempo
      setTimeout(function() {
        bienvenida.style.opacity = '0';
        setTimeout(function() {
          document.body.removeChild(bienvenida);
        }, 1000); // Espera la transición antes de eliminar el elemento
      }, 5000); // Desaparece después de 5 segundos
    }
  });

  // JavaScript para interactividad
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si estamos en la página 'inicio.html'
    if (window.location.pathname.endsWith('inicio.html')) {
      // Crear el elemento de bienvenida
      var bienvenida = document.createElement('div');
      bienvenida.id = 'bienvenida';
      // ... (resto del código de creación de elementos)
  
      // Agregar el elemento de bienvenida al cuerpo del documento
      document.body.appendChild(bienvenida);
  
      // Animación de entrada progresiva
      setTimeout(function() {
        bienvenida.style.opacity = '1';
      }, 500); // Comienza a aparecer después de 0.5 segundos
  
      // Función para eliminar la bienvenida después de un tiempo
      setTimeout(function() {
        bienvenida.style.opacity = '0';
        setTimeout(function() {
          document.body.removeChild(bienvenida);
        }, 1000); // Espera la transición antes de eliminar el elemento
      }, 5000); // Desaparece después de 5 segundos
    }
  
    // Agregar interactividad a los botones y enlaces
    var botones = document.querySelectorAll('button, a');
    botones.forEach(function(boton) {
      boton.addEventListener('mouseover', function() {
        boton.style.backgroundColor = '#d2b48c'; // Cambia al color que prefieras
      });
      boton.addEventListener('mouseout', function() {
        boton.style.backgroundColor = ''; // Vuelve al color original
      });
    });
  });
  
  const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit-vip', (req, res) => {
  const { name, email, phone } = req.body;
  const accountSid = 'TU_ACCOUNT_SID_TWILIO'; // Tu Account SID de Twilio
  const authToken = 'TU_AUTH_TOKEN_TWILIO'; // Tu Auth Token de Twilio
  const client = new twilio(accountSid, authToken);

  const message = `Nuevo registro VIP: ${name}, ${email}, ${phone}`;
  client.messages.create({
    body: message,
    to: '+56 9 6776 6773', // Tu número de teléfono
    from: 'NUMERO_TWILIO' // Tu número de Twilio
  })
  .then((message) => console.log(message.sid))
  .catch((error) => console.error(error));

  res.send('Registro VIP recibido');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
