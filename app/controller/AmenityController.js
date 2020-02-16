const Amenity = require("../models/amenities");

module.exports.list = (req, res) => {
  Amenity.find()
    .then(respose => {
      res.json(respose);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const amenity = new Amenity(body);
  amenity
    .save()
    .then(amenity => {
      res.json(amenity);
    })
    .catch(err => {
      res.json(amenity);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Amenity.findById(id)
    .then(amenity => {
      if (amenity) {
        res.json(amenity);
      } else {
        res.json(amenity);
      }
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Amenity.findByIdAndRemove(id)
    .then(amenity => {
      if (amenity) {
        res.json(amenity);
      } else {
        res.json(amenity);
      }
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Amenity.findByIdAndUpdate(id, body)
    .then(amenity => {
      if (amenity) {
        res.json(amenity);
      } else {
        res.json(amenity);
      }
    })
    .catch(err => {
      res.json(err);
    });
};
