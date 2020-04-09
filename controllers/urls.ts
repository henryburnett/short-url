const path = require('path');

import { Url } from '../models/urls';

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/index.html'));
};

exports.create = function (req, res) {
    var newUrl = new Url(req.body);
    console.log(req.body);
    newUrl.save(function (err) {
            if(err) {
            res.status(400).send('Unable to save url to database');
        } else {
            res.redirect('/urls/geturl');
        }
  });
};

exports.list = function (req, res) {
    Url.find({}).exec(function (err, urls) {
            if (err) {
                    return res.send(500, err);
            }
            res.render('geturl', {
                    urls: urls
         });
    });
};