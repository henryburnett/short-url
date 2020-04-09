const path = require('path');

import { Url } from '../models/urls';
import { createKey } from '../functions/functions';

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/urls.html'));
};

exports.create = function (req, res) {
    const url = req.body.url
    const key = createKey();

    const newUrl = new Url({key, url});

    newUrl.save(function (err) {
            if(err) {
            console.log(req.body)
            console.log({err})
            res.status(400).send("Unable to save data.");
        } else {
            res.status(200).send(newUrl)
        }
  });
};

exports.list = function (req, res) {
    Url.find({}).exec(function (err, urls) {
            if (err) {
                    return res.send(500, err);
            }
            res.send(urls)
            /*res.render('geturl', {
                    urls: urls
         });*/
    });
};