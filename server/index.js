const express = require("express");
const itemRoutes = require('./routes/item.routes')
const cors = require ('cors')

var event = require('./database-mysql');

const app = express();
const PORT = 3000

app.use(express.static(__dirname + "/../client/public"));

app.use(express.json());
app.use(cors())

app.use(express.urlencoded({ extended: true }));

app.use("/events", itemRoutes);

app.listen(PORT, function () {
  console.log(`listening on port http://localhost:${PORT} !`);
});
