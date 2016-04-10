# introduce

A simple wrapper around Node's regular `require` function that makes it easy
to require file relative to the current script in a platform agnostic manner.

## Examples

```javascript
const introduce = require('introduce');
const foo = introduce('lib', 'foo.js');
const bar = introduce('lib', 'bar'); // could be .js or .json
const foobar = introduce(['lib', 'subdir', 'foobar']);

// paths work as well
const relativeFoo = introduce('./lib/foo');
const winFoo = introduce('lib\\foo');
```

## License

[MIT License](http://jsumners.mit-license.org/)
