const mongoose = require('mongoose');
const barSchema = new mongoose.Schema({
    x1: String,
    x2: Number,
    x3: {type: [Number], default: [1, 5, 10]},
    x4: {type: String, default: "blabla"}
})

const fooArraySchema = new mongoose.Schema({
    name: String,
    array1: {
        type: [barSchema]
      }
    
  });

const fooSchema = new mongoose.Schema({
    name: String,
    dict1: {
        type: Map,
        of: barSchema
      }
    
  });

const FooArray = mongoose.model('FooArray', fooArraySchema);
const Foo = mongoose.model('Foo', fooSchema);

module.exports = {Foo, FooArray}