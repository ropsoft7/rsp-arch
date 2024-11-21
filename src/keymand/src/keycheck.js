const iohook = require('iohook');

// Objeto para rastrear o estado das teclas
const keysPressed = {};

// Evento para quando uma tecla é pressionada
iohook.on('keydown', (event) => {
    keysPressed[event.keycode] = true; // Marca a tecla como pressionada
});

// Evento para quando uma tecla é liberada
iohook.on('keyup', (event) => {
    delete keysPressed[event.keycode]; // Remove a tecla da lista
});

// Função para verificar se uma tecla específica está pressionada
const isKeyPressed = (keyCode) => {
    return !!keysPressed[keyCode];
};33

module.exports = isKeyPressed; // 18 é o código da tecla Alt
