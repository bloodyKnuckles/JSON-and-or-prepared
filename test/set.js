var andor = require('../')
var test = require('tape')

test('set', function (tt) {
    tt.plan(1)

    var cond = {field:["one","two","three"]}
    var res = {condition: "(field IN (?,?,?))", params: ["one","two","three"]}

    tt.deepEqual(andor(cond), res)
})

