var andor = require('../')

var cond = {a:"b",field:["value","test"],or:[{one:1},{two:2}],fun:"yes"}

console.log(andor(cond))
