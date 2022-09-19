class chatController {
  static homepage(req, res) {
    // console.log(res.io);
    // res.io.on("connection", (socket) => {
    //   console.log(socket.id);
    //   socket.on("chat message", (msg) => {
    //     res.io.emit("chat message", msg);
    //   });
    // });

    res.render("index");
  }
  static message(req, res) {
    const { msg } = req.query;
    // const io = res.io;
    io.emit("chat message", msg);
    return res.json({ status: 200, msg });
  }
}

module.exports = chatController;
