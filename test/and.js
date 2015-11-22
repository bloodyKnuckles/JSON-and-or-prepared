var andor = require('../')
var test = require('tape')

test('and', function (tt) {
    tt.plan(1)

    var cond = {field:"value",one:1,two:2,fun:"yes"}
    var res = {condition: "(field = ? AND one = ? AND two = ? AND fun = ?)", params: ["value",1,2,"yes"]}

    tt.deepEqual(andor(cond), res)
})

