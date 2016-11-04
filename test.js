const leftpaw = require('leftpaw')

leftpaw('foo', 5)
// => "  foo"

leftpaw('foobar', 6)
// => "foobar"

leftpaw(1, 2, '0')
// => "01"

leftpaw(17, 5, 0)
// => "00017"
