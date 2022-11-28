var db = require("../database-mysql");

var selectAll = function (req, res) {
  db.query("SELECT * FROM events", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var add =(req,res) => {
  // let newEvent = {
  //   title : req.body.title,
  //   description : req.body.description,
  //   image : req.body.image ,
  //   availablePlaces: req.body.availablePlaces ,
  //   time : req.body.time
  // }
  db.query(`INSERT INTO events (title,description,image,availablePlaces,time) VALUES ( "${req.body.title}","${req.body.description}","${req.body.image}" ,${req.body.availablePlaces} ,"${req.body.time}" )`, (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  })
}
var remove = (req,res) => {
  db.query(`DELETE FROM events WHERE id = ${req.params.id} `, (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  })
}
var update =(req,res) => {

  db.query(`UPDATE  events SET title = "${req.body.title}" ,description = "${req.body.description}",image = "${req.body.image}",availablePlaces = ${req.body.availablePlaces},time ="${req.body.time}"   WHERE id = ${req.params.id} `, (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  })
}

module.exports = { selectAll , add , remove , update};
