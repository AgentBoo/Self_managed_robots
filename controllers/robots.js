// NOTE: Modules, global variables
const express = require('express'),
      data = require('./../data.js');

let all = [], robotsJob = [], robotsNoJob = [];

// NOTE: Mongo bongo
const MongoClient = require('mongodb').MongoClient,
              url = 'mongodb://localhost:27017/robots';

MongoClient.connect(url, (err,db) => {
    let robotsData = db.collection('robotsData');

    robotsData.remove({});
    robotsData.insert(data.users);
    robotsData.find().toArray( (err, docs) => {return all = docs} );
    // robotsData.find({"job": {$ne: null}, "company": {$ne: null}, "university": {$ne: null}, "street_num": {$ne: null}}).toArray( (err, docs) => {return completeUsers = docs} );
    robotsData.find({"job": {$ne: null}, "company": {$ne: null}}).toArray( (err, docs) => {return robotsJob = docs});
    robotsData.find({"job": null, "company": null}).toArray( (err, docs) => {return robotsNoJob = docs});

    db.close();
});

// NOTE: Router
    router = express.Router();
    router.get('/index', (req, res) => {
      res.render('index', {'all': all});
    });
    router.get('/users/:id', (req, res) => {
       let robot;
       all.forEach( (e) => { if(req.params.id === e.username){return robot = e} } );
       res.render('user', {'robot': robot});
    });
    router.get('/fantastic', (req, res) => { res.redirect('/fantastic/robots') });
    router.get('/fantastic/robots', (req, res) => {
       res.render('fantasticRobots', {'robot': robotsJob});
    });
    router.get('/great', (req, res) => { res.redirect('/great/robots') });
    router.get('/great/robots', (req, res) => {
       res.render('greatRobots', {'robot': robotsNoJob});
    });


// NOTE: Exports
module.exports = router;
