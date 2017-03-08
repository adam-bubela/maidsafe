'use strict';

var loki = require('lokijs'),
    db = new loki('MaidSafe'),
    dbCollection = db.addCollection('ToDo');

   dbCollection.insert({name: 'bla bla bla'});
   dbCollection.insert({name: 'another test'});
   dbCollection.insert({name: 'another xxx'});

console.log("Loki DB initialised. Memory usage: "+Math.ceil(db.serialize().length/1024)+"KB");
console.log('Total records: '+dbCollection.count()+' records');
    
    
   
module.exports = dbCollection;
