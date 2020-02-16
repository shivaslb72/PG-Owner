const Tanent = require("../models/tanents");

module.exports.list = (req, res) => {
  Tanent.find()
    .populate("building", ["_id", "name"])
    .populate("room", ["_id", "name"])
    .then(respose => {
      res.json(respose);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const tanent = new Tanent(body);
  tanent
    .save()
    .then(tanent => {
      res.json(tanent);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Tanent.findById(id)
    .populate("building", ["_id", "name"])
    .populate("room", ["_id", "name"])
    .then(tanent => {
      if (tanent) {
        res.json(tanent);
      } else {
        res.json(tanent);
      }
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Tanent.findByIdAndRemove(id)
    .then(tanent => {
      if (tanent) {
        res.json(tanent);
      } else {
        res.json(tanent);
      }
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Tanent.findByIdAndUpdate(id, body)
    .then(tanent => {
      if (tanent) {
        res.json(tanent);
      } else {
        res.json(tanent);
      }
    })
    .catch(err => {
      res.json(err);
    });
};
