# JSON-and-or-prepared

Use a JSON object to represent a logical conditional statement and convert that
to a SQL ready prepared statement string along with an array of corresponding values.

# example

``` js
var andor = require('JSON-and-or-prepared')

var cond = {field:"value",or:[{one:1},{two:2}],fun:"yes"}

console.log(andor(cond))
```

output:

```
Object {condition: "(field = ? AND (one = ? OR two = ?) AND fun = ?)", params: ["value",1,2,"yes"]}
```

JSON object parameters are by default "and-ed" conditions. To introduce an
"or-ed" condition insert a parameter named "or" and provide an array containing
objects that represent the field/value combinations to be "or-ed".

# example

``` js
var andor = require('JSON-and-or-prepared')

var cond = {field:["one","two","three"]}

console.log(andor(cond))
```

output:

```
Object {condition: "(field IN (?,?,?))", params: ["one","two","three"]}
```

Use an array of values in place of a parameter value to provide a list of field
options.

# example

``` js
var andor = require('JSON-and-or-prepared')

var cond = {field:"value",or:[{one:1},{two:2,three:"three"}]}

console.log(andor(cond))
```

output:

```
Object {condition: "(field = ? AND (one = ? OR (two = ? AND three = ?)))", params: ["value",1,2,"three"]}
```

Generally speaking, "and-ed" expressions are listed in objects, and "or-ed"
expressions are listed in arrays.

# install

```
npm install JSON-and-or-prepared
```

# license

MIT
