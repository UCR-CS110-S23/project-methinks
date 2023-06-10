export default function messageHandler(io, socket) {
  const createdMessage = (msg) => {
    io.to(msg.room).emit("newIncomingMessage", msg);
  };

  socket.on("createdMessage", createdMessage);

  socket.on("joinRoom", (room) => {
    socket.join(room);
  });

  socket.on("leaveRoom", (room) => {
    socket.leave(room);
  });
}
