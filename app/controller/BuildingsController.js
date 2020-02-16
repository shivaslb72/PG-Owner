const Building = require("../models/building");

module.exports.list = (req, res) => {
  Building.find()
    .populate("amenities", ["_id", "name"])
    .then(respose => {
      res.json(respose);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const building = new Building(body);
  building
    .save()
    .then(building => {
      res.json(building);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Building.findById(id)
    .populate("amenities", ["_id", "name"])
    .then(building => {
      if (building) {
        res.json(building);
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
  Building.findByIdAndRemove(id)
    .then(building => {
      if (building) {
        res.json(building);
      } else {
        res.json(building);
      }
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Building.findByIdAndUpdate(id, body)
    .then(building => {
      if (building) {
        res.json(building);
      } else {
        res.json(building);
      }
    })
    .catch(err => {
      res.json(err);
    });
};
