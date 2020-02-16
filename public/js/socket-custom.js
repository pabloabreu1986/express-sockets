var socket = io();

// .on es para escuchar 
socket.on('connect', () => {
    console.log('Conectado al servidor')
});

socket.on('disconnect', () => {
    console.log('Sin conexión con el servidor')
});

socket.on('enviarMensaje', (mensaje) => {
    console.log(mensaje);

});

// Para escuchar el boradcast
socket.on('broadMensaje', (broadData) => {
    console.log(broadData)
});

// .emit es para enviar/emitir
socket.emit('enviarMensaje', {
    usuario: 'Pablo',
    mensaje: 'Hola Mundo'
}, (respuesta) => {
    console.log(respuesta)
});