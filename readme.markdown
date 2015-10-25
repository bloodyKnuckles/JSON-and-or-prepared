# JSON-and-or-prepared

# example

``` js
var andor = require('JSON-and-or-prepared')

var cond = {or:[{one:1},{two:2}],fun:'yes'}

console.log(andor(cond))
```

output:

```
Object {condition: "((one = ? OR two = ?) AND fun = ?)", params: [1,2,"yes"]}
```

# install

```
npm install JSON-and-or-prepared
```

# license

MIT
