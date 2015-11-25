module.exports = andor

function andor (obj) {
    var retcond = [], retparams = []
    var looparr, jointype
    if ( obj.or && 1 === Object.keys(obj).length ) {
        looparr  = obj.or
        jointype = ' OR '
    }
    else {
        looparr  = Object.keys(obj)
        jointype = ' AND '
    }

    looparr.forEach(function (elem) {
        var key, andorsobj
        if ( 'string' === typeof elem ) {
            key = elem
            andorsobj = obj
        }
        else {
            key = Object.keys(elem)[0]
            andorsobj = elem
        }
        if ('or' === key || (' OR ' === jointype && 1 < Object.keys(elem).length)) {
            if ('or' === key) {
                andorsobj = {or: obj[key]}
            }
            var andorret = andor(andorsobj)
            retcond.push(andorret.condition)
            retparams = retparams.concat(andorret.params)
        }
        else if (Array.isArray(andorsobj[key])) {
            retcond.push(key + ' IN (' + andorsobj[key].map(function () {
                return '?'
            }).join(',') + ')')
            retparams = retparams.concat(andorsobj[key])
        }
        else {
            retcond.push(key + ' = ?')
            retparams.push(andorsobj[key])
        }
    })
    return {condition:'(' + retcond.join(jointype) + ')', params:retparams}
}

