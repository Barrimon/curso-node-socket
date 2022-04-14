

const socketController = (socket) => {
  console.log('Cliente conectado: ', socket.id);

  socket.on('disconnect', () => {
      console.log('Cliente desconectado: ',socket.id);
  });

  socket.on('enviar-mensaje', (payload, callback) => {
    const id = 123456789;
    callback({ id, fecha: new Date().getTime() });
    
    //Así lo emite solo al clinete que hizo el riquest
    //socket.emit('enviar-mensaje', payload);

    //Así lo emite a todos los clientes
    socket.broadcast.emit('enviar-mensaje', payload);
  });
}


module.exports = {
  socketController
}