const
    MongoClient = require('mongodb').MongoClient,
    setting = require('./setting');

MongoClient.connect('mongodb://' + setting.host + '/' + setting.db, function (err, client) {
    if (err) {
        return console.dir(err);
    }
    console.log('connected to db');
    
    const db = client.db('mongo');
    db.collection('users', function (err, collection) {
        let docs = [
            {
                name: 'okipo',
                score: 80
            },
            {
                name: 'myq',
                score: 78
            },
            {
                name: 'soraha',
                score: 90
            },
        ];
        // collection.find().toArray(function (err, items) {
        //     console.log(items);
        // });
        let stream = collection.find().stream();
        stream.on('data', function (item) {
            console.log(item);
        });
        stream.on('end', function () {
            console.log('finished.')
        });
    });
});