var andor = require('../')

var cond = {field: "value", or: [{one: 1}, {two: 2}], fun: "yes"}

console.log(andor(cond))
