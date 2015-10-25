# JSON-logic-condition-prepared-statement

# example

``` js
var andor = require('JSON-logic-condition-prepared-statement')

var cond = {or:[{one:1},{two:2}],fun:'yes'}

console.log(andor(cond))
```

output:

```
Object {condition: "((one = ? OR two = ?) AND fun = ?)", params: [1,2,"yes"]}
```

# install

```
npm install JSON-logic-condition-prepared-statement
```

# license

MIT
