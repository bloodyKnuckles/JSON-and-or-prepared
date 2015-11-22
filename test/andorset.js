var andor = require('../')
var test = require('tape')

test('and or set', function (tt) {
    tt.plan(1)

    var cond = {field:["value","test"],or:[{one:1},{two:2}],fun:"yes"}
    var res = {condition: "(field IN (?,?) AND (one = ? OR two = ?) AND fun = ?)", params: ["value","test",1,2,"yes"]}

    tt.deepEqual(andor(cond), res)
})

