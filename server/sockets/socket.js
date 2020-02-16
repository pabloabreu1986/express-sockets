const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    // Emitir a cada uno cuando se conecte
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la App'
    });

    // Emitir a todos los conectados
    client.broadcast.emit('broadMensaje', {
        usuario: 'Administrador',
        mensaje: 'Hola a todos motherf#&#%s'
    });

    // Escuchar desconexión
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Responder al emisor
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        if (data.usuario) {
            callback({
                resp: 'User llego Ok'
            });
        } else {
            callback({
                resp: 'Llego sin User !!!!'
            });
        }
    });
});