module.exports = andor

function andor(obj) {
    var looparr  = obj.or && 1 === Object.keys(obj).length? obj.or: Object.keys(obj)
    var jointype = obj.or && 1 === Object.keys(obj).length? ' OR ': ' AND '
    var retarr = [], retparams = []
    looparr.forEach(function (elem) {
        var key       = 'string' === typeof elem? elem: Object.keys(elem)[0]
        var andorsobj = 'string' === typeof elem? obj: elem
        if ('or' === key || (' OR ' === jointype && 1 < Object.keys(elem).length)) {
            if ('or' === key) {
                andorsobj = {or: obj[key]}
            }
            var andorret = andor(andorsobj)
            retarr.push(andorret[0])
            retparams = retparams.concat(andorret[1])
        }
        else if (Array.isArray(andorsobj[key])) {
            retarr.push(key + ' IN (' + andorsobj[key].map(function () {
                return '?'
            }).join(',') + ')')
            retparams = retparams.concat(andorsobj[key])
        }
        else {
            retarr.push(key + ' = ?')
            retparams.push(andorsobj[key])
        }
    })
    return {condition:'(' + retarr.join(jointype) + ')', params:retparams}
}

