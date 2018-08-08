const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({entended: true}));

MongoClient.connect('mongodb://localhost:27017', function(err, client){
    if (err){
        console.log(err);
        return
    }

    const db = client.db("bucketdb");

    console.log('Connected to database');

    server.post('/api/bucket_countries', function(req, res){
        const bucket_countriesCollection = db.collection('bucket_countries');
        const countryToSave = req.body;
        bucket_countriesCollection.save(countryToSave, function(err, result){
            if(err){
                console.log(err);
                res.status(500);
                res.send();
            }

            console.log('saved to database');
            res.status(201);
            res.json(result.ops[0]);
        });
    });

    server.get('/api/bucket_countries', function(req, res){
      const bucket_countriesCollection = db.collection('bucket_countries');
      bucket_countriesCollection.find().toArray(function(err, allCountries){
        if(err){
          console.log(err);
          res.status(500);
          res.send();
        }

        res.json(allCountries);
      });
    });

    server.delete('/api/bucket_countries', function(req, res){
      const filterObject = {};
      const bucket_countriesCollection = db.collection('bucket_countries');
      bucket_countriesCollection.deleteMany(filterObject, function(err, result){
        if(err){
          res.status(500);
          res.send();
        }

        res.status(204);
        res.send();
      });
    });

    server.get('/api/bucket_countries/:id', function(req, res){
      const bucket_countriesCollection = db.collection('bucket_countries');
      const objectID = ObjectID(req.params.id);
      const criteria = {_id: objectID};
      bucket_countriesCollection.findOne(criteria, function(err,country){
        if(err){
          res.status(500);
          res.send();
        }
        res.status(200);
        res.json(country);
      });
    });

    server.delete('/api/bucket_countries/:id', function(req, res){
      const bucket_countriesCollection = db.collection('bucket_countries');
      const objectID = ObjectID(req.params.id);
      const criteria = {_id: objectID};
      bucket_countriesCollection.deleteOne(criteria, function(err, result){
        if(err){
          res.status(500);
          res.send();
        }
        res.status(200);
        res.json(result);
      });
    });

    server.put('/api/bucket_countries/:id', function(req, res){
      const bucket_countriesCollection = db.collection('bucket_countries');
      const objectID = ObjectID(req.params.id);
      const filterObject = {_id: objectID};
      const updatedData = req.body;
      bucket_countriesCollection.update(filterObject, updatedData, function(err, result){
        if(err){
          res.status(500);
          res.send();
        }
        res.status(200);
        res.json(result);
        res.send();
      });
    });

    server.listen(3000, function(){
        console.log("Listening on port 3000");
    })
})
