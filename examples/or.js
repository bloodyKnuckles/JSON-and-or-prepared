var andor = require('../')

var cond = {or: [{field: "value"}, {one: 1}, {two: 2}, {fun: "yes"}]}

console.log(andor(cond))
