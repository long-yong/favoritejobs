// routes.js

var express = require("express");
const bp = require('body-parser');
const controller = require('./controller');

module.exports = function(app) {

    app.set('views', __dirname + '/views');
    app.use(express.static(__dirname + "/static"));
    app.use(bp.urlencoded({extended:true}));
    app.use(bp.json());

    app.get('/alluser',                 controller.allUser);
    app.post('/newuser',                controller.newUser);
    app.post('/chkuser',                controller.chkUser);
    app.get('/deluser/:id',             controller.delUser);

    app.get('/alljob/:email',           controller.allJob);
    app.get('/onejob/:id',              controller.oneJob);
    app.post('/newjob',                 controller.newJob);
    app.post('/upjob/:id',              controller.upJob);
    app.get('/deljob/:id',              controller.delJob);
    app.get('/alljobsorted',            controller.allJobSorted);

    return app;
}

