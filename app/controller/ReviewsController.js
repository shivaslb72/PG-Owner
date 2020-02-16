const Review = require('../models/review')

module.exports.list = (req,res)=>{
    Review.find()
    .then(review=>{
        res.json(review)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.create = (req, res) => {
    const body = req.body
    const review = new Review(body)
    review.save()
        .then(review => {
            res.json(review)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Review.findById(id)
    .then(review => {
        if(review) {
            res.json(review)
        } else {
            res.json(review)
        }
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Review.findByIdAndRemove(id)
    .then(review => {
        if(review) {
            res.json(review)
        } else {
            res.json(review)
        }
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports.update = (req,res)=>{
    const id = req.params.id
    const body = req.body
    Review.findByIdAndUpdate(id,body)
    .then(review => {
        if(review) {
            res.json(review)
        } else {
            res.json(review)
        }
    })
    .catch(err => {
        res.json(err)
    })
}