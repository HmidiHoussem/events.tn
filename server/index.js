const express = require("express");
const itemRoutes = require('./routes/item.routes')


var event = require('./database-mysql');

const app = express();
const PORT = 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/events", itemRoutes);

app.listen(PORT, function () {
  console.log(`listening on port http://localhost:${PORT} !`);
});
