const db = require('../models');


module.exports = function (app) {
    app.get('/api/tweet', function (req, res) {
        db.Tweet.find({})
            .then(function (tweets) {
                res.json(tweets);
            })
            .catch(function (err) {
                res.json(err);
            });
    });


    app.post('/api/tweet', function (req, res) {
        db.Tweet.create(req.body)
            .then(function (tweets) {
                res.json(tweets);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.delete('/api/tweet/:id', function (req, res, next) {
        db.Tweet.findByIdAndRemove({
                _id: req.params.id
            })
            .then(function () {
                res.send('ok')
            })

    });
};