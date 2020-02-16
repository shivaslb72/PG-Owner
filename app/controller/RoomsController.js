const Room = require("../models/rooms");

module.exports.list = (req, res) => {
  Room.find()
    .populate("building", ["_id", "name"])
    .then(respose => {
      res.json(respose);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const room = new Room(body);
  room
    .save()
    .then(room => {
      res.json(room);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Room.findById(id)
    .populate("building", ["_id", "name"])
    .then(room => {
      if (room) {
        res.json(room);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Room.findByIdAndRemove(id)
    .then(room => {
      if (room) {
        res.json(room);
      } else {
        res.json(room);
      }
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Room.findByIdAndUpdate(id, body)
    .then(room => {
      if (room) {
        res.json(room);
      } else {
        res.json(room);
      }
    })
    .catch(err => {
      res.json(err);
    });
};
