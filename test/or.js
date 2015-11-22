var andor = require('../')
var test = require('tape')

test('or', function (tt) {
    tt.plan(1)

    var cond = {or:[{field:"value"},{one:1},{two:2},{fun:"yes"}]}
    var res = {condition: "(field = ? OR one = ? OR two = ? OR fun = ?)", params: ["value",1,2,"yes"]}

    tt.deepEqual(andor(cond), res)
})
