const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 4000;
const SocketServices = require("./services/chat.service");
const fetchData = require("./fetch");
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });
//variable global
global.__basedir = __dirname;
global.io = io;

app.set("view engine", "ejs");
app.set("views", "./src/views");

//middleware
// app.use((req, res, next) => {
//   res.io = io;
//   next();
// });
global.io.on("connection", SocketServices.connection);
app.use(require("./routes/chat.route"));
http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}`);
});
