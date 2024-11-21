const iohook = require('iohook');

iohook.on('keydown', (event) => {
   console.log('Tecla pressionada:', event.keycode);
});

// Inicia o iohook
iohook.start()