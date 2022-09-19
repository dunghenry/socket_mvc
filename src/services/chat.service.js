class SocketServices {
  connection(socket) {
    socket.on("disconnect", () => {
      console.log(socket.id);
    });
    socket.on("chat message", (msg) => {
      io.emit("chat message", msg);
    });
  }
}
module.exports = new SocketServices();
