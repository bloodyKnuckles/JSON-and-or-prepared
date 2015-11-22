var andor = require('../')
var test = require('tape')

test('and or', function (tt) {
    tt.plan(1)

    var cond = {field:"value", or:[{one:1},{two:2}],fun:"yes"}
    var res = {condition: "(field = ? AND (one = ? OR two = ?) AND fun = ?)", params: ["value",1,2,"yes"]}

    tt.deepEqual(andor(cond), res)
})
